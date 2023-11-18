import { ITask } from "@/types";
import { IconCheckbox, IconNotebook } from "@tabler/icons-react";

const TaskCard = ({ task }: ITask) => {
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
      <button className="btn btn-circle">
        <IconCheckbox className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TaskCard;
