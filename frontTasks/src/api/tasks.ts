const API = 'http://localhost:3000/api';
import  { Task } from "../interface/task.interface";
export const createTaskRequest = (task: Task) => {
    console.log("Enviando tarea:", task);  // Verifica el contenido aquí
    return fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
