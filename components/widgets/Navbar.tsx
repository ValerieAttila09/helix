'use client';

import { NAVBAR_MENU } from '@/lib/constants/EN';
import React, { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from '../ui/button';

interface SubmenuItem {
  label: string;
  description: string;
  href: string;
}

interface SubmenuSection {
  title: string;
  menu: SubmenuItem[];
}

interface NavMenuItem {
  label: string;
  dropdown: boolean;
  subMenu?: SubmenuSection[];
}

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [activeSubmenuLabel, setActiveSubmenuLabel] = useState<string | null>(null);
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

  return (
    <div ref={navbarWidgetRef} onMouseLeave={closeNavbar} className="fixed top-0 z-50 inset-x-0 w-full h-[56px] bg-transparent backdrop-blur-sm border-b border-neutral-500/50 overflow-hidden">
      <div className="w-full space-y-4">
        <div className="w-full h-auto flex items-start py-2 px-8 justify-between">
          <div className="flex items-center gap-10 sm:gap-14">
            <div className="">
              <h1 className="text-2xl font-bold text-background">helix</h1>
            </div>
            <div className="flex items-center gap-4">
              {NAVBAR_MENU.map((data: NavMenuItem, i) => {
                return (
                  <div key={i + 1} onMouseEnter={() => {
                    if (data.dropdown) {
                      openNavbar(data.label);
                      handleSubmenuHover(data.label);
                    }
                  }} className="cursor-pointer p-2 flex items-center gap-2 group transition-all">
                    <span className="text-md font-normal text-neutral-200 group-hover:text-background">{data.label}</span>
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
          <div className="flex items-center gap-4">
            <Button variant={'ghost'} className='rounded-none group transition-all'>
              <span className="text-sm text-neutral-200 font-normal group-hover:text-foreground transition-all">Login</span>
            </Button>
            <Button variant={'outline'} className='rounded-none'>
              <span className="text-sm font-normal">Sign Up</span>
            </Button>
          </div>
        </div>
        <div className="ps-38 flex gap-12">
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
                          <a
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
                          </a>
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
  );
}

export default Navbar;