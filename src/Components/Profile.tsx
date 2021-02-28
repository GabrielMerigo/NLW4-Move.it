import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallangeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/gabrielmerigo.png" alt="Gabriel Merigo"/>
            <div>
                <strong>Gabriel Merigo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level} 
                </p>
            </div>
        </div>
    )   
}