import styles from './Macros.module.css';

type macro = {
    nameOfClass: string,
    color: string,
    percentage: number

} 
export default function Macro({nameOfClass, color, percentage}: macro){

    return(
        <div className={`${styles[nameOfClass]} ${styles.progress}`} 
            style={{"--percentage": percentage,"--color": color,}as React.CSSProperties}
        >
            {percentage}%
        </div> 
    )
}