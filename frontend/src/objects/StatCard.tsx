import styles from "./StatCard.module.css";
import type { DashboardCardData } from "../types/types";

type Props = {
  data: DashboardCardData;
};

export default function StatCard({ data }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.angledGlow} />

      <div className={styles.notchTop} />
      <div className={styles.cardTitle}>{data.title}</div>

      <div className={styles.dividerBase} />
      <div className={styles.dividerAccent} />

      <div className={styles.cardContent}>
        {data.type === "steps" && (
          <span className={styles.stepsValue}>
            {data.value.toLocaleString()}
          </span>
        )}

        {data.type === "goals" && (
          <ul className={styles.goalsList}>
            {data.value.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        )}

        {data.type === "workouts" && (
          <span className={styles.workoutValue}>{data.value}</span>
        )}
      </div>

      <div className={styles.notchBottom} />
    </div>
  );
}
