import { createContext, useState, ReactNode } from 'react'
import { Interface } from 'readline'
import challanges from '../../challenges.json'


interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount:number;
}

interface challangesContextData {
    level: number,
    currentExperience: number,
    experienceToNextLevel: number,
    challangesCompleted: number,
    activeChallenge: Challenge,
    completeChallange: () => void,
    resetChallenge: () => void,
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

    const [activeChallenge, setActiveChallenge] =  useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallange(){
        const randomNewChallengeIndex = Math.floor(Math.random() * challanges.length)
        const challenge = challanges[randomNewChallengeIndex]
        setActiveChallenge(challenge)

    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallange(){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()                               
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)

        setChallangesCompleted(challangesCompleted + 1)
    }

    return (
        <ChallangeContext.Provider 
        value={{level, 
                currentExperience,
                challangesCompleted,
                experienceToNextLevel,
                activeChallenge,
                resetChallenge, 
                levelUp,
                startNewChallange,
                completeChallange
                }}>
            {children}
        </ChallangeContext.Provider>
    )
}