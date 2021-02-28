import { useContext } from 'react';
import { ChallangeContext } from '../contexts/ChallangeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox(){
    const {activeChallenge, resetChallenge, completeChallange} = useContext(ChallangeContext)
    const { resetCoundtown } = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completeChallange()
        resetCoundtown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCoundtown()
    }

return (
    <div className={styles.ChallangeBoxContainer}>
        { activeChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo Desafio</strong>
                    <p>{activeChallenge.description}</p>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challangeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challangeSucceededButton}
                            onClick={handleChallengeSucceeded}
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