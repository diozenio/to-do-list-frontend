import { Task } from "@/models";
import TaskCardCheckbox from "./TaskCardCheckbox";
import TaskCardDelete from "./TaskCardDelete";

interface TaskCardProps {
  task: Task;
}

function TaskCard(props: TaskCardProps) {
  const { title, id, isDone } = props.task;
  return (
    <label
      className={`w-full flex flex-row gap-8 bg-zinc-800 border-zinc-700 border-[1px] rounded-lg py-5 px-6 hover:brightness-125 hover:border-blue-700 transition-all ease-in-out cursor-pointer text-zinc-100 ${
        isDone
          ? "line-through brightness-75 hover:brightness-90 hover:border-zinc-700"
          : ""
      }`}
    >
      <TaskCardCheckbox checked={isDone} />
      {title}
      <TaskCardDelete />
    </label>
  );
}

export default TaskCard;
