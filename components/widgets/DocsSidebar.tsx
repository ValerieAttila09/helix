'use client';

import { DOCS_SIDEBAR_LINKS } from "@/lib/constants/docs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 shrink-0 h-full overflow-y-auto pr-8 py-10 mt-[87px]">
      <ul className="space-y-6">
        {Object.entries(DOCS_SIDEBAR_LINKS).map(([title, links]) => (
          <li key={title}>
            <h4 className="mb-2 font-semibold text-neutral-400">{title}</h4>
            <ul className="border-l border-neutral-800">
              {links.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "-ml-px flex items-center gap-2 rounded-none pl-4 pr-2 py-2 text-sm border-l border-transparent",
                      pathname === href
                        ? "border-white font-semibold text-white"
                        : "text-neutral-400 hover:border-neutral-700 hover:text-white"
                    )}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
