'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Card } from './Card'
import { Character } from '../types/Character'
import { CharacterContext } from '../contexts/characterContexts'

export const CardsGrid =  (props: { position: string}) => {

  const [page, setPage] = useState<number>(1)
  const [maxPages, setMaxPages] = useState<null| number>(null)

  const [data, setData] = useState<Array<Character>|null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response =  await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setData(data?.results)
      setMaxPages(data?.info?.pages)
    }

    fetchData()
  }, [page])
  
  const characterContext = useContext(CharacterContext)

  const setSelectedBasedOnPosition = characterContext ? props.position === 'left' ? characterContext.setFirstCharacterId : characterContext.setSecondCharacterId : () => {}

  const selectedBasedOnPosition = characterContext ? props.position === 'left' ? characterContext.firstCharacterId : characterContext.secondCharacterId : null

  
  const PreviousPage = () => {
    if(page > 1){
      setPage((prev)=> prev - 1)
    }
  }

  const NextPage = () => {
    if(maxPages && page < maxPages){
      setPage((prev)=> prev + 1)
    }
  }
  
  return (
    <>
    <section className='flex flex-col justify-start w-full items-center md:justify-center'>
      <h2 className='text-center mb-8 text-lg underline'>Select Character {props.position === 'left' ? '1#' : '2#'}</h2>
      <div className='flex m-2 gap-4 bg-black text-white p-5 w-auto mb-8'>
      <button className='flex' onClick={PreviousPage}>-</button>
      <span>{page}</span>
      <button className='flex' onClick={NextPage}>+</button>
      </div>
      <div className='flex gap-5 flex-wrap justify-between flex-col 2xl:flex-row'>
        { 
        data?.map((character)=>{
            return( <Card characterData={character} setSelectCharacter={setSelectedBasedOnPosition} key={character.id} isSelected={character.id === selectedBasedOnPosition}/>)
          })
        }
      </div>
    </section>
    </>
  );
}
