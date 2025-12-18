import styles from './navBar.module.css';
import {useNavigate} from 'react-router-dom'
import type {button} from '../types/types'

 const Button: React.FC<button> = ({destination, buttonName})=>{
    const lowerCaseButton = buttonName.toLowerCase();
    const className = styles[lowerCaseButton];
    
    const navigation = useNavigate();

    function handleNav (){
        navigation(`/${destination}`)
    }

    return(
        <button onClick={handleNav} className ={`${className}, ${styles['button']}`}>
            {buttonName}
        </button>
    )
}

export default Button