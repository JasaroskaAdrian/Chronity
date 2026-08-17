import React, { useState } from 'react'

interface TaskFormProps {
  onClose: () => void;
}

const TaskForm = ({ onClose }: TaskFormProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const createTask = () => {
    console.log(taskName);
    console.log(taskDesc);
    if (taskName != null && taskName.trim() !== "") {
        onClose();
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-[450px] rounded-2xl bg-white p-8 shadow-xl">
        <button className="absolute top-2 right-4 border hover:bg-gray-100 active:bg-gray-200 rounded-full flex items-center justify-center border-gray-200 w-8 h-8 text-gray-950 cursor-pointer" 
                onClick={onClose}>
                  ✕
        </button>
        <h1 className="mb-6 text-2xl font-semibold text-black">
          Create Task
        </h1>
        <div className="flex flex-col gap-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Task Name
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3 text-black outline-none focus:border-blue-500"
              placeholder="e.g. Learn C#" 
              onChange={(event) => setTaskName(event.target.value)} />
            
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Description
            </label>

            <textarea
              className="w-full resize-none rounded-lg border border-gray-300 p-3 text-black outline-none focus:border-blue-500"
              rows={4}
              placeholder="What do you need to do?"
              onChange={(event) => setTaskDesc(event.target.value)}
            />
          </div>
          <p className="text-black">
            {taskName} - {taskDesc}
          </p>
          <button className="rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
                  onClick={createTask}>
            Create Task
          </button>

        </div>
      </div>
    </div>
  );
};

export default TaskForm