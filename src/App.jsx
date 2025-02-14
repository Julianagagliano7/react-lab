import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import { v4 } from 'uuid';
import MainTitle from "./components/MainTitle";


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  //chamada ao backend
  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4', {
  //       method: 'GET'
  //     });
  //     const data = await response.json();

  //     setTasks(data);
  //   }
  //   fetchTasks();
  // }, [])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task;
    })

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <MainTitle>Gerenciador de Tarefas</MainTitle>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App;

