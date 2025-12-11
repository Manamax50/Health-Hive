import styles from './navBar.module.css';
export default function Button({buttonName}:{buttonName:string}){
    const lowerCaseButton = buttonName.toLowerCase();
    const className = styles[lowerCaseButton];
    
    return(
        <button className ={`${className}, ${styles['button']}`}>
            {buttonName}
        </button>
    )
}