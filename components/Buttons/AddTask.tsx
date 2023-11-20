"use client";

import { useState } from "react";
import { ITask } from "@/types";
import { randomId } from "@/lib/utils";
import { db } from "@/db/db";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => {
    const creatorDialog = document.getElementById(
      "creator"
    ) as HTMLDialogElement;
    if (creatorDialog) {
      creatorDialog.showModal();
    }
  };

  const handleClose = () => {
    const creatorDialog = document.getElementById(
      "creator"
    ) as HTMLDialogElement;
    if (creatorDialog) {
      creatorDialog.close();
    }
  };

  const handleChange = (e: any) => {
    if (e.target.tagName === "INPUT") {
      setTitle(e.target.value);
    } else if (e.target.tagName === "TEXTAREA") {
      setDescription(e.target.value);
    }
  };

  const addTask = async () => {
    if (!title || !description) return alert("Debes llenar todos los campos.");
    const task: ITask = {
      id: randomId(),
      title,
      description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      state: 1,
    };

    try {
      await db.tasks.add({
        ...task,
      });
    } catch (error) {
      console.log(error);
    } finally {
      // Can Be Improved: The method for clearing the values when form is submitted.
      setTitle("");
      setDescription("");
      const title = document.getElementById("title") as HTMLInputElement;
      title.value = "";
      const description = document.getElementById(
        "description"
      ) as HTMLTextAreaElement;
      description.value = "";
      handleClose();
    }
  };

  return (
    <div className="actions">
      <button onClick={handleOpen} className="btn btn-primary w-full mb-3">
        Agregar tarea
      </button>
      <dialog id="creator" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Crear tarea</h3>
          <form onChange={handleChange}>
            <label className="label font-bold text-sm">
              Nombre de la tarea
            </label>
            <input
              id="title"
              type="text"
              placeholder="¿Qué tienes que hacer?"
              className="input input-bordered w-full"
            />
            <label className="label font-bold text-sm"> Descripción </label>
            <textarea
              id="description"
              className="textarea textarea-bordered w-full"
              placeholder="Escribe una breve explicación de la tarea."
            ></textarea>
          </form>
          <div className="flex flex-col justify-center gap-3 mt-3">
            <button onClick={addTask} className="btn btn-primary">
              Crear
            </button>
            <button onClick={handleClose} className="btn btn-warning">
              Cerrar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTask;
