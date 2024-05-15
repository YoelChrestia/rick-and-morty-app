'use client'

import { createContext, useEffect, useState } from "react";
import { Character } from "../types/Character";
import { Episode } from "../types/Episode";

interface characterContextInterface {
    firstCharacterId: null | number,
    setFirstCharacterId: React.Dispatch<React.SetStateAction<null|number>>,
    secondCharacterId: null | number,
    setSecondCharacterId: React.Dispatch<React.SetStateAction<null|number>>,
    firstCharacterEpisodes: Array<Episode> | null,
    secondCharacterEpisodes: Array<Episode> | null,
    sharedEpisodes: Array<Episode> | null
}

export const CharacterContext = createContext<characterContextInterface | null>(null);

export const CharacterProvider = ({ children }: React.PropsWithChildren) => {

    const [firstCharacterId, setFirstCharacterId] = useState<null|number>(null)
    const [secondCharacterId, setSecondCharacterId] = useState<null|number>(null)
    const [firstCharacterEpisodes, setFirstCharacterEpisodes] = useState<null|Episode[]>(null)
    const [secondCharacterEpisodes, setSecondCharacterEpisodes] = useState<null|Episode[]>(null)
    const [sharedEpisodes, setSharedEpisodes] = useState<null|Episode[]>(null)

    useEffect(() => {
        if(firstCharacterId){
            const fetchData = async () => {
                const firstCharacterResponse = await fetch(`https://rickandmortyapi.com/api/character/${firstCharacterId}`)
                const firstCharacterData = await firstCharacterResponse.json()

                const firstCharacterEpisodesResponse = await fetch(`https://rickandmortyapi.com/api/episode/${obtainEpisodesRoutes(firstCharacterData)}`) 
                const firstCharacterEpisodesData = await firstCharacterEpisodesResponse.json()

                if(!Array.isArray(firstCharacterEpisodesData)){
                    setFirstCharacterEpisodes([firstCharacterEpisodesData])
                }else{
                    setFirstCharacterEpisodes(firstCharacterEpisodesData)
                }
            }
            fetchData()
        }
    }, [firstCharacterId])

    useEffect(() => {
        if(secondCharacterId){
            const fetchData = async () => {
                const secondCharacterResponse = await fetch(`https://rickandmortyapi.com/api/character/${secondCharacterId}`)
                const secondCharacterData = await secondCharacterResponse.json()

                const secondCharacterEpisodesResponse = await fetch(`https://rickandmortyapi.com/api/episode/${obtainEpisodesRoutes(secondCharacterData)}`) 
                const secondCharacterEpisodesData = await secondCharacterEpisodesResponse.json()

                if(!Array.isArray(secondCharacterEpisodesData)){
                    setSecondCharacterEpisodes([secondCharacterEpisodesData])
                }else{
                    setSecondCharacterEpisodes(secondCharacterEpisodesData)
                }
            }
            fetchData()
        }
    }, [secondCharacterId])

    useEffect(() => {
        if(firstCharacterEpisodes && secondCharacterEpisodes){
            setSharedEpisodes(getCommonElementsByEpisode(firstCharacterEpisodes, secondCharacterEpisodes))
        }
    }, [firstCharacterEpisodes,secondCharacterEpisodes])

    const obtainEpisodesRoutes = (character: Character) => {
        return character.episode.map((url) => {
            const parts = url.split('/');
            return parts[parts.length - 1];
        }).join(',')
    }

    const getCommonElementsByEpisode = (firstCharacterEpisodes: Array<Episode>, secondCharacterEpisodes: Array<Episode>) => {
        return firstCharacterEpisodes.filter(item1 => 
            secondCharacterEpisodes.some(item2 => item1.episode === item2.episode)
        );
    }

    return <CharacterContext.Provider value={{firstCharacterId,setFirstCharacterId,secondCharacterId,setSecondCharacterId,firstCharacterEpisodes,secondCharacterEpisodes,sharedEpisodes}}> {children} </CharacterContext.Provider>
}