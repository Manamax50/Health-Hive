import {useState} from 'react';
import styles from './Dashboard.module.css';
import Macros from './Macros';
import StatCard from "../objects/StatCard";
import type { DashboardCardData } from "../types/types";


const cards: DashboardCardData[] = [
  {
    type: "steps",
    title: "Steps",
    value: 8432,
  },
  {
    type: "goals",
    title: "Goals",
    value: ["Drink water", "Stretch", "10k steps"],
  },
  {
    type: "workouts",
    title: "Workouts",
    value: "Push Day",
  },
];

export default function Dashboard(){

    return(
        <div className = {styles.dashboard}>
            <div className={styles.macros}>
                <Macros />
            </div>
            <div className={styles.cards}>
                {cards.map((card, i) => (
                    <StatCard key={i} data={card} />
                ))}
            </div>
        </div>
    )
}