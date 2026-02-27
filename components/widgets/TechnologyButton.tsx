interface TechnologyButtonProps {
  name: string;
}

export default function TechnologyButton({ name }: TechnologyButtonProps) {
  return (
    <button className="flex items-center justify-center p-4 bg-neutral-950 rounded-none border border-neutral-700 hover:bg-neutral-800 transition-colors">
      {name}
    </button>
  );
}
