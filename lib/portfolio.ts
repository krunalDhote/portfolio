export const contact = {
  email: "krunalgdhote09@gmail.com",
  phone: "+91 9307871334",
  phoneHref: "tel:+919307871334",
  linkedIn: "https://www.linkedin.com/in/krunal-dhote-8b8319223",
  github: "https://github.com/krunalDhote",
  resume: "/Krunal-Dhote-Resume.docx",
} as const;

export const snapshot = [
  { value: "3.5+", label: "years of backend engineering" },
  { value: "5+", label: "production applications" },
  { value: "20+", label: "developers trained across cohorts" },
  { value: "3–4", label: "junior engineers mentored" },
] as const;

export type ProjectKind = "security" | "async" | "infrastructure";

export type Project = {
  name: string;
  descriptor: string;
  narrative: string;
  summary: string;
  contribution: string;
  concepts: readonly string[];
  technologies: readonly string[];
  kind: ProjectKind;
  featured?: boolean;
};

export const projects: readonly Project[] = [
  {
    name: "Shaligram Vault",
    descriptor: "Enterprise password and secrets management platform",
    narrative: "Security-focused backend engineering",
    summary:
      "Architected backend security infrastructure for encrypted secret management, with zero-knowledge-oriented design, granular authorization, secure sharing, and auditable access controls.",
    contribution:
      "Owned full-stack architecture across NestJS and Next.js, coordinating API contracts, PostgreSQL data modelling, Redis caching, authentication, encryption workflows, and ongoing security hardening.",
    concepts: [
      "RBAC and granular permissions",
      "TOTP / 2FA",
      "JWT access and refresh-token rotation",
      "Key derivation, distribution, and revocation",
      "Audit logging",
    ],
    technologies: ["NestJS", "Next.js", "PostgreSQL", "Redis"],
    kind: "security",
    featured: true,
  },
  {
    name: "After School",
    descriptor: "Structured learning and activity platform",
    narrative: "Scalable systems and asynchronous processing",
    summary:
      "Drove architecture and 70% of backend technical implementation for a multi-service platform supporting scheduling, activity tracking, notifications, bulk data processing, and interconnected data flows.",
    contribution:
      "Designed RabbitMQ consumers, improved MongoDB query and synchronization patterns, built automated MongoDB backups to AWS S3, and worked directly with clients through iterative releases.",
    concepts: [
      "Multi-service architecture",
      "Asynchronous bulk processing",
      "Database query optimization",
      "Backup retention and monitoring",
      "Workload-based cluster scaling",
    ],
    technologies: ["Node.js", "RabbitMQ", "MongoDB", "AWS S3"],
    kind: "async",
  },
  {
    name: "Hatzav",
    descriptor: "Vehicle shop management platform",
    narrative: "Cloud infrastructure and deployment automation",
    summary:
      "Established end-to-end AWS infrastructure through Terraform, creating a consistent path from application source to containerized deployment.",
    contribution:
      "Provisioned Docker-based application infrastructure with ECS and ECR, then implemented GitHub Actions automation for repeatable deployments.",
    concepts: [
      "Infrastructure as Code",
      "Containerized workloads",
      "Automated delivery pipeline",
      "Consistent deployments",
    ],
    technologies: ["AWS", "Terraform", "Docker", "ECS / ECR", "GitHub Actions"],
    kind: "infrastructure",
  },
] as const;

export const additionalProjects = [
  {
    name: "Nirlat",
    descriptor: "Rewards and engagement platform",
    focus: "Reusable backend foundations and connected content workflows",
    summary:
      "Contributed to a platform where users scan invoices, collect points, redeem offers, create business cards, and engage through dynamic offers and social-style feeds.",
    contributions: [
      "Created a reusable NestJS project foundation with logging, S3 uploads, MongoDB migrations, and role-based access control.",
      "Built APIs for posts, surveys, and events, with data synchronization across user and business modules.",
    ],
    technologies: ["Angular", "Node.js", "NestJS", "MongoDB", "AWS", "Firebase"],
  },
  {
    name: "Task & Habit Management",
    descriptor: "Structured habit-building platform",
    focus: "Backend architecture and cross-module integration",
    summary:
      "Contributed to a platform that helps parents schedule recurring tasks and support habit-building through structured tracking and interactive media sharing.",
    contributions: [
      "Architected the Express.js backend structure, including database design, logging, Husky hooks, filtering and pagination, file uploads, email, and SMS services.",
      "Integrated child, parent, challenge, strategy regulation, notification, and content modules across the backend and admin panel.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AWS", "Firebase"],
  },
  {
    name: "Work-Finder",
    descriptor: "Employer and candidate job marketplace",
    focus: "Payments, subscriptions, and ongoing product maintenance",
    summary:
      "Contributed to a job marketplace where employers publish roles and candidates discover employment opportunities.",
    contributions: [
      "Integrated employer and subscription modules with recurring plans for 3, 6, and 12 months, plus one-time payments for emergency job postings.",
      "Manage maintenance work, client calls, and ongoing change requests supporting reliability and feature evolution.",
    ],
    technologies: ["Node.js", "Inversify", "MongoDB", "AWS", "Firebase"],
  },
] as const;

export const expertise = [
  {
    category: "Backend",
    description: "Service design, API standards, and application architecture.",
    skills: ["Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript", "REST APIs"],
  },
  {
    category: "Data",
    description: "Relational and document data modelling with practical optimization.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "NoSQL", "ORMs"],
  },
  {
    category: "Messaging and distributed systems",
    description: "Reliable background work and asynchronous service communication.",
    skills: ["RabbitMQ", "BullMQ", "Kafka", "Microservices", "Distributed Systems"],
  },
  {
    category: "Cloud and delivery",
    description: "Repeatable infrastructure and deployment workflows.",
    skills: ["AWS", "Terraform", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Security",
    description: "Layered controls for identity, authorization, and sensitive data.",
    skills: ["RBAC", "TOTP / 2FA", "JWT", "Encryption Workflows", "Audit Logging"],
  },
  {
    category: "Supporting tools",
    description: "Full-stack context and disciplined engineering practices.",
    skills: ["React.js", "Next.js", "System Design", "Testing", "Git", "Python (Basic)"],
  },
] as const;

export const experience = {
  role: "Backend Software Engineer",
  company: "Shaligram Infotech",
  period: "February 2023 — Present",
  points: [
    "Lead backend architecture and development across 5+ production applications, from system design and database modelling to API standards and deployment pipelines.",
    "Translate business requirements into technical solutions through direct collaboration with clients and stakeholders.",
    "Apply microservices, asynchronous processing, and distributed-systems patterns across multi-tenant applications.",
    "Established a recurring JavaScript onboarding program for 20+ trainees and directly mentor 3–4 junior developers on architecture, code quality, and production practices.",
  ],
} as const;

export const approach = [
  {
    index: "01",
    title: "Model the system before the endpoint",
    text: "Start with domain boundaries, data ownership, security constraints, and failure modes—then shape APIs around a coherent system.",
  },
  {
    index: "02",
    title: "Make background work observable",
    text: "Treat queues, consumers, retries, synchronization, and backups as first-class production workflows rather than invisible plumbing.",
  },
  {
    index: "03",
    title: "Build delivery into the architecture",
    text: "Use infrastructure as code, containers, and CI/CD so environments and releases remain understandable and repeatable.",
  },
] as const;
