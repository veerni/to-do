interface Task {
    title: string;
    description: string;
    completed: boolean;
}

export default function Tasklistitem({ task, bg }: { task: Task, bg: string }) {
    //code goes here
    return (
        // This component will be used to display the task item
        // It will be used to show the task title, description, and completed status
        // Later, it will be used to display the edit and delete options
        <div className={`bg-${bg}-200 text-black p-4 mb-4 rounded-lg`}>
            <a className="text-l font-bold p-2">{task.title}</a>
            <p className="text-m ml-5">{task.description}</p>
        </div>
    );
}