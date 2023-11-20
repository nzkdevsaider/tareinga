"use client";
import TaskCard from "./TaskCard";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/db";
import Image from "next/image";
import { useEffect, useState } from "react";

const TaskList = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray());
  const [filter, setFilter] = useState("all");
  const handleFilter = (e: any) => {
    const filter = e.target.id;
    setFilter(filter);
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("tab-active"));
    e.target.classList.add("tab-active");
  };

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("tab-active"));
    const tab = document.getElementById(filter);
    tab?.classList.add("tab-active");
  }, [filter, tasks]);

  if (tasks?.length === 0)
    return (
      <div className="flex flex-col justify-center mt-20 items-center gap-5">
        <Image
          alt="Espacio vacio."
          src="/emptytasks.svg"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-center items-center text-primary">
          <h1 className="text-md font-bold">No se han creado tareas.</h1>
          <p className="text-sm">
            Para crear una tarea, presione el botón{" "}
            <strong>Agregar tarea</strong>.
          </p>
        </div>
      </div>
    );

  return (
    <>
      <div role="tablist" className="tabs tabs-boxed my-3">
        <a onClick={handleFilter} id="all" role="tab" className="tab">
          Todas
        </a>
        <a onClick={handleFilter} id="pending" role="tab" className="tab">
          Pendientes
        </a>
        <a onClick={handleFilter} id="completed" role="tab" className="tab">
          Completadas
        </a>
      </div>
      {!tasks && (
        <div className="flex flex-col justify-center mt-20 items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
      <div className="space-y-3">
        {tasks
          ?.filter((task) => {
            if (filter === "all") {
              return true;
            } else if (filter === "pending") {
              return task.state === 1;
            } else if (filter === "completed") {
              return task.state === 2;
            }
          })
          .map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        {filter === "pending" && tasks?.every((task) => task.state === 2) && (
          <div className="flex flex-col justify-center mt-20 items-center gap-5">
            <h1 className="text-md font-bold">
              Todas las tareas han sido completadas.
            </h1>
          </div>
        )}
        {filter === "completed" && tasks?.every((task) => task.state === 1) && (
          <div className="flex flex-col justify-center mt-20 items-center gap-5">
            <h1 className="text-md font-bold">No hay tareas completadas.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
