import styles from './Macros.module.css';

type macro = {
    nameOfClass: string,
    color: string,
    percentage: number

} 
export default function Macro({nameOfClass, color, percentage}: macro){

    return(
        <div className={`${styles['macro-wrapper']}`}>
            <div className={`${styles[nameOfClass]} ${styles.progress}`} 
                style={{"--percentage": percentage,"--color": color,}as React.CSSProperties}
            />
            <div className={styles.text}>
                {percentage}% 
            </div> 
        </div>
    )
}