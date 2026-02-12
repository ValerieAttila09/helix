'use client';

import { NAVBAR_MENU } from '@/lib/constants/EN';
import Link from 'next/link';
import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavMenuItem, SubmenuItem, SubmenuSection } from '@/types/interfaces';
import { X, ChevronDown } from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const expandedMenus = React.useRef<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());

  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      });
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      });
      gsap.to(sidebarRef.current, {
        x: '-100%',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isOpen]);

  const toggleSubmenu = (label: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 opacity-0 pointer-events-none"
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-14 left-0 h-screen w-64 bg-black border-r border-neutral-700 z-50 overflow-y-auto translate-x-full"
      >
        <div className="p-4 space-y-4">
          {NAVBAR_MENU.map((item: NavMenuItem, idx) => (
            <div key={idx}>
              {item.dropdown && item.subMenu ? (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="w-full flex items-center justify-between p-3 hover:bg-neutral-900 rounded-lg transition-colors"
                  >
                    <span className="text-neutral-200 font-medium">{item.label}</span>
                    <ChevronDown
                      className={`size-4 text-neutral-400 transition-transform ${
                        expandedItems.has(item.label) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu items */}
                  {expandedItems.has(item.label) && (
                    <div className="pl-4 space-y-3 border-l border-neutral-700">
                      {item.subMenu.map((section: SubmenuSection, sectionIdx) => (
                        <div key={`section-${sectionIdx}`} className="space-y-2">
                          <h4 className="text-xs font-semibold text-neutral-500 uppercase">
                            {section.title}
                          </h4>
                          {section.menu.map((submenuItem: SubmenuItem, itemIdx) => (
                            <Link
                              key={`item-${itemIdx}`}
                              href={submenuItem.href}
                              onClick={handleLinkClick}
                              className="block p-2 rounded hover:bg-neutral-900 transition-colors"
                            >
                              <p className="text-sm text-neutral-300 hover:text-white">
                                {submenuItem.label}
                              </p>
                              <p className="text-xs text-neutral-500 mt-1">
                                {submenuItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href || '/'}
                  onClick={handleLinkClick}
                  className="block p-3 text-neutral-200 hover:bg-neutral-900 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Auth buttons */}
          <div className="space-y-2 pt-4 border-t border-neutral-700">
            <button className="w-full p-3 text-neutral-200 border border-neutral-600 rounded hover:bg-neutral-900 transition-colors">
              Login
            </button>
            <button className="w-full p-3 text-white bg-neutral-200 rounded hover:bg-neutral-300 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
