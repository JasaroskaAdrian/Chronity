import Image from "next/image";

interface Task {
    taskname: string;
    taskdesc: string;
}
// Creating a TaskCardProps is necessary since the Interface "Task" does not have a Type, thats why we need a Type for the Task itself
interface TaskCardProps {
    task: Task;
}

// "I'm receiving props shaped like TaskCardProps, and I'm destructuring the Task property from them."
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div>
      <div className="w-[300px] h-[150px] bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-black">{task.taskname ? task.taskname : 'Unknown'}</h2>
        <p className="text-black">{task.taskdesc ? task.taskdesc : 'Unknown'}</p>
      </div>
    </div>
  );
}
