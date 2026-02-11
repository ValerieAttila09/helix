import { Shield, Zap, Globe, Lock } from 'lucide-react'

const PRODUCT_SUBMENU = [
  {
    title: "DATABASE",
    menu: [
      { label: "Autoscaling", description: "Automatic scaling based on your workload demands", href: "/" },
      { label: "Branches", description: "Create isolated database copies for development", href: "/" },
      { label: "Compute", description: "Flexible compute resources for your database", href: "/" },
      { label: "Storage", description: "Scalable storage with performance optimization", href: "/" },
      { label: "Logical Replication", description: "Real-time data replication across regions", href: "/" },
    ]
  },
  {
    title: "ECOSYSTEM",
    menu: [
      { label: "Integrations", description: "Connect with your favorite development tools", href: "/" },
      { label: "Migrations", description: "Seamless migration from other databases", href: "/" },
      { label: "Serverless", description: "Build serverless applications with ease", href: "/" },
      { label: "API", description: "REST and GraphQL API for your data", href: "/" },
    ]
  }
]

const SOLUTIONS_SUBMENU = [
  {
    title: "USE CASES",
    menu: [
      { label: "SaaS Applications", description: "Build scalable SaaS with serverless databases", href: "/" },
      { label: "E-commerce", description: "High-performance databases for online stores", href: "/" },
      { label: "AI & Machine Learning", description: "Vector databases for AI-powered applications", href: "/" },
      { label: "Real-time Analytics", description: "Process and analyze data in real-time", href: "/" },
      { label: "Content Management", description: "Flexible database for content platforms", href: "/" },
      { label: "Mobile Applications", description: "Reliable backend for mobile apps", href: "/" },
    ]
  },
  {
    title: "FOR TEAM",
    menu: [
      { label: "Development Teams", description: "Collaborative tools for engineering teams", href: "/" },
      { label: "Data Engineers", description: "Advanced data processing capabilities", href: "/" },
      { label: "DevOps", description: "Infrastructure automation and management", href: "/" },
    ]
  }
]

const COMPANY_SUBMENU = [
  {
    title: "COMPANY",
    menu: [
      { label: "About Us", description: "Learn more about our mission and values", href: "/" },
      { label: "Blog", description: "Read our latest articles and updates", href: "/" },
      { label: "Careers", description: "Join our team and make an impact", href: "/" },
      { label: "Press", description: "Media kit and press releases", href: "/" },
    ]
  },
  {
    title: "RESOURCES",
    menu: [
      { label: "Documentation", description: "Complete API and platform documentation", href: "/" },
      { label: "Community", description: "Connect with other developers", href: "/" },
      { label: "Support", description: "Get help from our support team", href: "/" },
      { label: "Status Page", description: "Check platform availability and incidents", href: "/" },
    ]
  }
]

const NAVBAR_MENU = [
  { label: "Product", dropdown: true, subMenu: PRODUCT_SUBMENU },
  { label: "Solutions", dropdown: true, subMenu: SOLUTIONS_SUBMENU },
  { label: "Docs", dropdown: false, href: "/docs" },
  { label: "Pricing", dropdown: false, href: "/pricing" },
  { label: "Company", dropdown: true, subMenu: COMPANY_SUBMENU },
]

const MAIN_FEATURES = [
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'Attacks are automatically detected and mitigated.',
  },
  {
    icon: Zap,
    title: 'Content Caching',
    description: 'Static assets are cached at the edge, so your apps stays fast.',
  },
  {
    icon: Lock,
    title: 'SSL and TLS Certificates',
    description: 'Cloud automatically provisions and renews SSL certificates for your apps.',
  },
  {
    icon: Globe,
    title: 'Load Balancing',
    description: 'Cloud automatically balances traffic as your apps scale.',
  },
];

const FAQS_DATA: FAQItem[] = [
  { q: 'Is there a free version?', a: 'Yes — we offer a free tier with limited features so you can try the product.' },
  { q: 'What apps can I integrate?', a: 'You can integrate with popular apps using our connectors and webhooks.' },
  { q: 'How does the AI work?', a: 'Our AI analyzes your input and generates suggestions using trained models.' },
  { q: 'Can I use this with a team?', a: 'Yes — invite teammates, manage roles, and collaborate in shared workspaces.' },
  { q: 'Is my data safe?', a: 'We use industry-standard encryption and access controls to protect your data.' },
  { q: 'How do I manage my subscription?', a: 'Visit the billing page in your account settings to update or cancel subscriptions.' },
];

export { NAVBAR_MENU, MAIN_FEATURES, FAQS_DATA };