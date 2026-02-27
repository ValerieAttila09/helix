import { DocsSidebar } from "@/components/widgets/DocsSidebar";
import DocsSubNav from "@/components/widgets/DocsSubNav";
import Navbar from "@/components/widgets/Navbar";
import DocsFooter from "@/components/widgets/DocsFooter";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="flex flex-1 max-w-[90rem] mx-auto w-full overflow-hidden">
        <DocsSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto py-10 pl-8">
            {children}
            <DocsFooter />
          </main>
        </div>
        <div className="hidden xl:block w-64 shrink-0 border-l border-neutral-800">
          <div className="h-full overflow-y-auto py-10 px-4">
            <div className="sticky top-0">
              <h3 className="text-sm font-semibold text-neutral-400 mb-4">On this page</h3>
              {/* Placeholder for right-hand nav */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
