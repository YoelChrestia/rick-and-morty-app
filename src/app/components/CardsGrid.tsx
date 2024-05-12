'use client'

import React, { useContext, useState } from 'react'
import { Card } from './Card'
import { Character } from '../types/Character'
import { CharacterContext } from '../contexts/characterContexts'

export const CardsGrid = (props: { charactersData : Character[] }) => {

  const [selectCharacter, setSelectCharacter] = useState<null|number>(null)

  const characterContext = useContext(CharacterContext)

  return (
    <section className='flex flex-col justify-center'>
      <h2 className='text-center mb-8'>Select Character</h2>
      <div className='flex gap-6 flex-wrap justify-between'>
        { props.charactersData.map((character)=>{
            return( <Card characterData={character} setSelectCharacter={setSelectCharacter} key={character.id} isSelected={character.id === selectCharacter}/>)
          })
        }
      </div>
    </section>
  );
}
