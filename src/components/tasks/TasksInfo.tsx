interface TasksInfoProps {
  counter: string;
  label: string;
}

function TasksInfo(props: TasksInfoProps) {
  const { counter, label } = props;

  return (
    <div className="space-x-2 flex items-center">
      <h2 className="text-zinc-100 font-bold text-sm">{label}</h2>
      <div className="flex items-center justify-center rounded-3xl px-2 py-[2px] bg-zinc-700">
        <p className="text-zinc-400 font-bold text-xs">{counter}</p>
      </div>
    </div>
  );
}

export default TasksInfo;
