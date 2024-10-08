import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { TaskProvider } from "./context/TaskContent"

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white font-bold
    flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-1/5">
      <h1 className="text-3xl font-bold text-center block my-2">Task App</h1>
      <TaskProvider>
      <TaskForm />
      <TaskList />
      </TaskProvider>
      </div>
    </div>
  )
}

export default App