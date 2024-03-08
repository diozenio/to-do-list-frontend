interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { children, icon } = props;

  return (
    <button className="rounded-lg text-zinc-100 bg-rose-700 p-4 font-bold hover:bg-rose-600 transition-all ease-in-out flex flex-row items-center justify-center gap-1">
      {children}
      {icon}
    </button>
  );
}

export { Button };
