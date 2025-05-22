import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useState } from "react";
import Tasklistitem from "./tasklistitem";


export default function Tasklist(props: any) {
  // load tasks from local storage
  
 const [tasks, setTasks] = useState<{ id: number; title: string; description: string; deadline: string; completed: boolean }[]>([

  ]);
  
  const addTask = () => {
    //save this to local storage
    saveTasksToLocalStorage({
      id: tasks.length + 1,
      title: "New Task",
      description: "This is a new task",
      deadline: "2025-10-01",
      completed: false,
    });
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: "New Task",
        description: "This is a new task",
        deadline: "2025-10-01",
        completed: false,
      },
    ]);
  };

  return (
    // This component will be used to display the list of tasks
    // It will be used to show the tasks in a list format with checkboxes
    // Later, it will be used to display the task details, edit and delete options
    <div className="bg-gray-200 text-black p-12">
      <h2 className="text-2xl font-bold mb-4 flex justify-left">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Tasklistitem key={task.id} bg="red" task={task} />
        ))}
      </ul>
      <button onClick={addTask} className="text-gray-400 p-2">
      + New Task
      </button>
    </div>
    //add new task button here
  );
}
function saveTasksToLocalStorage(arg0: { id: number; title: string; description: string; deadline: string; completed: boolean; }) {
  try {
    //store the tasks in local storage
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      const tasksArray = JSON.parse(tasks);
      tasksArray.push(arg0);
      localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }
    else {
      localStorage.setItem("tasks", JSON.stringify([arg0]));
    }
  } catch (error) {
    //if there is an error, then set the tasks to empty array
    localStorage.setItem("tasks", JSON.stringify([]));  
  } 
}

