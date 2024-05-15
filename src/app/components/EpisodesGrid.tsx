'use client'

import React, { useContext } from 'react'
import { CharacterContext } from '../contexts/characterContexts'

export const EpisodesGrid = () => {

  const characterContext = useContext(CharacterContext)


  return (
    <section className='flex justify-between mt-8 w-full border-black border-2 p-4'>
        <div className='w-2/6 border-green-600'>
            <h4 className='mb-4 text-center'>Character #1 - Only Episodes</h4>
            <div className='flex flex-col gap-4'>
            { characterContext?.firstCharacterEpisodes?.map((episode, index)=>{
                return( <span key={index}>{episode.episode} - {episode.name} - {episode.air_date}</span>)
                })
            }
            </div>
        </div>
        <div className=' w-2/6'>
            <h4 className='mb-4 text-center'>Character #1 & #2 - Shared Episodes</h4>
            <div className='flex flex-col gap-4'>
            { characterContext?.sharedEpisodes?.map((episode, index)=>{
                return( <span key={index}>{episode.episode} - {episode.name} - {episode.air_date}</span>)
                })
            }
            </div>
        </div>
        <div className='w-2/6'>
            <h4 className='mb-4 text-center'>Character #2 - Only Episodes</h4>
            <div className='flex flex-col gap-4'>
            { characterContext?.secondCharacterEpisodes?.map((episode, index)=>{
                return( <span key={index}>{episode.episode} - {episode.name} - {episode.air_date}</span>)
                })
            }
            </div>
        </div>
    </section>
  )
}
