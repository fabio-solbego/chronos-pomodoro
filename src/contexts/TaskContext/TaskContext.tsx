import { createContext } from "react";
import { taskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionModel } from "./taskActions";

type TaskContextProps = {
  state: taskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
