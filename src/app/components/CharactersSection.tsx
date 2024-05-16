import React from 'react'
import { CardsGrid } from './CardsGrid'

export const CharactersSection = () => {

  return (
    <section className="w-full flex justify-between gap-4 md:gap-10">
          <CardsGrid position={'left'}/>
          <div className='w-3 bg-black'></div>
          <CardsGrid position={'right'}/>
    </section>
  )
}