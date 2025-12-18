import Button from './Button.tsx';
import styles from './NavBar.module.css'
export default function NavBar(){


    return (
        <div className={styles.navBar}>
            <Button  destination= "" buttonName="Home"/>
            <Button destination="Dashboard" buttonName="Dashboard" />
           


        
        </div>
    )
}