'use client'

import React from 'react'
import Image from 'next/image'
import { Character } from '../types/Character';

export const Card = (props: { characterData : Character, setSelectCharacter: React.Dispatch<React.SetStateAction<null|number>>, isSelected: boolean  }) => {

  const handleClick = () => {
    props.setSelectCharacter(props.characterData.id)
  }

  return (
    <button className={`flex flex-row ${props.isSelected ? 'bg-blue-300' : 'bg-gray-300'} gap-4 w-[48%] items-center`} onClick={handleClick}>
        <Image
          src={props.characterData.image}
          alt="Picture of the author"
          width={150}
          height={150}
          className=''
        />
      <div className='flex flex-col justify-center items-start'>
        <h3 className='mb-4 flex text-left'>{props.characterData.name}</h3>
        <span >{props.characterData.status} - {props.characterData.species}</span>
      </div>
    </button>
  );
}