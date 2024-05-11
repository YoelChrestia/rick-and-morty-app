import React from 'react'
import { Card } from './Card'

export const CardsLayout = () => {
  return (
    <section className='flex flex-col justify-center'>
      <h2 className='text-center mb-8'>Select Character</h2>
      <div className='flex gap-6 flex-wrap justify-between'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </section>
  );
}
