import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangeContext } from "./ChallangeContext"

interface CountdownContextData {
    minutes: number
    second: number
    hasFinished: boolean 
    isActive: boolean
    startCountdown: () => void
    resetCoundtown: () => void
}


interface CountdownProviderProps{
    children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeOut: NodeJS.Timeout

export function CountdownProvider({children}: CountdownProviderProps){
    const { startNewChallange } = useContext(ChallangeContext)

    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const second = time % 60

    function startCountdown(){
        setIsActive(true)
    }

    function resetCoundtown(){
        clearTimeout(countdownTimeOut)
        setIsActive(false)
        setTime(0.1 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if(isActive && time > 0){
           countdownTimeOut = setTimeout(() =>{
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallange()
        }
    }, [isActive, time])


    return(
        <CountdownContext.Provider value={{
            minutes,
            second,
            hasFinished,
            isActive,
            startCountdown,
            resetCoundtown 
        }}>
            {children}
        </CountdownContext.Provider>
    )
}