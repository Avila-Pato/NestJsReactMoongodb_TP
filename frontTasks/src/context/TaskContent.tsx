import { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";
import { CreateTask, Task } from "../interface/task.interface";

interface TaskContextProps {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}
export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  createTask: () => {},
});
interface Props {
  children: React.ReactNode;
}
export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksRequest()
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  // creando tarea para guardar el base de datos
   const createTask = async (task: CreateTask) => {
    console.log(task);
    console.log(task);
    const res = await createTaskRequest(task);
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};