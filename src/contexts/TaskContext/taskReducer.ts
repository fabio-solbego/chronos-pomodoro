import { taskStateModel } from "../../models/TaskStateModel";
import { TaskActionModel, TaskActionTypes } from "./taskActions";

export function taskReducer(
  state: taskStateModel,
  action: TaskActionModel
): taskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      return state;
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
}
