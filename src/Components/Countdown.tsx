import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
    const { 
        minutes,
        second,
        hasFinished,
        isActive,
        startCountdown,
        resetCoundtown 
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLetf, secondRight] = String(second).padStart(2, '0').split('')

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

        {hasFinished ? (
            <button 
            disabled 
            className={styles.countdownButton}
            >
            Ciclo Encerrado
            </button>
        ) : (
            <>
            { isActive ? (
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

            </>
        ) }

    
        </div>
    )
}