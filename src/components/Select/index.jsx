import styles from "./styles.module.css"

export default function Select({ placeholder, icon, contats, ...props }) {

    return (
        <div className={styles.container}>
            {icon}<select name="teste" id="teste" className={styles.select}>
                <option value="teste1">Teste1</option>
            </select>
        </div>
    )
}
