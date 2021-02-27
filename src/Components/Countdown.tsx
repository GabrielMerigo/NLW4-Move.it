import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
    let countdownTimeOut: NodeJS.Timeout

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const second = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLetf, secondRight] = String(second).padStart(2, '0').split('')

    function startCountdown(){
        setIsActive(true)
    }

    function resetCoundtown(){
        clearTimeout(countdownTimeOut)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
           countdownTimeOut = setTimeout(() =>{
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])


    return(
        <div>

        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLetf}</span>    
                <span>{secondRight}</span>    
            </div>    
        </div>

        {hasFinished && (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}` }
            >
            Abandonar Ciclo
            </button>
        ) }

        {isActive ? (
                <button 
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}` }
                onClick={resetCoundtown}
                >
                Abandonar Ciclo
                </button>
            ) : 

            (
                <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
                >
                 Iniciar Ciclo
                </button>
             )}

        </div>
    )
}