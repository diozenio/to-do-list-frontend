import TaskForm from "@/components/tasks/TaskForm";
import TasksList from "@/components/tasks/TasksList";

export default function Home() {
  return (
    <main className="bg-zinc-900 flex flex-1 flex-col">
      <header className="w-full h-72 bg-zinc-950 relative flex items-center justify-center">
        <h1 className="font-black text-rose-600 text-[40px]">
          To Do <span className="text-emerald-400">List</span>
        </h1>
        <TaskForm />
      </header>
      <TasksList tasks={[]} />
    </main>
  );
}
