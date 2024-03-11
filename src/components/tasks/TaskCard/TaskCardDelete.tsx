import { LuTrash2 } from "react-icons/lu";

function TaskCardDelete() {
  return (
    <button className="ml-auto appearance-none outline-none focus:brightness-150">
      <LuTrash2 className="text-zinc-600 hover:text-zinc-500 transition-all ease-in-out size-5" />
    </button>
  );
}

export default TaskCardDelete;
