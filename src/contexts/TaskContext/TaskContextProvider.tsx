import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    return state;
  }, 0);

  //  useEffect(() => {
  // console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1> O número é: {numero}</h1>
    </TaskContext.Provider>
  );
}
