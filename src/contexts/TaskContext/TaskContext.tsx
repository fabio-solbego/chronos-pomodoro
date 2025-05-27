import { createContext } from "react";
import { taskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
  state: taskStateModel;
  setState: React.Dispatch<React.SetStateAction<taskStateModel>>;
};
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
