
import TaskItem from "./TaskItem";
import { useTasks } from "../context/useTask";


function TaskList() {
  // useState<Task[]>([]) es se utiliza para definir el estado 
  // de la lista de tareas hecha en interface/task.interface.ts
  // y se utiliza para definir el estado de la lista de tareas
  // de esa manera se llama para pintarlo en en el return
  // const [tasks, setTasks] = useState<Task[]>([])

const {tasks} = useTasks()
 


  return (
    <div>
      {
        tasks.map((task) => (
          <TaskItem task={task} key={task._id} />
        ))
      }
    </div>
  )
}
export default TaskList