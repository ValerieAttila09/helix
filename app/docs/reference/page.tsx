export default function ReferencePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold">API Reference</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This section provides a complete reference for the Helix API. You can
        use this API to manage your databases, branches, and other resources
        programmatically.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Authentication</h2>
          <p className="mt-2 text-muted-foreground">
            Learn how to authenticate with the Helix API using API keys. This
            guide provides examples of how to include your API key in your
            requests.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Databases</h2>
          <p className="mt-2 text-muted-foreground">
            Explore the endpoints for managing your databases. This includes
            creating, deleting, and listing your databases.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Branches</h2>
          <p className="mt-2 text-muted-foreground">
            Learn how to manage your database branches through the API. This
            includes creating, deleting, and merging branches.
          </p>
        </div>
      </div>
    </div>
  );
}
