import { useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
    const [time, setTime] = useState(25 * 60)
    const [active, setActive] = useState()

    const minutes = Math.floor(time / 60)
    const second = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLetf, secondRight] = String(second).padStart(2, '0').split('')

    function startCountdown(){

    }

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
        <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdown}
        >
            Iniciar Ciclo
        </button>
        </div>
    )
}