import TaskCard from "@/components/Tasks/TaskCard";

const task = {
  id: "123",
  title: "Ver cursos de Ayudinga",
  description: "Para este fin de semana.",
  created_at: "2021-10-10",
  updated_at: "2021-10-10",
  state: 1,
};
export default function Home() {
  return (
    <div className="w-full md:max-w-md">
      <TaskCard task={task} />
    </div>
  );
}
