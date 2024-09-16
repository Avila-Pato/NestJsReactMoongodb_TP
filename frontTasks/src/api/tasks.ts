const API = 'http://localhost:3000/api';
import  { CreateTask,  } from "../interface/task.interface";
export const createTaskRequest = (task: CreateTask) => {
    console.log("Enviando tarea:", task);  // Verifica el contenido aquí
    return fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export const getTasksRequest = () => fetch(`${API}/tasks`);
