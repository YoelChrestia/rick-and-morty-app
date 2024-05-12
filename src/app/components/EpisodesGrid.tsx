import React from 'react'

export const EpisodesGrid = () => {
  return (
    <section className='flex justify-between mt-8 w-full border-black border-2 p-4'>
        <div className='w-2/6 border-green-600'>
            <h4 className='mb-4 text-center'>Character #1 - Only Episodes</h4>
            <div className='flex flex-col gap-4'>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
            </div>
        </div>
        <div className=' w-2/6'>
            <h4 className='mb-4 text-center'>Character #1 & #2 - Shared Episodes</h4>
            <div className='flex flex-col gap-4'>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
            </div>
        </div>
        <div className='w-2/6'>
            <h4 className='mb-4 text-center'>Character #2 - Only Episodes</h4>
            <div className='flex flex-col gap-4'>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
                <span>bla bla bla</span>
            </div>
        </div>
    </section>
  )
}
