import { useContext } from "react"
import { ChallangeContext } from "../contexts/ChallangeContext"
import styles from "../styles/components/CompletedChallanges.module.css"

export function CompletedChallanges() {
    const {challangesCompleted} = useContext(ChallangeContext)

    return(
        <div className={styles.CompletedChallangesContainer}>
            <span>Desafio Completos</span>
            <span>{challangesCompleted}</span>
        </div>
    )
}