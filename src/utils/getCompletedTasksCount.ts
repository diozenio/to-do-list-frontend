import { Task } from "@/models";

function getCompletedTasksCount(tasks: Task[] | undefined): string {
  if (tasks?.length === 0 || !tasks) return "0";
  const completedTasks = tasks.filter((task) => task.isDone);
  return `${completedTasks.length} de ${tasks.length}`;
}

export { getCompletedTasksCount };
