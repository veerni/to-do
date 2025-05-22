import Image from "next/image";
import tasks from "./tasklist";

export default function Footer(props: any) {
  const addTaskButtonName = "+ New Task";

  const addTask = () => {
    props.print();
  };
  return (
    // This component will be used to display the footer of the page
    // It will be used to show actions like add new task
    // Later, it will be used to display other options like filters, calendar view, and other options
    <div className="bg-gray-200 text-black p-12">
      <button onClick={addTask} className="bg-cyan-600 text-black p-2 rounded-full ml-2 float-right">
        {addTaskButtonName}
      </button>
    </div>
  );
}
