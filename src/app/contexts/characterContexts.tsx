'use client'

import { createContext, useState } from "react";

interface characterContextInterface {
    firstCharacter: null | number,
    setFirstCharacter: React.Dispatch<React.SetStateAction<null|number>>,
    secondCharacter: null | number,
    setSecondCharacter: React.Dispatch<React.SetStateAction<null|number>>
}

export const CharacterContext = createContext<characterContextInterface | null>(null);

export const CharacterProvider = ({ children }: React.PropsWithChildren) => {

    const [firstCharacter, setFirstCharacter] = useState<null|number>(null)
    const [secondCharacter, setSecondCharacter] = useState<null|number>(null)

    return <CharacterContext.Provider value={{firstCharacter,setFirstCharacter,secondCharacter,setSecondCharacter}}> {children} </CharacterContext.Provider>
}