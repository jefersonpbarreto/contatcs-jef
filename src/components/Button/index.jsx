import styles from "./styles.module.css"

export default function Button({ icon, ...props }) {

    return (
        <button className={styles.button}>
            {icon} Adicionar contato
        </button>
    )
}
