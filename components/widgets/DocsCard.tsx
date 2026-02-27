interface DocsCardProps {
  name: string;
  description: string;
}

export default function DocsCard({ name, description }: DocsCardProps) {
  return (
    <div className="p-6 bg-neutral-950 rounded-none hover:bg-neutral-800 transition-colors cursor-pointer">
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
