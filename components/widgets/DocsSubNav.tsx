'use client';

import Link from "next/link";
import { ChevronDown, Code, Languages, Database, DatabaseZap, Key, Lock, BrainCircuit, Sparkles, TerminalSquare, Laptop, Puzzle, GitMerge, FileText, Github } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileSubNav from "./MobileSubNav";

const links = [
  { name: "Get started", href: "/docs" },
  { name: "About", href: "/docs/about" },
  { name: "Connect", href: "/docs/connect", dropdown: true },
  { name: "Develop", href: "/docs/develop", dropdown: true },
  { name: "Manage", href: "/docs/manage", dropdown: true },
  { name: "Postgres", href: "/docs/postgres", dropdown: true },
  { name: "Resources", href: "/docs/resources", dropdown: true },
  { name: "Platform integration", href: "/docs/platform-integration" },
];

const developMenuItems = {
  "FRONTEND & FRAMEWORKS": [
    { name: "Frameworks", icon: <Code size={16} /> },
    { name: "Languages", icon: <Languages size={16} /> },
    { name: "ORMs", icon: <Database size={16} /> },
  ],
  "BACKEND": [
    { name: "Data API", icon: <DatabaseZap size={16} /> },
    { name: "Neon Auth", icon: <Key size={16} /> },
    { name: "Postgres RLS", icon: <Lock size={16} /> },
  ],
  "AI": [
    { name: "AI for Agents", icon: <BrainCircuit size={16} /> },
    { name: "AI App Starter Kit", icon: <Sparkles size={16} /> },
  ],
  "TOOLS & WORKFLOWS": [
    { name: "API, CLI & SDKs", icon: <TerminalSquare size={16} /> },
    { name: "Local development", icon: <Laptop size={16} /> },
    { name: "Integrations (3rd party)", icon: <Puzzle size={16} /> },
    { name: "Workflows & CI/CD", icon: <GitMerge size={16} /> },
    { name: "Templates", icon: <FileText size={16} /> },
    { name: "Examples repo", icon: <Github size={16} /> },
  ],
};

const dummyDropdown = (
  <div className="w-48 bg-[#151515] border border-neutral-800 rounded-md shadow-lg p-2">
    <p className="text-neutral-400 text-sm p-2">Dummy Dropdown</p>
    <Link href="#" className="block px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-700 rounded">Item 1</Link>
    <Link href="#" className="block px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-700 rounded">Item 2</Link>
  </div>
);

export default function DocsSubNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="fixed bottom-0 inset-x-0 w-full z-40 bg-black border-t border-neutral-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start h-14">
            <MobileSubNav />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed top-16 z-40 bg-black/70 backdrop-blur-md border-b border-neutral-800"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors",
                    pathname.includes(link.href) ? "text-white" : "text-neutral-400 hover:text-white"
                  )}
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform", openDropdown === link.name ? 'rotate-180' : '')} />}
                </Link>
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 z-50">
                    {link.name === 'Develop' ? (
                      <div className="w-[30rem] bg-[#151515] border border-neutral-800 rounded-lg shadow-lg p-4">
                        <div className="grid grid-cols-2 gap-x-4">
                          {Object.entries(developMenuItems).map(([section, items]) => (
                            <div key={section} className="mb-4 last:mb-0">
                              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">{section}</h3>
                              <div className="flex flex-col gap-1">
                                {items.map(item => (
                                  <Link href="#" key={item.name} className="flex items-center gap-2 p-1 rounded-md hover:bg-neutral-800">
                                    {item.icon}
                                    <span className="text-sm text-neutral-300">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : dummyDropdown}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
