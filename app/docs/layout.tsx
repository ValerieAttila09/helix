import { DocsSidebar } from "@/components/widgets/DocsSidebar";
import DocsFooter from "@/components/widgets/DocsFooter";
import Link from 'next/link';
import { Copy, ExternalLink } from 'lucide-react';
import Navbar from "@/components/widgets/Navbar";
import DocsSubNav from "@/components/widgets/DocsSubNav";

const actionItems = [
  { text: "Copy markdown", icon: <Copy size={16} className="text-neutral-500" /> },
  { text: "Open in ChatGPT", icon: <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="text-neutral-500"><path d="M10.774 9.333H9.34V7.89h1.434v1.443zm-2.867 0H6.474V7.89h1.433v1.443zm5.016 0h-1.43V7.89h1.43v1.443zm-2.149 2.155H9.34v-1.44h1.434v1.44zm-2.867 0H6.474v-1.44h1.433v1.44z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.924.667H3.076a2.41 2.41 0 0 0-2.41 2.41v7.846a2.41 2.41 0 0 0 2.41 2.41h1.05l1.643 1.642a.717.717 0 0 0 1.014 0l1.643-1.642h3.498a2.41 2.41 0 0 0 2.41-2.41V3.077a2.41 2.41 0 0 0-2.41-2.41zm-1.013 11.7H10.15l-1.08 1.08a.717.717 0 0 1-1.014 0l-1.08-1.08H3.076a.976.976 0 0 1-.976-.977V3.077c0-.54.437-.976.976-.976h9.848c.54 0 .976.437.976.976v7.846a.976.976 0 0 1-.976.977z" fill="currentColor"></path></svg>, external: true },
  { text: "Open in Claude", icon: <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="text-neutral-500"><path d="M8.28.667A7.613 7.613 0 0 0 .667 8.28a7.613 7.613 0 0 0 7.613 7.613 7.613 7.613 0 0 0 7.613-7.613A7.613 7.613 0 0 0 8.28.667zm0 1.433a6.18 6.18 0 0 1 6.18 6.18 6.18 6.18 0 0 1-6.18 6.18A6.18 6.18 0 0 1 2.1 8.28a6.18 6.18 0 0 1 6.18-6.18z" fill="currentColor"></path><path d="M10.16 6.423a.717.717 0 0 0-1.013 0L7.26 8.31l-.87-.87a.717.717 0 1 0-1.013 1.014l1.378 1.378a.717.717 0 0 0 1.013 0l2.39-2.39a.717.717 0 0 0 0-1.014z" fill="currentColor"></path></svg>, external: true },
  { text: "Copy neon init command", icon: <Copy size={16} className="text-neutral-500" /> },
  { text: "Connect MCP on Cursor", icon: <ExternalLink size={16} className="text-neutral-500" />, external: true },
  { text: "Connect MCP on VS Code", icon: <ExternalLink size={16} className="text-neutral-500" />, external: true },
  { text: "Edit on GitHub", icon: <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="text-neutral-500"><path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l.01-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.02 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0z" fill="currentColor" /></svg>, external: true }
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <DocsSubNav />
      <div className="relative flex flex-1 max-w-[90rem] mx-auto w-full">
        <DocsSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto py-10 lg:pl-8">
            {children}
            <DocsFooter />
          </main>
        </div>
        <div className="hidden md:block w-64 shrink-0 border-l border-neutral-800">
          <div className="h-full overflow-y-auto py-10 px-4">
            <div className="sticky top-28">
              <h3 className="text-sm font-semibold text-neutral-400 mb-4">On this page</h3>
              <ul className="space-y-3">
                {actionItems.map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group">
                      <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
                      <span className="flex-1">{item.text}</span>
                      {item.external && (
                        <ExternalLink size={14} className="text-neutral-500 group-hover:text-white" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
