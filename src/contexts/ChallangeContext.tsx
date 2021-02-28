import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challanges from '../../challenges.json'
import { LevelUpModal } from '../Components/LevelUpModal'

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
    level: number;
    currentExperience: number;
    challangesCompleted: number
}

export const ChallangeContext = createContext({} as challangesContextData)

export function ChallangeProvider({ children,...rest }:ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challangesCompleted, setChallangesCompleted] = useState(rest.challangesCompleted ?? 0)

    const [activeChallenge, setActiveChallenge] =  useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', level.toString())
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challangesCompleted', String(challangesCompleted))
        
    }, [level, currentExperience, challangesCompleted])

    function levelUp(){
        setLevel(level + 1)
    }


    function startNewChallange(){
        const randomNewChallengeIndex = Math.floor(Math.random() * challanges.length)
        const challenge = challanges[randomNewChallengeIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio!', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
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
            <LevelUpModal />
            
        </ChallangeContext.Provider>
    )
}