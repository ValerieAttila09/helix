import DocsCard from "@/components/widgets/DocsCard";
import TechnologyButton from "@/components/widgets/TechnologyButton";

const technologies = [
  { name: "Next.js" },
  { name: "Django" },
  { name: "Drizzle" },
  { name: "React" },
  { name: "TanStack" },
  { name: "Express" },
  { name: "NestJS" },
  { name: "Astro" },
  { name: "SvelteKit" },
  { name: "Nuxt" },
];

const guides = [
  { name: "Connect", description: "Connect from any application" },
  { name: "Import data", description: "Migrate your data to Neon" },
  {
    name: "AI & embeddings",
    description: "Build AI apps with pgvector",
  },
  { name: "Branching", description: "Optimize development workflows" },
  { name: "Extensions", description: "Extend Postgres capabilities" },
  { name: "Neon CLI", description: "Manage from the terminal" },
];

export default function DocsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quickstart prompts</h2>
          <p className="text-muted-foreground mb-6">
            Copy a setup prompt, or browse our framework, language, and ORM
            guides.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <TechnologyButton key={tech.name} name={tech.name} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm text-blue-500 hover:underline">
              Show more
            </button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Explore the docs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <DocsCard
                key={guide.name}
                name={guide.name}
                description={guide.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}