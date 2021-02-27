import { useContext } from 'react';
import { ChallangeContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox(){
    const contextData = useContext(ChallangeContext)

    console.log(contextData);
    

    const hasActiveChallange = true;

    return (
        <div className={styles.ChallangeBoxContainer}>
            { hasActiveChallange ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>

                        <footer>
                            <button 
                                type="button"
                                className={styles.challangeFailedButton}
                            >
                             Falhei
                            </button>
                            <button 
                                type="button"
                                className={styles.challangeSucceededButton}
                            >
                             Completei
                            </button>
                        </footer>
                    </main>
                </div>
            ) : (
            <div className={styles.challangeBoxNotActive}>
                <strong>Inicie um ciclo para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg"/>
                    Avance de level completando desafios.
                </p>
             </div>
            )}
        </div>
    ) 
}