'use client'

import React from 'react'
import Image from 'next/image'
import { Character } from '../types/Character'

export const Card = (props: { characterData : Character, setSelectCharacter: React.Dispatch<React.SetStateAction<null|number>>, isSelected: boolean  }) => {

  const handleClick = () => {
    props.setSelectCharacter(prev => prev != props.characterData.id ? props.characterData.id : null)
  }

  return (
    <button className={`flex flex-col p-2 md:p-0 md:flex-row ${props.isSelected ? 'bg-blue-300' : 'bg-gray-200'} gap-4 w-full 2xl:w-[48%] items-center`} onClick={handleClick}>
        <Image
          src={props.characterData.image}
          alt="Picture of the author"
          width={150}
          height={150}
          className=''
        />
      <div className='flex flex-col justify-center items-center md:items-start'>
        <h3 className='mb-4 flex text-center'>{props.characterData.name}</h3>
        <span className='flex text-center items-center'>
          <div 
            className={`w-4 h-4 flex rounded-full  mr-1
            ${props.characterData.status === 'Alive' ? 'bg-green-500' : props.characterData.status === 'Dead' ? 'bg-red-500' : 'bg-yellow-500'}
          `}/>
            {props.characterData.status} - {props.characterData.species}
          </span>
      </div>
    </button>
  );
}