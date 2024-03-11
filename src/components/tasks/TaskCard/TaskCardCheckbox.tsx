interface TaskCardCheckboxProps {
  checked?: boolean;
}

function TaskCardCheckbox({ checked = false }) {
  return (
    <input
      type="checkbox"
      defaultChecked={checked}
      className="bg-transparent size-5 aspect-square rounded-[50%] border-rose-600 border-2 appearance-none my-auto checked:bg-emerald-400 checked:border-emerald-400 transition-all ease-in-out cursor-pointer hover:brightness-125 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:outline-none checked:hover:bg-emerald-400 checked:focus:bg-emerald-400"
    />
  );
}

export default TaskCardCheckbox;
