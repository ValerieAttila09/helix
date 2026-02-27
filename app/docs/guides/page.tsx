export default function GuidesPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold">Guides</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This section provides detailed guides on how to use Helix in your
        projects. Whether you're a new user or an experienced developer, these
        guides will help you get the most out of Helix.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <p className="mt-2 text-muted-foreground">
            Learn how to create your first Helix database and connect it to your
            application. This guide will walk you through the process of setting
            up your environment and deploying your first project.
          </p>
          <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">
            Read more &rarr;
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Branching and Merging</h2>
          <p className="mt-2 text-muted-foreground">
            Discover the power of database branching. This guide explains how to
            create isolated branches for development and testing, and how to
            merge your changes back into production.
          </p>
          <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">
            Read more &rarr;
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Autoscaling in Production</h2>
          <p className="mt-2 text-muted-foreground">
            Learn how to configure autoscaling for your production database to
            handle variable traffic loads. This guide covers best practices for
            ensuring high availability and performance.
          </p>
          <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
