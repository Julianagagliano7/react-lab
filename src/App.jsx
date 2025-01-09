import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";


function App() {
  //todo: fix this error later
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação competitiva",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês técnico",
      isCompleted: true
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para aprofundar na lógica",
      isCompleted: false
    }

  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} />
        <AddTasks />
      </div>
    </div>
  )
}

export default App;

