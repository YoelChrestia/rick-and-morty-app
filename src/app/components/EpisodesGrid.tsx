'use client'

import React, { useContext } from 'react'
import { CharacterContext } from '../contexts/characterContexts'

export const EpisodesGrid = () => {

  const characterContext = useContext(CharacterContext)

  if(!characterContext?.firstCharacterId || !characterContext.secondCharacterId){
    return
  }

  return (
    <section className='flex mt-8 w-full border-black border-2 p-4 flex-col items-center md:flex-row md:items-start gap-5 max-h-96 overflow-y-scroll'>
        <div className='w-full md:w-2/6'>
            <h4 className='mb-4 text-center text-xl underline'>Character #1 - Only Episodes</h4>
            <div className='flex flex-col gap-4'>
            { characterContext?.firstCharacterEpisodes?.map((episode, index)=>{
                return( <span key={index}>{episode.episode} - {episode.name} - {episode.air_date}</span>)
                })
            }
            </div>
        </div>
        <div className='w-full md:w-2/6'>
            <h4 className='mb-4 text-center text-xl underline'>Character #1 & #2 - Shared Episodes</h4>
            <div className='flex flex-col gap-4'>
            { characterContext?.sharedEpisodes?.map((episode, index)=>{
                return( <span key={index}>{episode.episode} - {episode.name} - {episode.air_date}</span>)
                })
            }
            </div>
        </div>
        <div className='w-full md:w-2/6'>
            <h4 className='mb-4 text-center text-xl underline'>Character #2 - Only Episodes</h4>
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
