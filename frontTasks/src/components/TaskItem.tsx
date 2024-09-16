import { useTasks } from "../context/useTask"
import { Task } from "../interface/task.interface"

interface  Props {
 task: Task
}

function TaskItem({ task }: Props) {
  const {deleteTask, updateTask} = useTasks()

  return (
    <>
    <div key={task._id}
          className="bg-zinc-800 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
      </div>
      
        <div className="flex gap-x-2">
    {/* reflejando el estado de la tarea */}
              <button onClick={() => {
                updateTask(task._id, {
                 done: !task.done
                })
              }}
              >
                {task.done ? "done" : "undone"}
                </button>
              
          
              <button onClick={async () => {
                if(!window.confirm('Are you sure you want to delete this task?')) 
                  return 
                await deleteTask(task._id)
              }}>Delete</button>
         </div>


          </>
    
  )
}

export default TaskItem