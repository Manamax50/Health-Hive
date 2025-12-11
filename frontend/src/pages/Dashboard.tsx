import {useState} from 'react';
import styles from './Dashboard.module.css';
import Macros from './Macros';

export default function Dashboard(){

    return(
        <div className = {styles.dashboard}>
            <Macros />
        </div>
    )
}