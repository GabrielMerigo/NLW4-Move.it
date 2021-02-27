import { createContext, useState, ReactNode } from 'react'
import { Interface } from 'readline'
import challanges from '../../challenges.json'


interface challangesContextData {
    level: number,
    currentExperience: number,
    levelUp: () => void, 
    startNewChallange: () => void;
    
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallangeContext = createContext({} as challangesContextData)

export function ChallangeProvider({ children }:ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challangesCompleted, setChallangesCompleted] = useState(0)

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallange(){
        console.log('New Challange')
    }

    return (
        <ChallangeContext.Provider 
        value={{level, 
                currentExperience,
                challangesCompleted, 
                levelUp,
                startNewChallange}}>
            {children}
        </ChallangeContext.Provider>
    )
}