import { TaskModel } from "./TaskModel";

export type taskStateModel = {
  tasks: TaskModel[]; //histórico, MainForm
  secondsRemaining: number; // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; //Titulo, CountDown
  activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
  currentCycle: number; //Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
