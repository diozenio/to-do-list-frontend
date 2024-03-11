interface InputProps {
  placeholder?: string;
}

function Input(props: InputProps) {
  const { placeholder } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      autoFocus
      className="w-full bg-zinc-800 border-2 border-zinc-950 text-zinc-100 p-4 rounded-lg focus:outline-none placeholder-zinc-600 text-base"
    />
  );
}

export { Input };
