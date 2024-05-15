'use client'

import React from 'react'
import Image from 'next/image'
import { Character } from '../types/Character';

export const Card = (props: { characterData : Character, setSelectCharacter: React.Dispatch<React.SetStateAction<null|number>>, isSelected: boolean  }) => {

  const handleClick = () => {
    props.setSelectCharacter(props.characterData.id)
  }

  return (
    <button className={`flex flex-row border-2 border-black ${props.isSelected ? 'bg-green-500' : 'bg-white'} gap-4 w-96 items-center `} onClick={handleClick}>
        <Image
          src={props.characterData.image}
          alt="Picture of the author"
          width={160}
          height={160}
        />
      <div className='flex flex-col justify-center'>
        <h3 className='mb-4 flex'>{props.characterData.name}</h3>
        <span>{props.characterData.status} - {props.characterData.species}</span>
      </div>
    </button>
  );
}