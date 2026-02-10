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

export { NAVBAR_MENU };