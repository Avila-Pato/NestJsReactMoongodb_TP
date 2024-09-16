export interface Task {
     _id: string;
    title: string;
    description?: string;
    done?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
// export interface CreateTask para create tarea
export type CreateTask = Omit<Task, "_id" | "createdAt" | "updatedAt">;

// creando type para actualizar de la tarea
export type UpdateTask = Partial<CreateTask>;