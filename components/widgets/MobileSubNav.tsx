'''"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";
import {
    ChevronDown,
    Menu,
    Code, 
    Languages, 
    Database, 
    DatabaseZap, 
    Key, 
    Lock, 
    BrainCircuit, 
    Sparkles, 
    TerminalSquare, 
    Laptop, 
    Puzzle, 
    GitMerge, 
    FileText, 
    Github
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <div className="w-full bg-[#151515] border border-neutral-800 rounded-md shadow-lg p-2">
      <p className="text-neutral-400 text-sm p-2">Dummy Dropdown</p>
      <Link href="#" className="block px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-700 rounded">Item 1</Link>
      <Link href="#" className="block px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-700 rounded">Item 2</Link>
    </div>
  );

export default function MobileSubNav() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden flex items-center gap-2 text-neutral-400 bg-black border-neutral-800 hover:bg-neutral-900 hover:text-white">
                    <Menu size={16} />
                    <span>Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-[#101010] border-neutral-800 text-white h-[80%]">
                <SheetHeader>
                    <SheetTitle className="text-white">Documentation Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4 overflow-y-auto">
                    <div className="flex flex-col space-y-2">
                        {links.map((link) => (
                            <div key={link.name}>
                                <div 
                                    className="flex items-center justify-between text-lg font-medium text-neutral-300 py-2"
                                    onClick={() => link.dropdown && setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                >
                                    <Link href={link.href} className={cn(pathname.includes(link.href) && "text-green-400")}>{link.name}</Link>
                                    {link.dropdown && <ChevronDown className={cn("w-5 h-5 transition-transform", openDropdown === link.name ? 'rotate-180' : '')} />}
                                </div>
                                {link.dropdown && openDropdown === link.name && (
                                    <div className="pl-4 pt-2">
                                        {link.name === 'Develop' ? (
                                            <div className="grid grid-cols-1 gap-y-2">
                                                {Object.entries(developMenuItems).map(([section, items]) => (
                                                    <div key={section}>
                                                        <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">{section}</h3>
                                                        <div className="flex flex-col gap-1">
                                                            {items.map(item => (
                                                                <SheetClose asChild key={item.name}>
                                                                    <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800">
                                                                        {item.icon}
                                                                        <span className="text-base text-neutral-300">{item.name}</span>
                                                                    </Link>
                                                                </SheetClose>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : <div className="pb-2">{dummyDropdown}</div>}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
'''