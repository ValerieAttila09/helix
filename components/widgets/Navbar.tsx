'use client';

import { NAVBAR_MENU } from '@/lib/constants/EN';
import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { Button } from '../ui/button';
import Link from 'next/link';
import { NavMenuItem, SubmenuItem, SubmenuSection } from '@/types/interfaces';
import MobileSidebar from './MobileSidebar';
import { Menu, Search, Github, Sparkles, BrainCircuit, ChevronDown, Code, Database, Lock, DatabaseZap, FileText, GitMerge, Key, Languages, Laptop, Puzzle, TerminalSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');

  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [activeSubmenuLabel, setActiveSubmenuLabel] = useState<string | null>(null);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const navbarWidgetRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const openNavbar = (menuLabel?: string) => {
    if (!navbarWidgetRef.current) return;
    if (isNavbarOpen) return;
    gsap.to(navbarWidgetRef.current, {
      height: '492px',
      duration: 0.25,
      ease: 'power2.out',
    });
    setNavbarOpen(true);
    if (menuLabel) {
      setActiveSubmenuLabel(menuLabel);
      const submenuEl = submenuRefs.current[menuLabel];
      if (submenuEl) {
        gsap.fromTo(
          submenuEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.2, ease: 'power2.out' }
        );
      }
    }
  };

  const closeNavbar = () => {
    if (!navbarWidgetRef.current) return;
    if (!isNavbarOpen) return;
    gsap.to(navbarWidgetRef.current, {
      height: '56px',
      duration: 0.25,
      ease: 'power2.out',
    });
    setNavbarOpen(false);
    setActiveSubmenuLabel(null);
  };

  const handleSubmenuHover = (menuLabel: string) => {
    if (activeSubmenuLabel === menuLabel) return;

    if (activeSubmenuLabel && submenuRefs.current[activeSubmenuLabel]) {
      gsap.to(submenuRefs.current[activeSubmenuLabel], {
        opacity: 0,
        duration: 0.15,
        ease: 'power2.out',
      });
    }

    setActiveSubmenuLabel(menuLabel);
    const newSubmenuEl = submenuRefs.current[menuLabel];
    if (newSubmenuEl) {
      gsap.fromTo(
        newSubmenuEl,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: 'power2.out' }
      );
    }
  };

  if (isDocsPage) {
    return (
      <>
        <div className="fixed top-0 z-50 inset-x-0 w-full h-auto bg-black border-b border-neutral-800">
          <div className="border-b border-neutral-800">
            <div className="flex items-center justify-between h-full px-4 py-3 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                  <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M12.0002 1.99219L22.2859 7.99609V20.0039L12.0002 14.0078L1.71448 20.0039V7.99609L12.0002 1.99219Z M12.0002 15.6836L20.2701 20.5547V8.54688L12.0002 13.418L3.73021 8.54688V20.5547L12.0002 15.6836Z"></path></svg>
                  <span className="text-white font-semibold hidden sm:inline-block">NEON</span>
                  <span className="text-neutral-400 font-medium hidden sm:inline-block">Docs</span>
                </Link>
              </div>
              <div className="flex-1 flex justify-center px-8 hidden md:flex">
                <Button variant="outline" className="w-full max-w-md justify-start text-neutral-400 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-300">
                  <Search className="h-4 w-4 mr-2 text-neutral-500" />
                  Search...
                  <div className="ml-auto text-xs text-neutral-500 border border-neutral-700 rounded-sm px-1.5 py-0.5">⌘K</div>
                </Button>
                <Button variant="outline" className="ml-4 flex items-center gap-2 border-neutral-700 hover:border-white hover:text-white text-neutral-300">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  Ask AI
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                  <Link href="#" target="_blank"><Github className="h-5 w-5 text-neutral-400 hover:text-white" /></Link>
                  <div className="h-6 w-px bg-neutral-800" />
                  <Button variant="ghost" className="hover:bg-neutral-800 text-neutral-200 hover:text-white">Log in</Button>
                  <Button className="bg-white text-black hover:bg-neutral-200">Sign up</Button>
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
                    className="p-2 hover:bg-neutral-900 rounded-md transition-colors"
                  >
                    <Menu className="size-6 text-neutral-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[90rem] bg-black mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-auto py-3">
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
        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      </>
    )
  }

  return (
    <>
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />
      <div ref={navbarWidgetRef} onMouseLeave={closeNavbar} className="fixed top-0 z-50 inset-x-0 w-full h-14 bg-black backdrop-blur-sm border-b border-neutral-500/50 overflow-hidden">
        <div className="w-full space-y-4">
          <div className="w-full h-auto flex items-start py-2 px-4 sm:px-6 md:px-8 justify-between">
            <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
              <div className="">
                <h1 className="text-2xl font-bold text-background">helix</h1>
              </div>
              <div className="hidden md:flex items-center gap-4">
                {NAVBAR_MENU.map((data: NavMenuItem, i) => {
                  return (
                    <div key={i + 1} onMouseEnter={() => {
                      if (data.dropdown) {
                        openNavbar(data.label);
                        handleSubmenuHover(data.label);
                      }
                    }} className="cursor-pointer p-2 flex items-center gap-2 group transition-all">
                      <Link href={data.href ? data.href : "/"} className="text-md font-normal text-neutral-200 group-hover:text-background">{data.label}</Link>
                      {data.dropdown && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3 group-hover:text-background rotate-90 text-neutral-200 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {isMobile && (
                <button
                  onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="md:hidden p-2 hover:bg-neutral-900 rounded-none transition-colors"
                >
                  <Menu className="size-6 text-neutral-200" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-2 sm:gap-4">
                <Button variant={'ghost'} className='rounded-none group transition-all'>
                  <span className="text-sm text-neutral-200 font-normal group-hover:text-foreground transition-all">Login</span>
                </Button>
                <Button variant={'outline'} className='rounded-none'>
                  <span className="text-sm font-normal">Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex ps-38 gap-12">
            {NAVBAR_MENU.map((data: NavMenuItem, i) => {
              if (!data.dropdown || !data.subMenu) return null;
              return (
                <div
                  key={`submenu-${i}`}
                  ref={(el) => {
                    if (el) submenuRefs.current[data.label] = el;
                  }}
                  className="opacity-0"
                  style={{ display: activeSubmenuLabel === data.label ? 'block' : 'none' }}
                >
                  <div className="grid grid-cols-2 gap-20 pb-4">
                    {data.subMenu.map((section: SubmenuSection, sectionIdx) => (
                      <div key={`section-${sectionIdx}`}>
                        <h3 className="text-xs font-medium text-neutral-500 mb-4">{section.title}</h3>
                        <div className="space-y-3">
                          {section.menu.map((item: SubmenuItem, itemIdx) => (
                            <Link
                              key={`item-${itemIdx}`}
                              href={item.href}
                              className="block group cursor-pointer hover:opacity-80 transition-opacity"
                            >
                              <div>
                                <p className="text-lg font-normal text-background group-hover:text-blue-700 transition-all">
                                  {item.label}
                                </p>
                                <p className="text-xs font-thin text-neutral-400 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
