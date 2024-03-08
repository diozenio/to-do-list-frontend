import { Input, Button } from "@/components";
import { LuPlus } from "react-icons/lu";

function TaskForm() {
  return (
    <form className="space-x-2 absolute -bottom-7 left-1/2 -translate-x-1/2 flex flex-row">
      <Input placeholder="Adicione uma nova tarefa" />
      <Button icon={<LuPlus className="text-zinc-100 font-bold text-lg" />}>
        Criar
      </Button>
    </form>
  );
}

export default TaskForm;
