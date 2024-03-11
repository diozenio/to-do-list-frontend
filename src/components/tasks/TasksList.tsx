import { Task } from "@/models";
import TaskCard from "./TaskCard";
import TasksInfo from "./TasksInfo";
import { getCompletedTasksCount } from "@/utils";
import { NotepadTextIcon } from "@/assets/icons";

function EmptyTasksList() {
  return (
    <div className="flex flex-col justify-center items-center text-zinc-600 py-8">
      <NotepadTextIcon size={64} />
      <h3 className="font-bold mt-4">Você ainda não tem tarefas cadastradas</h3>
      <p> Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

interface TasksListProps {
  tasks?: Task[];
}

function TasksList({ tasks }: TasksListProps) {
  return (
    <section className="pt-20 w-[700px] 2xl:w-[860px] px-8 max-w-full mx-auto pb-8">
      <div className="w-full flex flex-row justify-between items-center mb-8">
        <TasksInfo
          label="Tarefas criadas"
          counter={String(tasks?.length || 0)}
        />
        <TasksInfo label="Concluídas" counter={getCompletedTasksCount(tasks)} />
      </div>
      <div className="flex flex-col gap-3">
        {tasks?.length ? (
          tasks?.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })
        ) : (
          <EmptyTasksList />
        )}
      </div>
    </section>
  );
}

export default TasksList;
