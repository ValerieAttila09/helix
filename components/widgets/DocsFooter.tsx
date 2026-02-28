'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Youtube, Moon, Sun, Monitor } from 'lucide-react';

const footerSections = {
  Company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Sales', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Legal', href: '#', dropdown: true },
  ],
  Resources: [
    { name: 'Docs', href: '/docs' },
    { name: 'Changelog', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Community Guides', href: '#' },
    { name: 'PostgreSQL Tutorial', href: '#' },
    { name: 'Startups', href: '#' },
  ],
  Community: [
    { name: 'Discord', href: '#', icon: <svg width="20" height="20" fill="currentColor"><path d="M15.833 8.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Zm-7.5 0a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"></path><path d="M16.25 1.25H3.75A1.25 1.25 0 0 0 2.5 2.5v11.667c0 .69.56 1.25 1.25 1.25h10.208l.425.425a.833.833 0 0 0 1.18-.008l.458-.459a.833.833 0 0 0 .242-.583V2.5a1.25 1.25 0 0 0-1.25-1.25Zm-3.417 11.258-1.5-1.5a.833.833 0 0 0-.583-.242H6.667a.417.417 0 0 1-.417-.416v-5a.417.417 0 0 1 .417-.417h6.666a.417.417 0 0 1 .417.417v2.25a.833.833 0 0 0 .833.833h.209a.417.417 0 0 1 .416.416v.584a.833.833 0 0 1-.833.833h-.209a2.5 2.5 0 0 1-2.5-2.5V8.75h-5v3.333h3.083l1.25 1.25v.175Z"></path></svg> },
    { name: 'GitHub', href: '#', icon: <Github size={16} /> },
    { name: 'X.com', href: '#', icon: <svg width="20" height="20" fill="currentColor"><path d="M10.795 8.16l4.49-4.49h-1.42l-3.75 3.75-2.85-3.75H4.165l4.72 6.62-4.72 4.72h1.42l3.96-3.96 3.03 3.96h3.1l-4.95-6.88zm-1.12 1.12l-.63-.89-3.44-4.88h2.18l2.71 3.84.63.89 3.62 5.12h-2.18l-2.88-4.1z"></path></svg> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={16} /> },
    { name: 'YouTube', href: '#', icon: <Youtube size={16} /> },
  ],
  Compliance: [
    { name: 'CCPA Compliant', href: '#' },
    { name: 'GDPR Compliant', href: '#' },
    { name: 'ISO 27001 Certified', href: '#' },
    { name: 'ISO 27701 Certified', href: '#' },
    { name: 'SOC 2 Certified', href: '#' },
    { name: 'HIPAA Compliant', href: '#', dropdown: true },
    { name: 'Trust Center', href: '#' },
  ],
};

export default function DocsFooter() {
  return (
    <footer className="border-t border-neutral-800 mt-16 pt-16 pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M12.0002 1.99219L22.2859 7.99609V20.0039L12.0002 14.0078L1.71448 20.0039V7.99609L12.0002 1.99219Z M12.0002 15.6836L20.2701 20.5547V8.54688L12.0002 13.418L3.73021 8.54688V20.5547L12.0002 15.6836Z"></path></svg>
                <span className="text-white font-semibold">NEON</span>
            </Link>
            <p className="text-neutral-400 text-sm">A Databricks Company</p>
          </div>
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-800 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1 p-1 rounded-none bg-neutral-900 border border-neutral-700">
                <button className="p-1 rounded-none text-neutral-400 border border-transparent hover:bg-neutral-800 hover:border-neutral-700 hover:text-white"><Monitor size={16} /></button>
                <button className="p-1 rounded-none text-neutral-400 border border-transparent hover:bg-neutral-800 hover:border-neutral-700 hover:text-white"><Sun size={16} /></button>
                <button className="p-1 rounded-none text-neutral-400 border border-transparent hover:bg-neutral-800 hover:border-neutral-700 hover:text-white"><Moon size={16} /></button>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-neutral-400">All systems operational</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500">Made in SF and the World. Copyright © 2022 – 2026 Neon, LLC</p>
        </div>
      </div>
    </footer>
  );
}
