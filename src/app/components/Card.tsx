import React from 'react'
import Image from 'next/image'

export const Card = () => {
  return (
    <div className='flex flex-row border-2 border-black gap-4 w-96'>
        <Image
          src="/PlaceHolder.svg"
          alt="Picture of the author"
          width={160}
          height={160}
        />
      <div className='flex flex-col justify-center'>
        <p className='mb-4'>Name</p>
        <span>Status - Specie</span>
      </div>
    </div>
  );
}