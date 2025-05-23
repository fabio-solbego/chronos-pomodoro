import { Home } from "./pages/Home";
import { useState } from "react";
import { taskStateModel } from "./models/TaskStateModel";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContext } from "./contexts/TaskContext";

const initialState: taskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
export function App() {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider>
      <Home />
    </TaskContext.Provider>
  );
}
