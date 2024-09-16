import { Task } from "../interface/task.interface"

interface  Props {
 task: Task
}

function TaskItem({ task }: Props) {
  return (
    <>
    <div key={task._id}
          className="bg-zinc-800 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
      </div>
      
        <div className="flex gap-x-2">
              <button>Update</button>
              <button>Delete</button>
         </div>


          </>
    
  )
}

export default TaskItem