import styles from "./styles.module.css"

export default function Input({ placeholder, icon, ...props }) {

    return (
        <div className={styles.container}>
            {icon}<input {...props} className={styles.input} placeholder={placeholder} />
        </div>
    )

}
