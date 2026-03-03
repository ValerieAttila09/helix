import { Shield, Zap, Globe, Lock } from 'lucide-react'

// ============================================
// NAVIGATION MENUS
// ============================================

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

// ============================================
// HERO SECTION
// ============================================

const HERO_SECTION = {
  badge: "HELIX: A DATABASE COMPANY",
  heading: "Build faster with a serverless PostgreSQL database that scales with your application.",
  subheading: "Experience the power of cloud-native databases. Zero-downtime deployments, instant branches, and autoscaling compute.",
  primaryButton: "Get Started",
  secondaryButton: "Read the docs",
}

// ============================================
// ABOUT SECTION
// ============================================

const ABOUT_SECTION = {
  heading: "Designed for modern development workflows.",
  description: "Helix combines the familiarity of PostgreSQL with innovative cloud-native features. Say goodbye to complex database management and hello to development simplicity.",
  features: [
    {
      title: "Instant Database Branches",
      description: "Create isolated database copies for development and testing in seconds. Perfect for feature development without affecting production.",
    },
    {
      title: "Auto-scaling Compute",
      description: "Automatically scale your compute resources based on demand. Pay only for what you use with per-second billing.",
    }
  ],
  ctaButton: "Read the docs"
}

// ============================================
// FEATURES SECTION
// ============================================

const FEATURES_SECTION = {
  heading: "Security and speed, automatically configured",
  description: "Helix provides enterprise-grade security and performance out of the box. No need to configure firewalls, load balancers, or caching layers — it's all done for you.",
  globalFeatures: [
    {
      title: "20+ Global Regions",
      description: "Deploy your database in regions closest to your users for ultra-low latency."
    },
    {
      title: "99.99% Uptime SLA",
      description: "Enterprise-grade reliability with automatic failover and redundancy."
    }
  ]
}

const MAIN_FEATURES = [
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'Attacks are automatically detected and mitigated with advanced protection.',
  },
  {
    icon: Zap,
    title: 'Content Caching',
    description: 'Static assets are cached at the edge, keeping your apps blazing fast.',
  },
  {
    icon: Lock,
    title: 'SSL/TLS Certificates',
    description: 'Automatic provisioning and renewal of SSL certificates for your apps.',
  },
  {
    icon: Globe,
    title: 'Load Balancing',
    description: 'Intelligent traffic distribution as your applications scale globally.',
  },
];

// ============================================
// FAQ SECTION
// ============================================

const FAQS_DATA: FAQItem[] = [
  {
    q: 'Is there a free version?',
    a: 'Yes — we offer a free tier with 3 GB of storage and 20 hours of compute time per month. Perfect for development and small projects.'
  },
  {
    q: 'What apps can I integrate?',
    a: 'Helix integrates seamlessly with popular frameworks like Next.js, Django, and Rails, as well as ORMs like Prisma, Sequelize, and SQLAlchemy.'
  },
  {
    q: 'How does automatic scaling work?',
    a: 'Our compute auto-scales up during high-traffic periods and scales down during idle times. Billing is per-second, so you pay exactly for what you use.'
  },
  {
    q: 'Can I use this with a team?',
    a: 'Yes — invite teammates to your project, manage roles and permissions, and collaborate in real-time on database development.'
  },
  {
    q: 'Is my data safe?',
    a: 'We use industry-standard encryption at rest and in transit. All data is automatically backed up, and we comply with SOC 2, GDPR, and other standards.'
  },
  {
    q: 'How do I migrate from my current database?',
    a: 'We provide migration tools and guides for PostgreSQL, MySQL, and other databases. Our team can also help with complex migrations.'
  },
];

// ============================================
// FOOTER SECTION
// ============================================

const FOOTER_SECTION = {
  tagline: "Build blazing fast applications with modern database infrastructure.",
  footerLinks: {
    platform: {
      title: 'Platform',
      links: [
        { label: 'Overview', href: '/' },
        { label: 'Pricing', href: '/' },
        { label: 'Branches', href: '/' },
        { label: 'Use Cases', href: '/' }
      ]
    },
    about: {
      title: 'About Us',
      links: [
        { label: 'Team', href: '/' },
        { label: 'Support', href: '/' },
        { label: 'Legal', href: '/' },
        { label: 'Security', href: '/' }
      ]
    },
    learn: {
      title: 'Learn',
      links: [
        { label: 'Documentation', href: '/' },
        { label: 'API Reference', href: '/' },
        { label: 'Quickstart', href: '/' },
        { label: 'Blog', href: '/' }
      ]
    }
  },
  statusMessage: "All systems operational"
}


export {
  NAVBAR_MENU,
  MAIN_FEATURES,
  FAQS_DATA,
  HERO_SECTION,
  ABOUT_SECTION,
  FEATURES_SECTION,
  FOOTER_SECTION
};