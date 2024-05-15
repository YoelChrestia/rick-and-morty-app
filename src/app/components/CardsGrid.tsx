'use client'

import React, { useContext, useState } from 'react'
import { Card } from './Card'
import { Character } from '../types/Character'
import { CharacterContext } from '../contexts/characterContexts'

export const CardsGrid = (props: { charactersData : Character[] , position: string}) => {

  const characterContext = useContext(CharacterContext)

  const setSelectedBasedOnPosition = characterContext ? props.position === 'left' ? characterContext.setFirstCharacterId : characterContext.setSecondCharacterId : () => {}

  const selectedBasedOnPosition = characterContext ? props.position === 'left' ? characterContext.firstCharacterId : characterContext.secondCharacterId : null

  return (
    <section className='flex flex-col justify-center'>
      <h2 className='text-center mb-8'>Select Character</h2>
      <div className='flex gap-6 flex-wrap justify-between'>
        { props.charactersData.map((character)=>{
            return( <Card characterData={character} setSelectCharacter={setSelectedBasedOnPosition} key={character.id} isSelected={character.id === selectedBasedOnPosition}/>)
          })
        }
      </div>
    </section>
  );
}
