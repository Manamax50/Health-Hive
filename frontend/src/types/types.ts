export type CardType = "steps" | "goals" | "workouts";

export type button ={
    destination: string,
    buttonName: string,
};
export type StepsCardData = {
  type: "steps";
  title: "Steps";
  value: number;
};

export type GoalsCardData = {
  type: "goals";
  title: "Goals";
  value: string[];
};

export type WorkoutsCardData = {
  type: "workouts";
  title: "Workouts";
  value: string;
};

export type DashboardCardData =
  | StepsCardData
  | GoalsCardData
  | WorkoutsCardData;
