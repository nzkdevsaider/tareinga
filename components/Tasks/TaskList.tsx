"use client";
import TaskCard from "./TaskCard";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";

const TaskList = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray());
  return (
    <div className="space-y-3">
      {tasks?.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;
