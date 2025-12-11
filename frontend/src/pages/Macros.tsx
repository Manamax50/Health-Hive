import {useState, useEffect} from 'react';
import styles from './Macros.module.css';
import getFoodMacros from '../api/FoodInfo';
import Macro from './Macro';
export default function Macros(){
    const [calories,setCalories] = useState(0);
    const [fats,setFats] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    
    const dailyGoal = 2500;

    useEffect(()=>{
        function getMacros(){
            const food = getFoodMacros();
            setCalories(((prev:any)=>prev + food.calories));
            setCarbs(prev=>prev+food.carbs);
            setFats(prev=>prev+food.fats);
            setProtein(prev=>prev+food.protein);
        }
        getMacros();
        
    },[]);
    

    return(
        <div className={styles.macros}>
            <Macro nameOfClass='carbs' color='red' percentage={25} />
            <Macro nameOfClass='fats' color='green' percentage={25} />
            <Macro nameOfClass='protein' color='blue' percentage={25} />
            <Macro nameOfClass='calories' color='purple' percentage={25} />

        </div>
    )
}