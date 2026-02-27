import {
  Book,
  Code2,
  GitFork,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const DOCS_SIDEBAR_LINKS = {
  "Get started": [
    {
      title: "Introduction",
      href: "/docs",
      icon: Book,
    },
    {
      title: "Quickstart",
      href: "/docs/getting-started",
      icon: Rocket,
    },
    {
      title: "Playground",
      href: "/docs/playground",
      icon: Terminal,
    },
  ],
  About: [
    {
      title: "What is Helix?",
      href: "/docs/about",
      icon: Book,
    },
  ],
  Connect: [
    {
      title: "Connect from any application",
      href: "/docs/connect",
      icon: GitFork,
    },
  ],
  Develop: [
    {
      title: "Branches",
      href: "/docs/branches",
      icon: GitFork,
    },
    {
      title: "Autoscaling",
      href: "/docs/autoscaling",
      icon: ShieldCheck,
    },
  ],
  Manage: [
    {
      title: "Integrations",
      href: "/docs/integrations",
      icon: HeartHandshake,
    },
    {
      title: "API",
      href: "/docs/api",
      icon: Code2,
    },
  ],
  Postgres: [
    {
      title: "Guides",
      href: "/docs/guides",
      icon: Book, 
    },
    {
      title: "Reference",
      href: "/docs/reference",
      icon: Code2,
    },
  ],
};
