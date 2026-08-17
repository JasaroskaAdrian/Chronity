import React from 'react'

interface AddTaskButtonProps {
    onClick: () => void;
}

const AddTaskButton = ({ onClick }: AddTaskButtonProps) => {
  return (
    <div>
        <button
            onClick={onClick} 
            className="bg-sky-300 rounded-2xl p-1 hover:bg-sky-500 active:bg-sky-700">
            <h1 className="text-black">New Task</h1>
        </button>
    </div>
  )
}

export default AddTaskButton