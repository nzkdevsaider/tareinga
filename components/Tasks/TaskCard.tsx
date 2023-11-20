import { ITask } from "@/types";
import {
  IconCheck,
  IconCheckbox,
  IconNotebook,
  IconTrash,
} from "@tabler/icons-react";
import { db } from "@/db/db";

const TaskCard = ({ ...task }: ITask) => {
  const handleUpdate = async () => {
    await db.tasks.update(task.id, { state: 2 });
  };

  const handleDelete = async () => {
    await db.tasks.delete(task.id);
  };

  if (task.state === 2) {
    return (
      <div className="flex flex-row justify-between items-center gap-10 p-3 border-secondary border-opacity-40 shadow-md border-2 rounded-md">
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="avatar placeholder">
            <div className="bg-success text-neutral-content rounded-full w-14">
              <IconCheck className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="font-bold">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </div>
        </div>
        <button onClick={handleDelete} className="btn btn-circle">
          <IconTrash className="w-6 h-6" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between items-center gap-10 p-3 border-secondary border-opacity-40 shadow-md border-2 rounded-md">
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="avatar placeholder">
            <div className="bg-primary text-neutral-content rounded-full w-14">
              <IconNotebook className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="font-bold">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </div>
        </div>
        <button onClick={handleUpdate} className="btn btn-circle">
          <IconCheckbox className="w-6 h-6" />
        </button>
      </div>
    );
  }
};

export default TaskCard;
