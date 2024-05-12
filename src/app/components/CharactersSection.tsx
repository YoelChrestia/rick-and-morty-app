import React from 'react'
import { CardsGrid } from './CardsGrid'
import { Character } from '../types/Character'
import { useFetch } from '../hooks/useFetch'

export const CharactersSection = async () => {

  const charactersData: Character[] = await useFetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')

  return (
    <section className="w-full flex justify-between gap-10">
          <CardsGrid charactersData={charactersData}/>
          <CardsGrid charactersData={charactersData}/>
    </section>
  )
}
