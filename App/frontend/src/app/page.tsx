"use client";
// It tells Next.js that Home is a Client Component, allowing it to use client-side React features such as state and event handlers.

import AddTaskButton from "@/components/AddTaskButton";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import { useState } from "react";
0
const TempTasks = [
  {
    taskid: 1,
    taskname: "Learn C#",
    taskdesc: "Build my first API",
  },
  {
    taskid: 2,
    taskname: "Learn JS",
    taskdesc: "Build a website",
  }
]

export default function Home() {
  const [modalTaskForm, setModalTaskForm] = useState(false);
  return (
    <div>
      <nav className="bg-blue-950 flex justify-start">
        <div className="px-6 py-4">
          Chronity
        </div>
      </nav>
      <p>Modal: {modalTaskForm ? "OPEN" : "CLOSED"}</p>
      <div className="flex justify-end p-4">
        <AddTaskButton onClick={() => setModalTaskForm(true)}/>
      </div>
      {modalTaskForm && (
        <TaskForm onClose={() => setModalTaskForm(false)} />
      )}
      <div className="p-5 flex flex-wrap gap-3">
        {/* Map lists all the Tasks, it is basically loop over the TempTasks with the interface "task" as its prop*/}
        {TempTasks.map((task) => (
          // key is the Id, Reacts needs this otherwise it doesnt know which index each child element in TempTasks has. It couldnt really tell each element apart.
          <TaskCard key={task.taskid} task={task} />
        ))}
      </div>
    </div>
  );
}
