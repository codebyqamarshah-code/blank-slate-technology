import { 
  Code, 
  Cpu, 
  PenTool, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Server, 
  Layers, 
  Bot, 
  BrainCircuit, 
  Cloud, 
  ShieldCheck, 
  Layout, 
  Palette, 
  Search, 
  Target, 
  RefreshCw, 
  Gauge, 
  Database, 
  Building2, 
  Users, 
  Store, 
  Wallet, 
  Stethoscope, 
  GraduationCap, 
  Megaphone, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Briefcase
} from 'lucide-react';
import { FaLinkedin, FaAws } from 'react-icons/fa6';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiFlutter, SiNextdotjs } from 'react-icons/si';
import { RiRobot2Fill } from 'react-icons/ri';

export const serviceCategories = [
  {
    id: 'web-development',
    title: 'Web & Software Development',
    icon: Code,
    description: 'High-performance bespoke web applications, SaaS multi-tenant platforms, scalable APIs, and cross-platform mobile apps.',
  },
  {
    id: 'advanced-technology',
    title: 'Advanced AI & Cloud Tech',
    icon: Cpu,
    description: 'Enterprise AI agents, private RAG pipelines, AWS/GCP cloud infrastructure, cybersecurity audits, and high-concurrency databases.',
  },
  {
    id: 'design-creative',
    title: 'UI/UX & Product Design',
    icon: PenTool,
    description: 'Conversion-driven Figma design systems, premium brand books, interactive prototypes, and modern visual identities.',
  },
  {
    id: 'digital-growth',
    title: 'Digital Marketing & Growth',
    icon: TrendingUp,
    description: 'Data-backed SEO ranking, Google Ads PPC management, LinkedIn B2B optimization, and high-converting marketing funnels.',
  }
];

export const enterpriseSpecialties = [
  {
    icon: Building2,
    title: 'Enterprise ERP Systems',
    desc: 'All-in-one supply chain, inventory, accounting, and multi-branch resource management tailored to your exact business workflow.'
  },
  {
    icon: Users,
    title: 'Custom CRM Platforms',
    desc: 'Lead pipelines, automated follow-ups, WhatsApp/Email sync, and sales representative performance tracking.'
  },
  {
    icon: Store,
    title: 'Point of Sale (POS) Systems',
    desc: 'High-speed retail billing, thermal printing, barcode scanning, multi-store stock transfers, and offline billing mode.'
  },
  {
    icon: Stethoscope,
    title: 'Hospital & Healthcare (HMS)',
    desc: 'Patient EHR records, doctor appointment scheduling, pharmacy inventory, and automated diagnostic lab portals.'
  },
  {
    icon: GraduationCap,
    title: 'LMS & Education Portals',
    desc: 'DRM-encrypted video streaming, automated grading, student fee installments, and digital certificate generation.'
  },
  {
    icon: Wallet,
    title: 'Fintech & Payment Engines',
    desc: 'Double-entry cryptographic ledger, digital wallets, bank webhook reconciliation, and automated KYC verification.'
  }
];

export const featuredTechServices = [
  {
    slug: 'react-nextjs-development',
    title: 'React & Next.js Development',
    category: 'Web & Full-Stack',
    badge: 'Frontend & SSR',
    icon: SiReact,
    brandColor: '#61DAFB',
    description: 'High-performance bespoke web applications, Next.js App Router, dynamic SaaS dashboards, and lightning-fast edge rendering.',
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'flutter-app-development',
    title: 'Flutter App Development',
    category: 'Mobile Engineering',
    badge: 'iOS & Android',
    icon: SiFlutter,
    brandColor: '#54C5F8',
    description: 'Cross-platform mobile apps for iOS and Android from a single codebase with 60fps native animations and offline-first capabilities.',
    tags: ['Flutter 3', 'Dart', 'Bloc / Riverpod', 'Offline Sync']
  },
  {
    slug: 'backend-cloud-development',
    title: 'Backend & Cloud Development',
    category: 'Cloud & Infrastructure',
    badge: 'Microservices & APIs',
    icon: Server,
    brandColor: '#34D399',
    description: 'Scalable microservices, robust REST & GraphQL APIs, AWS/GCP cloud architecture, and high-security databases.',
    tags: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker & AWS']
  }
];

export const additionalEnterpriseServices = [
  {
    slug: 'product-engineering',
    title: 'Product Engineering',
    icon: Cpu,
    brandColor: '#818CF8',
    description: 'We provide enterprise end-to-end product development, customization, and integration to build great software solutions for your business.',
    badge: 'Enterprise End-to-End'
  },
  {
    slug: 'saas-application-development',
    title: 'SaaS Application Development',
    icon: Layers,
    brandColor: '#38BDF8',
    description: 'SaaS application development services that shape your ideas into reality giving your business the edge to stay ahead.',
    badge: 'Multi-Tenant Scale'
  },
  {
    slug: 'ecommerce-development',
    title: 'eCommerce Development',
    icon: ShoppingCart,
    brandColor: '#F472B6',
    description: 'We design and build custom eCommerce applications that give you and your customers the best experience possible.',
    badge: 'High Conversion'
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    icon: Layout,
    brandColor: '#F59E0B',
    description: 'Our Content Management Systems empower businesses with flexibility, security and convenience. We create powerful tools for publishing web content.',
    badge: 'Publishing Freedom'
  },
  {
    slug: 'custom-application-development',
    title: 'Application Development',
    icon: Code,
    brandColor: '#EC4899',
    description: 'We are a product agency breathing tech into your ideas with our custom Application Development services.',
    badge: 'Bespoke Software'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    brandColor: '#10B981',
    description: 'In a mobile-first world, customers and employees want more ways to engage with your brand.',
    badge: 'iOS & Android'
  }
];

export const allServices = [
  {
    slug: 'javascript-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'JavaScript Development',
    shortDescription: 'Build fast, interactive, and scalable digital experiences with modern JavaScript architecture.',
    heroDescription: 'JavaScript is the backbone of the modern web. We engineer high-performance frontend interfaces, robust backend APIs, and real-time data solutions using cutting-edge JavaScript ES6+, TypeScript, and modern frameworks to drive your digital growth.',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    badge: 'Modern Web Development',
    highlights: [
      'Single Page Applications (SPAs) & Progressive Web Apps (PWAs)',
      'Real-time data synchronization & WebSocket integrations',
      'Advanced state management and component-driven architecture',
      'High-performance JavaScript execution and core web vitals optimization'
    ],
    credentials: ['JavaScript ES6+', 'TypeScript', 'Node.js', 'Vite', 'Webpack'],
    solutionsDelivered: [
      {
        challenge: 'Slow page load times affecting customer retention and SEO rankings.',
        solution: 'Refactored legacy code into modern ES6+ modules with lazy loading and optimized asset delivery.',
        value: 'Reduced load times by 70%, boosting SEO visibility and conversion rates.'
      }
    ],
    capabilities: [
      {
        title: 'Frontend Engineering',
        description: 'Creating highly interactive and responsive user interfaces with modern JavaScript.'
      },
      {
        title: 'Backend API Development',
        description: 'Building secure, scalable, and fast RESTful APIs using Node.js and Express.'
      },
      {
        title: 'Full-Stack JavaScript Integration',
        description: 'Seamless integration between client and server using unified JavaScript architectures.'
      }
    ],
    metrics: [
      { label: 'Performance', value: '99+ Lighthouse' },
      { label: 'Type Safety', value: '100% Strict TS' },
      { label: 'Code Quality', value: 'ESLint Audited' },
      { label: 'Delivery', value: 'Agile Sprints' }
    ],
    techStack: [
      { name: 'JavaScript', role: 'Core Language' },
      { name: 'TypeScript', role: 'Static Typing' },
      { name: 'Node.js', role: 'Runtime' },
      { name: 'Webpack / Vite', role: 'Bundler' },
      { name: 'Jest / Cypress', role: 'Testing' }
    ],
    faq: [
      {
        question: 'Why choose JavaScript for enterprise applications?',
        answer: 'JavaScript allows for a unified tech stack across both frontend and backend (Node.js), accelerating development cycles and enabling highly interactive, real-time web experiences.'
      },
      {
        question: 'Do you use TypeScript?',
        answer: 'Yes, we heavily utilize TypeScript in our JavaScript projects to ensure type safety, reduce runtime errors, and improve code maintainability for enterprise-scale applications.'
      }
    ]
  },
  {
    slug: 'react-nextjs-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'React & Next.js Development',
    shortDescription: 'Bespoke web applications, Next.js architecture, dynamic SaaS dashboards, and server-side rendering.',
    heroDescription: 'We build exceptional digital products using React and Next.js. Our engineering focuses on Server-Side Rendering (SSR), Static Site Generation (SSG), and edge computing to deliver lightning-fast, SEO-optimized web applications and scalable SaaS platforms.',
    icon: SiReact,
    brandColor: '#61DAFB',
    badge: 'Frontend & SSR',
    highlights: [
      'Next.js App Router & Server Components architecture',
      'Sub-second page loads with Edge caching and SSR/SSG',
      'Dynamic SaaS dashboards with complex data visualization',
      'Headless CMS integration and decoupled frontend solutions'
    ],
    credentials: ['React 18/19', 'Next.js 14/15', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand'],
    solutionsDelivered: [
      {
        challenge: 'Client-side rendered React app suffering from poor SEO and slow initial load times.',
        solution: 'Migrated to Next.js with Server-Side Rendering and static asset optimization.',
        value: 'Achieved 100/100 SEO score and reduced Time to Interactive (TTI) by 3 seconds.'
      }
    ],
    capabilities: [
      {
        title: 'Custom SaaS Development',
        description: 'Building robust, multi-tenant dashboards with granular role-based access control.'
      },
      {
        title: 'High-Performance E-Commerce',
        description: 'Headless storefronts built with Next.js Commerce for lightning-fast shopping experiences.'
      },
      {
        title: 'Design System Implementation',
        description: 'Translating Figma designs into pixel-perfect, reusable React component libraries.'
      }
    ],
    metrics: [
      { label: 'Core Web Vitals', value: 'Pass (Green)' },
      { label: 'Render Speed', value: '< 50ms SSR' },
      { label: 'Scalability', value: 'Edge Ready' },
      { label: 'Architecture', value: 'App Router' }
    ],
    techStack: [
      { name: 'React', role: 'UI Library' },
      { name: 'Next.js', role: 'React Framework' },
      { name: 'Tailwind CSS', role: 'Styling' },
      { name: 'Framer Motion', role: 'Animations' },
      { name: 'Vercel / AWS', role: 'Hosting' }
    ],
    faq: [
      {
        question: 'What is the advantage of Next.js over standard React?',
        answer: 'Next.js provides built-in Server-Side Rendering (SSR) and Static Site Generation (SSG), which drastically improves SEO, initial page load speed, and overall user experience compared to a standard Client-Side Rendered React app.'
      }
    ]
  },
  {
    slug: 'nodejs-expressjs-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Node.js & Express.js Development',
    shortDescription: 'Secure backend systems, RESTful APIs, authentication, and server-side architecture.',
    heroDescription: 'Power your applications with high-performance, event-driven Node.js backend systems. We engineer scalable RESTful and GraphQL APIs using Express.js, handling high traffic loads, complex third-party integrations, and secure data processing.',
    icon: SiNodedotjs,
    brandColor: '#339933',
    badge: 'Backend & APIs',
    highlights: [
      'High-throughput REST API & GraphQL development',
      'JWT/OAuth2 secure authentication and role-based authorization',
      'Microservices architecture and event-driven data flows',
      'Real-time communication using WebSockets (Socket.io)'
    ],
    credentials: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'Redis', 'Docker'],
    solutionsDelivered: [
      {
        challenge: 'Legacy PHP backend struggling to handle high concurrent user requests during peak hours.',
        solution: 'Re-architected the backend using an asynchronous Node.js and Express microservices approach.',
        value: 'Increased request throughput by 500% while reducing server resource costs by 40%.'
      }
    ],
    capabilities: [
      {
        title: 'Custom API Engineering',
        description: 'Building secure, documented, and versioned APIs for web and mobile clients.'
      },
      {
        title: 'Third-Party Integrations',
        description: 'Connecting payment gateways (Stripe), CRMs, ERPs, and external cloud services.'
      },
      {
        title: 'Backend Refactoring',
        description: 'Modernizing monolithic backends into agile, containerized Node.js microservices.'
      }
    ],
    metrics: [
      { label: 'Throughput', value: '10k+ Req/sec' },
      { label: 'Security', value: 'OWASP Top 10' },
      { label: 'Architecture', value: 'Event-Driven' },
      { label: 'API Uptime', value: '99.99%' }
    ],
    techStack: [
      { name: 'Node.js', role: 'Runtime Environment' },
      { name: 'Express.js', role: 'Web Framework' },
      { name: 'Socket.io', role: 'Real-time' },
      { name: 'Redis', role: 'Caching Layer' },
      { name: 'Postman / Swagger', role: 'API Docs' }
    ],
    faq: [
      {
        question: 'Is Node.js scalable for enterprise applications?',
        answer: 'Yes, Node.js uses a non-blocking, event-driven architecture that is highly efficient for data-intensive real-time applications. When combined with microservices and containerization, it scales effortlessly.'
      }
    ]
  },
  {
    slug: 'mongodb-mysql-solutions',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'MongoDB & MySQL Solutions',
    shortDescription: 'Reliable database architecture designed for modern applications—from flexible NoSQL to structured SQL.',
    heroDescription: 'Data is the core of your business. We design, optimize, and manage highly resilient database architectures using MongoDB for flexible, document-based storage and MySQL/PostgreSQL for structured, relational data integrity.',
    icon: SiMongodb,
    brandColor: '#47A248',
    badge: 'Database Engineering',
    highlights: [
      'Custom schema design and complex query optimization',
      'ACID-compliant relational database setups (MySQL / PostgreSQL)',
      'Highly scalable NoSQL document stores (MongoDB)',
      'Database clustering, sharding, replication, and disaster recovery'
    ],
    credentials: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose', 'Prisma ORM'],
    solutionsDelivered: [
      {
        challenge: 'Complex reporting queries taking minutes to execute on a growing dataset.',
        solution: 'Implemented proper indexing, read-replicas, and query optimization strategies.',
        value: 'Reduced query execution time from 3 minutes to under 2 seconds.'
      }
    ],
    capabilities: [
      {
        title: 'Database Architecture Design',
        description: 'Modeling normalized SQL schemas or flexible NoSQL structures based on your application needs.'
      },
      {
        title: 'Performance Tuning',
        description: 'Identifying bottlenecks, optimizing indexes, and implementing caching layers with Redis.'
      },
      {
        title: 'Data Migration & Security',
        description: 'Securely migrating legacy data with zero downtime and implementing at-rest encryption.'
      }
    ],
    metrics: [
      { label: 'Query Speed', value: '< 50ms Avg' },
      { label: 'Availability', value: 'Multi-AZ Setup' },
      { label: 'Data Security', value: 'AES-256 Encrypted' },
      { label: 'Backups', value: 'Automated Daily' }
    ],
    techStack: [
      { name: 'MongoDB', role: 'NoSQL Database' },
      { name: 'MySQL', role: 'SQL Database' },
      { name: 'PostgreSQL', role: 'Advanced SQL' },
      { name: 'Prisma / Mongoose', role: 'ORM / ODM' },
      { name: 'Redis', role: 'In-Memory Cache' }
    ],
    faq: [
      {
        question: 'Should I choose MongoDB or MySQL?',
        answer: 'It depends on your data structure. MySQL is perfect for highly structured data requiring complex transactions and strict relational integrity (like financial apps). MongoDB is excellent for rapidly changing, document-based data (like content management or product catalogs).'
      }
    ]
  },
  {
    slug: 'python-development',
    categoryId: 'advanced-technology',
    categoryName: 'Advanced AI & Cloud Tech',
    title: 'Python Development',
    shortDescription: 'Powerful Python solutions for backend development, data processing, APIs, and intelligent applications.',
    heroDescription: 'Python drives the intelligence behind modern software. We build scalable Python backend architectures using Django and FastAPI, engineered to handle heavy data processing, machine learning integrations, and complex business logic.',
    icon: SiPython,
    brandColor: '#3776AB',
    badge: 'Backend & Intelligent Systems',
    highlights: [
      'High-performance asynchronous APIs with FastAPI',
      'Robust enterprise web applications using Django',
      'Data processing pipelines and ETL workflows',
      'Seamless integration of Machine Learning and AI models'
    ],
    credentials: ['Python 3', 'FastAPI', 'Django', 'Flask', 'Pandas', 'Celery'],
    solutionsDelivered: [
      {
        challenge: 'A data-heavy platform required rapid processing of millions of records for real-time analytics.',
        solution: 'Built a distributed processing pipeline using Python, Celery workers, and RabbitMQ.',
        value: 'Enabled real-time analytics processing, handling 5M+ records daily without lag.'
      }
    ],
    capabilities: [
      {
        title: 'API & Microservices Engineering',
        description: 'Developing lightning-fast, asynchronous REST and GraphQL APIs with FastAPI.'
      },
      {
        title: 'AI & Data Integration',
        description: 'Connecting backend systems to predictive models, LLMs, and data analytics engines.'
      },
      {
        title: 'Enterprise Web Development',
        description: 'Building secure, scalable, and feature-rich web platforms using the Django framework.'
      }
    ],
    metrics: [
      { label: 'API Speed', value: 'High-Concurrency' },
      { label: 'Codebase', value: 'PEP 8 Standard' },
      { label: 'Data Processing', value: 'Scalable ETL' },
      { label: 'Integration', value: 'AI-Ready' }
    ],
    techStack: [
      { name: 'Python', role: 'Core Language' },
      { name: 'FastAPI / Django', role: 'Web Frameworks' },
      { name: 'Celery', role: 'Task Queue' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Docker', role: 'Containerization' }
    ],
    faq: [
      {
        question: 'Why use FastAPI for backend development?',
        answer: 'FastAPI is a modern, high-performance web framework for building APIs with Python. It is highly optimized, supports asynchronous programming natively, and automatically generates API documentation.'
      }
    ]
  },
  {
    slug: 'ai-automation-solutions',
    categoryId: 'advanced-technology',
    categoryName: 'Advanced AI & Cloud Tech',
    title: 'AI Automation Solutions',
    shortDescription: 'Transform repetitive business processes into intelligent automated workflows with AI agents.',
    heroDescription: 'Step into the future of operations with our AI Automation Solutions. We integrate Large Language Models (LLMs), custom AI agents, and intelligent workflow tools (like n8n and Make) to automate repetitive tasks, enhance customer support, and streamline your business operations.',
    icon: RiRobot2Fill,
    brandColor: '#8B5CF6',
    badge: 'AI & Workflow Automation',
    highlights: [
      'Custom AI Chatbots and intelligent customer support agents',
      'Integration of OpenAI (ChatGPT), Claude, and open-source LLMs',
      'Complex business workflow automation (n8n, Zapier, Make)',
      'Retrieval-Augmented Generation (RAG) for internal company knowledge bases'
    ],
    credentials: ['OpenAI API', 'LangChain', 'n8n', 'Make.com', 'Vector Databases'],
    solutionsDelivered: [
      {
        challenge: 'Customer support team overwhelmed by repetitive queries, leading to slow response times.',
        solution: 'Deployed a custom AI agent trained on the company knowledge base using RAG architecture.',
        value: 'Resolved 65% of customer inquiries instantly, reducing support ticket volume and saving 40+ human hours weekly.'
      }
    ],
    capabilities: [
      {
        title: 'Intelligent AI Agents',
        description: 'Deploying custom AI models that can reason, process documents, and assist users 24/7.'
      },
      {
        title: 'Workflow Automation',
        description: 'Connecting disconnected apps (CRMs, emails, databases) into seamless, autonomous pipelines.'
      },
      {
        title: 'Private LLM Integrations',
        description: 'Setting up secure, private AI environments to protect your sensitive corporate data.'
      }
    ],
    metrics: [
      { label: 'Efficiency', value: '10x Faster Workflows' },
      { label: 'Availability', value: '24/7 AI Support' },
      { label: 'Integration', value: '500+ App Connectors' },
      { label: 'ROI', value: 'Immediate Impact' }
    ],
    techStack: [
      { name: 'LangChain / LlamaIndex', role: 'AI Orchestration' },
      { name: 'OpenAI / Claude', role: 'LLMs' },
      { name: 'Pinecone / Chroma', role: 'Vector DBs' },
      { name: 'n8n / Make', role: 'Automation Platforms' },
      { name: 'Python', role: 'Backend' }
    ],
    faq: [
      {
        question: 'What is an AI Agent?',
        answer: 'An AI Agent is an autonomous system powered by an LLM that can understand instructions, break them into steps, use external tools (like searching the web or querying a database), and complete tasks without human intervention.'
      },
      {
        question: 'Is my data secure when using your AI solutions?',
        answer: 'Absolutely. We can design Private RAG (Retrieval-Augmented Generation) systems and utilize enterprise-grade APIs where your data is not used to train public models, ensuring total confidentiality.'
      }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // 1. PRIMARY FEATURED ENGINEERING SERVICES
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'product-engineering',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Product Engineering',
    shortDescription: 'We provide enterprise end-to-end product development, customization, and integration to build great software solutions for your business.',
    heroDescription: 'We engineer end-to-end digital products from concept to scale. Our product engineering squads combine domain expertise, resilient system architecture, seamless 3rd-party integrations, and automated CI/CD pipelines to build market-defining software.',
    icon: Cpu,
    brandColor: '#818CF8',
    badge: 'Enterprise End-to-End',
    highlights: [
      'Full-Lifecycle Software Engineering (Discovery to Deployment)',
      'Decoupled Microservices & High-Availability Cloud Stacks',
      'Rigorous Automated QA (Unit, Integration & Playwright E2E)',
      '100% Intellectual Property & Source Code Ownership'
    ],
    credentials: ['React 19', 'Next.js 15', 'Node.js', 'Docker', 'AWS Cloud', 'PostgreSQL'],
    solutionsDelivered: [
      {
        challenge: 'Monolithic legacy systems with severe technical debt stalling product innovation.',
        solution: 'Modern decoupled microservices architecture with automated CI/CD and zero-downtime migration.',
        value: '60% faster sprint delivery and 50% lower maintenance overhead.'
      },
      {
        challenge: 'Misaligned engineering teams missing milestone deadlines and budget constraints.',
        solution: 'Dedicated cross-functional engineering squads with sprint metrics and bi-weekly production drops.',
        value: '100% on-time milestone delivery within allocated budget.'
      }
    ],
    capabilities: [
      {
        title: 'Product Architecture & Roadmap',
        description: 'Comprehensive technical blueprints, domain data modeling, API contracts, and technology stack selection.'
      },
      {
        title: 'Custom Enterprise Engineering',
        description: 'Clean, type-safe, modular codebases engineered for high concurrency, fault tolerance, and security.'
      },
      {
        title: 'System Modernization & Migration',
        description: 'Incremental refactoring of legacy codebases into cloud-native microservices without downtime.'
      },
      {
        title: 'API & 3rd-Party Integrations',
        description: 'Enterprise connectors for ERPs, CRMs, payment gateways, banking webhooks, and cloud data warehouses.'
      },
      {
        title: 'Automated QA & Security Testing',
        description: 'Comprehensive test suites, automated static code analysis, vulnerability scanning, and load profiling.'
      },
      {
        title: 'DevOps & 24/7 Telemetry',
        description: 'Containerized Kubernetes pipelines, Prometheus metrics, distributed tracing, and proactive SLA support.'
      }
    ],
    metrics: [
      { label: 'Release Cadence', value: '2-Week Sprints' },
      { label: 'Code Quality', value: '100% Audited' },
      { label: 'Test Coverage', value: '90%+ Automated' },
      { label: 'IP Ownership', value: '100% Transferred' }
    ],
    techStack: [
      { name: 'React / Next.js', role: 'Frontend' },
      { name: 'Node / Python', role: 'Backend' },
      { name: 'PostgreSQL', role: 'Relational DB' },
      { name: 'Docker & K8s', role: 'DevOps' },
      { name: 'AWS Cloud', role: 'Infrastructure' },
      { name: 'TypeScript', role: 'Type Safety' }
    ],
    process: [
      { step: '01', name: 'Product Discovery', desc: 'Technical blueprinting, data modeling, and scope validation.' },
      { step: '02', name: 'UI/UX Prototyping', desc: 'Interactive prototypes and user journey validation before coding.' },
      { step: '03', name: 'Agile Engineering', desc: 'Bi-weekly sprint releases with continuous testing and code audits.' },
      { step: '04', name: 'Production & SLA', desc: 'Zero-downtime deployment, telemetry monitoring, and ongoing support.' }
    ],
    faqs: [
      { q: 'What is the difference between product engineering and standard web development?', a: 'Product engineering covers the complete software lifecycle — from strategic architecture and compliance to automated CI/CD, microservices scaling, and long-term product roadmapping.' },
      { q: 'Can our internal developers collaborate with your squad?', a: 'Yes! Our engineers seamlessly integrate into your GitHub repositories, Slack channels, and Jira sprints.' }
    ]
  },
  {
    slug: 'saas-application-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'SaaS Application Development',
    shortDescription: 'SaaS application development services that shape your ideas into reality giving your business the edge to stay ahead.',
    heroDescription: 'We architect battle-tested, multi-tenant Software-as-a-Service (SaaS) platforms with cryptographic tenant data isolation, automated Stripe/Paddle subscriptions, granular role-based access control, and 99.99% uptime.',
    icon: Layers,
    brandColor: '#38BDF8',
    badge: 'Multi-Tenant Scale',
    highlights: [
      'Multi-Tenant Database Architecture with Row-Level Security (RLS)',
      'Automated Recurring Billing, Invoicing & Proration (Stripe/Paddle)',
      'Enterprise Role-Based Access Control (RBAC) & SAML/SSO Integration',
      'Real-Time High-Density Analytics Dashboards & Usage Metering'
    ],
    credentials: ['PostgreSQL RLS', 'Stripe Billing', 'Next.js 15', 'Node.js', 'Redis', 'Docker'],
    solutionsDelivered: [
      {
        challenge: 'Risk of tenant data leaks and slow query latency under high concurrent SaaS accounts.',
        solution: 'PostgreSQL Row-Level Security (RLS) with partitioned tenant schemas and distributed Redis caching.',
        value: '100% data segregation guarantee and sub-50ms API response across all tenants.'
      },
      {
        challenge: 'High churn and revenue leakage caused by failed payment webhooks and manual plan upgrades.',
        solution: 'Automated Stripe billing engine with instant webhook reconciliation and automated dunning.',
        value: 'Zero revenue leakage and seamless self-service customer upgrades.'
      }
    ],
    capabilities: [
      {
        title: 'Multi-Tenant Architecture',
        description: 'Cryptographically segregated tenant workspaces, automated subdomain routing, and database schema isolation.'
      },
      {
        title: 'Recurring Billing & Metering',
        description: 'Tiered subscription models, seat-based licenses, usage metering, discount codes, and automated tax calculations.'
      },
      {
        title: 'Enterprise RBAC & SSO',
        description: 'Single sign-on via Google, GitHub, and enterprise SAML/Okta with granular organization permissions.'
      },
      {
        title: 'Real-Time SaaS Dashboards',
        description: 'High-density charts, real-time activity feeds, exportable CSV/PDF reports, and custom data filters.'
      },
      {
        title: 'Developer APIs & Webhooks',
        description: 'Public API keys, rate-limiting gateways, and outbound webhook dispatchers empowering client integrations.'
      },
      {
        title: 'Automated Onboarding & Email Funnels',
        description: 'Interactive product walkthroughs, transactional email sequences via Resend/SendGrid, and churn monitoring.'
      }
    ],
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Tenant Isolation', value: '100% Cryptographic' },
      { label: 'Billing Precision', value: '100% Automated' },
      { label: 'API Latency', value: '< 45ms' }
    ],
    techStack: [
      { name: 'Next.js 15', role: 'SaaS App Core' },
      { name: 'Node.js / Express', role: 'Microservices API' },
      { name: 'PostgreSQL', role: 'Multi-Tenant DB' },
      { name: 'Stripe API', role: 'Subscription Engine' },
      { name: 'Redis', role: 'Cache & Job Queues' },
      { name: 'AWS Cloud', role: 'Infrastructure' }
    ],
    process: [
      { step: '01', name: 'Tenant Modeling', desc: 'Designing database tenancy, subscription tiers, and permission matrices.' },
      { step: '02', name: 'Core Engine Build', desc: 'Developing authentication, workspace provisioning, and payment webhooks.' },
      { step: '03', name: 'Concurrency Testing', desc: 'Simulating concurrent tenant load and stress testing payment failovers.' },
      { step: '04', name: 'Launch & Expansion', desc: 'Production deployment with automated telemetry and uptime SLAs.' }
    ],
    faqs: [
      { q: 'How is customer data protected in a multi-tenant SaaS application?', a: 'We implement Row-Level Security (RLS) within PostgreSQL and attach cryptographic tenant identifiers to every database query, guaranteeing that no customer can ever access another account’s records.' },
      { q: 'Can we support free trials and self-service plan upgrades?', a: 'Yes! We build automated card verification, customizable free trials, and customer self-service portals to upgrade, cancel, or modify plans.' }
    ]
  },
  {
    slug: 'cms-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'CMS Development',
    shortDescription: 'Our Content Management Systems empower businesses with flexibility, security and convenience. We create powerful tools for publishing web content.',
    heroDescription: 'We develop flexible, ultra-secure Content Management Systems and Headless CMS architectures that give marketing teams total publishing freedom while ensuring high performance, custom workflows, and ironclad security.',
    icon: Layout,
    brandColor: '#F59E0B',
    badge: 'Publishing Freedom',
    highlights: [
      'Headless CMS Architecture (Strapi, Sanity, Payload, WordPress API)',
      'Custom Drag-and-Drop Page Builders & Editorial Workflows',
      'Sub-Second Content Delivery with Jamstack & Next.js ISR',
      'Granular Editor Roles, Audit Trails & Multi-Language Localization'
    ],
    credentials: ['Strapi CMS', 'Sanity.io', 'Payload CMS', 'WordPress API', 'Next.js 15', 'Cloudflare CDN'],
    solutionsDelivered: [
      {
        challenge: 'Marketing teams bottlenecked by developers for basic landing page updates and blog posts.',
        solution: 'Headless CMS with flexible modular block builders allowing marketing to publish instantly without code.',
        value: 'Zero developer dependency for marketing updates and 10x faster campaign turnaround.'
      },
      {
        challenge: 'Slow monolithic CMS platforms vulnerable to plugins security exploits.',
        solution: 'Decoupled headless architecture serving pre-rendered static pages via global edge CDNs.',
        value: '100% immunity against CMS injection attacks and 95+ Google Lighthouse scores.'
      }
    ],
    capabilities: [
      {
        title: 'Headless CMS Architecture',
        description: 'Decoupled content engines connecting to Next.js or mobile frontends via high-speed GraphQL and REST APIs.'
      },
      {
        title: 'Custom Modular Block Builders',
        description: 'Empower your editorial team to assemble beautiful landing pages using brand-approved visual component blocks.'
      },
      {
        title: 'Multi-Language & Localization',
        description: 'Manage international content, regional currency adaptations, and localized SEO meta tags in one dashboard.'
      },
      {
        title: 'Role-Based Editorial Workflows',
        description: 'Multi-tier review stages (Writer -> Editor -> Legal -> Publisher) with revision history and rollback controls.'
      },
      {
        title: 'Hardened Enterprise WordPress',
        description: 'Clean, security-hardened WordPress installations optimized for speed without bulky third-party plugin bloat.'
      },
      {
        title: 'Automated Media Optimization',
        description: 'Automatic WebP/AVIF compression, responsive image breakpoints, and CDN asset distribution.'
      }
    ],
    metrics: [
      { label: 'Publishing Speed', value: 'Instant / Real-time' },
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Security Grade', value: 'A+ Enterprise' },
      { label: 'Edge Latency', value: '< 35ms' }
    ],
    techStack: [
      { name: 'Strapi / Sanity', role: 'Headless CMS' },
      { name: 'Next.js 15', role: 'Frontend Delivery' },
      { name: 'Tailwind CSS', role: 'Design System' },
      { name: 'PostgreSQL', role: 'Content Database' },
      { name: 'AWS S3', role: 'Media Storage' },
      { name: 'Cloudflare', role: 'Global CDN' }
    ],
    process: [
      { step: '01', name: 'Content Modeling', desc: 'Structuring content types, editorial hierarchies, and relationships.' },
      { step: '02', name: 'CMS & Frontend Build', desc: 'Developing the management interface and high-speed delivery frontend.' },
      { step: '03', name: 'Editorial Walkthrough', desc: 'Hands-on team training and visual content creation guidelines.' },
      { step: '04', name: 'Global CDN Rollout', desc: 'Edge caching deployment, SSL hardening, and automated backups.' }
    ],
    faqs: [
      { q: 'What is a Headless CMS and why should we use it?', a: 'A headless CMS separates your content management database from the user-facing website. This provides lightning-fast sub-second loading, total security against plugin vulnerabilities, and enables multi-channel publishing to websites and apps simultaneously.' },
      { q: 'Can our marketing team edit text and images without calling developers?', a: 'Yes! You will receive a clean, user-friendly admin dashboard with custom drag-and-drop building blocks designed specifically for your brand guidelines.' }
    ]
  },
  {
    slug: 'custom-application-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Application Development',
    shortDescription: 'We are a product agency breathing tech into your ideas with our custom Application Development services.',
    heroDescription: 'We engineer bespoke, enterprise-grade software applications that automate complex business workflows, eliminate operational inefficiencies, and deliver exceptional digital experiences across web, desktop, and internal portals.',
    icon: Code,
    brandColor: '#EC4899',
    badge: 'Bespoke Software',
    highlights: [
      'Bespoke Software Architecture Tailored 100% to Your Workflow',
      'High-Security Enterprise Integrations (ERP, CRM, Banking APIs)',
      'Automated Data Pipelines & Real-Time Operational Dashboards',
      'Scalable Cloud Deployment with 99.9% Uptime Guarantee'
    ],
    credentials: ['React 19', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    solutionsDelivered: [
      {
        challenge: 'Disjointed manual spreadsheets causing communication silos and costly business errors.',
        solution: 'Unified bespoke internal application automating task routing, approvals, and data validation.',
        value: '80% reduction in manual data processing time.'
      },
      {
        challenge: 'Off-the-shelf software imposing rigid limitations and high recurring license fees.',
        solution: 'Custom proprietary application engineered specifically around your company’s unique workflow.',
        value: 'Zero recurring per-user licensing fees and 100% proprietary IP ownership.'
      }
    ],
    capabilities: [
      {
        title: 'Custom Web & Internal Portals',
        description: 'Centralized platforms for employee management, operations tracking, and client self-service interactions.'
      },
      {
        title: 'Workflow Automation Engines',
        description: 'Automating multi-step approvals, automated notifications, document generation, and status syncing.'
      },
      {
        title: 'Enterprise System Modernization',
        description: 'Upgrading legacy desktop or manual databases into cloud-accessible modern applications.'
      },
      {
        title: 'Role-Based Security & Permissions',
        description: 'Strict department-level data segregation, audit logging, and single sign-on (SSO) authentication.'
      },
      {
        title: 'Third-Party API Integrations',
        description: 'Seamless bidirectional synchronization with your existing accounting, inventory, and payment systems.'
      },
      {
        title: 'Ongoing Support & SLA Maintenance',
        description: 'Dedicated technical support, feature enhancements, and proactive security monitoring.'
      }
    ],
    metrics: [
      { label: 'Time Saved', value: '75%+' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Error Reduction', value: '95% Fewer Errors' },
      { label: 'IP Ownership', value: '100% Proprietary' }
    ],
    techStack: [
      { name: 'React / Next.js', role: 'Application UI' },
      { name: 'Node.js / Express', role: 'Business Engine' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Tailwind CSS', role: 'Design System' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'AWS Cloud', role: 'Hosting' }
    ],
    process: [
      { step: '01', name: 'Operational Audit', desc: 'Analyzing internal business logic, workflows, and pain points.' },
      { step: '02', name: 'System Blueprint', desc: 'Mapping database schemas, user roles, and interactive wireframes.' },
      { step: '03', name: 'Sprint Engineering', desc: 'Bi-weekly functional releases tested directly with your team.' },
      { step: '04', name: 'Rollout & Staff Training', desc: 'Guided deployment, user onboarding, and dedicated technical maintenance.' }
    ],
    faqs: [
      { q: 'Why should we choose custom application development over off-the-shelf SaaS?', a: 'Off-the-shelf software charges exorbitant per-user monthly fees and forces your business to adapt to their limitations. A custom application is built 100% around your exact workflow, carries zero recurring per-seat licenses, and remains your exclusive proprietary asset.' },
      { q: 'Can the application integrate with our current systems?', a: 'Yes! We develop secure custom APIs and webhook connectors to synchronize with QuickBooks, SAP, Salesforce, or any custom database you currently run.' }
    ]
  },
  {
    slug: 'react-nextjs-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'React & Next.js Development',
    shortDescription: 'High-performance bespoke web applications, Next.js App Router, dynamic SaaS dashboards, and lightning-fast edge rendering.',
    heroDescription: 'We engineer modern React & Next.js web applications, high-converting SaaS platforms, and enterprise dashboards with Server-Side Rendering (SSR), React Server Components (RSC), type-safe TypeScript architectures, and sub-second load times.',
    icon: SiReact,
    brandColor: '#61DAFB',
    badge: 'Frontend & Full-Stack',
    highlights: [
      'Next.js 15 App Router & React 19 Server Components',
      'Sub-Second Page Loads & 95+ Google Lighthouse Scores',
      'Scalable SaaS Dashboards with Enterprise RBAC & Data Grids',
      'Edge Caching, ISR & Global CDN Cloudflare Rollouts',
      '100% Intellectual Property & Source Code Ownership',
      'Clean Modular Architecture with Unit & E2E Testing'
    ],
    credentials: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel / AWS', 'TanStack Query'],
    solutionsDelivered: [
      {
        challenge: 'Legacy frontend codebases with slow render cycles and high bounce rates.',
        solution: 'Modern Next.js architecture with incremental static regeneration and edge CDN caching.',
        value: '3x faster load times and 45% lower bounce rate.'
      },
      {
        challenge: 'Complex enterprise dashboards freezing under large data tables.',
        solution: 'Virtualised rendering, Web Workers, and optimistic UI updates.',
        value: 'Smooth 60 FPS interactions across 10,000+ data rows.'
      },
      {
        challenge: 'Poor SEO and slow time-to-first-byte (TTFB) in single-page applications.',
        solution: 'Full Server-Side Rendering (SSR) and dynamic metadata generation.',
        value: 'Top 3 Google SERP ranking for target commercial keywords.'
      }
    ],
    capabilities: [
      {
        title: 'Next.js App Router & SSR',
        description: 'Server-side rendering, streaming HTML, and React Server Components for instantaneous first contentful paint.'
      },
      {
        title: 'High-Density SaaS Dashboards',
        description: 'Complex analytical web apps with real-time charts, filterable data tables, and granular role permissions.'
      },
      {
        title: 'Component Design Systems',
        description: 'Pixel-perfect, accessible UI components built with Tailwind CSS, Radix UI, and motion interactions.'
      },
      {
        title: 'Edge Caching & Cloudflare CI/CD',
        description: 'Zero-latency content delivery networks, automated test suites, and preview environments for rapid releases.'
      },
      {
        title: 'Type-Safe Full-Stack APIs',
        description: 'End-to-end type safety connecting Next.js server actions and tRPC/REST endpoints to backend services.'
      },
      {
        title: 'Headless CMS & Commerce',
        description: 'Integration with Shopify Plus, Strapi, Sanity, and Supabase for dynamic content-driven digital experiences.'
      }
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'UI Frame Rate', value: '60 FPS' },
      { label: 'Time-To-First-Byte', value: '< 300ms' },
      { label: 'IP Ownership', value: '100% Full Transfer' }
    ],
    techStack: [
      { name: 'React 19', role: 'UI Library' },
      { name: 'Next.js 15', role: 'Full-Stack SSR' },
      { name: 'TypeScript', role: 'Type Safety' },
      { name: 'Tailwind CSS', role: 'Styling' },
      { name: 'TanStack Query', role: 'Server State' },
      { name: 'Zustand / Redux', role: 'Client State' }
    ],
    process: [
      { step: '01', name: 'Architecture & UX', desc: 'Defining component boundaries, data contracts, and responsive layout systems.' },
      { step: '02', name: 'Sprint Engineering', desc: 'Rapid two-week agile development sprints with continuous staging deployments.' },
      { step: '03', name: 'Performance & QA', desc: 'Lighthouse audits, cross-browser compatibility, and automated Playwright E2E tests.' },
      { step: '04', name: 'Global Rollout & SLA', desc: 'Edge CDN deployment, uptime monitoring, and post-launch maintenance warranty.' }
    ],
    faqs: [
      { q: 'Why choose Next.js over vanilla React?', a: 'Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG), which drastically improves search engine indexing (SEO), ensures sub-second page loads, and provides built-in API routing.' },
      { q: 'Will our team receive full source code?', a: 'Yes, 100% of the repository, design assets, and intellectual property are handed over directly to your organization.' }
    ]
  },
  {
    slug: 'flutter-app-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Flutter App Development',
    shortDescription: 'High-performance cross-platform mobile apps for iOS and Android with 60fps native animations and offline-first capabilities.',
    heroDescription: 'We architect fluid, production-ready Flutter mobile applications for iOS and Android from a single battle-tested codebase, delivering native performance, responsive gestures, hardware integrations, and seamless app store releases.',
    icon: SiFlutter,
    brandColor: '#54C5F8',
    badge: 'iOS & Android',
    highlights: [
      'Single Codebase for Both iOS & Android with 95%+ Code Sharing',
      'Smooth 60 FPS & 120 FPS Native Motion Graphics & Fluid Gestures',
      'Offline-First SQLite & Hive Local Storage with Automatic Cloud Sync',
      'Biometrics, Camera, Bluetooth BLE & Background GPS Integrations',
      '100% Guaranteed App Store & Google Play Store Publishing',
      'Strict State Architecture (Bloc / Riverpod) for Long-Term Scalability'
    ],
    credentials: ['Flutter 3', 'Dart 3', 'Apple iOS', 'Google Android', 'Firebase', 'Bloc / Riverpod'],
    solutionsDelivered: [
      {
        challenge: 'High cost and doubled timeline of maintaining separate native Swift and Kotlin apps.',
        solution: 'Unified Flutter architecture sharing 95%+ of business logic and UI while compiling to native arm64 code.',
        value: '45% cost reduction and 2x faster time-to-market.'
      },
      {
        challenge: 'Unreliable offline performance for on-field personnel and bad network zones.',
        solution: 'Local-first database caching with automated background sync queues.',
        value: 'Zero data loss and instantaneous offline user interactions.'
      },
      {
        challenge: 'Strenuous app store rejection due to guideline and privacy policy compliance.',
        solution: 'Rigorous pre-submission audits, automated compliance checklists, and sandbox testing.',
        value: '100% first-pass store approval rate.'
      }
    ],
    capabilities: [
      {
        title: 'Cross-Platform Mobile Apps',
        description: 'Single codebase targeting both Apple iPhone/iPad and Android phones/tablets with identical pixel fidelity.'
      },
      {
        title: '60fps Native Motion UI',
        description: 'Fluid micro-interactions, custom animations, and responsive screen adaptability across all screen aspect ratios.'
      },
      {
        title: 'Offline-First Synchronization',
        description: 'Local caching via SQLite or Hive ensuring uninterrupted app usage in low or zero internet connectivity.'
      },
      {
        title: 'Hardware Sensor & Device APIs',
        description: 'Deep integration with FaceID/fingerprint biometrics, Bluetooth BLE, camera scanners, and real-time geolocation.'
      },
      {
        title: 'Push Notifications & WebSockets',
        description: 'Real-time live messaging, order dispatching, and targeted push notification campaigns via Firebase Cloud Messaging.'
      },
      {
        title: 'App Store & Play Store CI/CD',
        description: 'Automated Fastlane pipelines for TestFlight beta distributions and guaranteed public store approvals.'
      }
    ],
    metrics: [
      { label: 'UI Fluidity', value: '60-120 FPS' },
      { label: 'Code Sharing', value: '95%+ Shared' },
      { label: 'Store Approval', value: '100% First-Pass' },
      { label: 'Crash-Free Rate', value: '99.8%' }
    ],
    techStack: [
      { name: 'Flutter 3', role: 'UI Framework' },
      { name: 'Dart 3', role: 'Language' },
      { name: 'Bloc / Riverpod', role: 'State Architecture' },
      { name: 'Firebase', role: 'Cloud & Auth' },
      { name: 'SQLite / Hive', role: 'Offline Storage' },
      { name: 'Fastlane', role: 'Store Automation' }
    ],
    process: [
      { step: '01', name: 'Product Scope & Wireframes', desc: 'Defining user journeys, gesture interactions, and technical device dependencies.' },
      { step: '02', name: 'Interactive Prototyping', desc: 'Clickable Figma prototypes validating user flows before code implementation.' },
      { step: '03', name: 'Sprint Development & Tests', desc: 'Iterative feature rollouts with automated unit tests and weekly TestFlight/APK drops.' },
      { step: '04', name: 'Store Publishing & SLA', desc: 'Submission to Apple App Store and Google Play, followed by crash analytics monitoring.' }
    ],
    faqs: [
      { q: 'Will the Flutter app feel like a real native app?', a: 'Yes! Flutter does not use web views; it renders directly using Skia / Impeller graphics engines and compiles to machine code (arm64), delivering 60-120 FPS native performance.' },
      { q: 'Do you handle the Apple and Google Play store submission?', a: 'Yes, our team manages the entire submission process, developer account setup, screenshot generation, and policy compliance until your app is live.' }
    ]
  },
  {
    slug: 'backend-cloud-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Backend & Cloud Development',
    shortDescription: 'Scalable microservices, robust REST & GraphQL APIs, AWS/GCP cloud architecture, and high-security databases.',
    heroDescription: 'We build secure, high-concurrency backend infrastructures, microservices, and event-driven architectures capable of processing millions of daily transactions with sub-100ms latency, 99.99% uptime, and military-grade encryption.',
    icon: Server,
    brandColor: '#34D399',
    badge: 'Microservices & Cloud',
    highlights: [
      'Sub-100ms High-Throughput RESTful & GraphQL Enterprise APIs',
      'Cloud Infrastructure on AWS, Google Cloud & Containerized Docker',
      'PostgreSQL, Redis Caching & High-Availability Database Clusters',
      'Row-Level Security, JWT/OAuth2, RBAC & SOC2 Compliance Ready',
      'Zero-Downtime Blue/Green CI/CD Deployment Pipelines',
      'Asynchronous Message Queues (BullMQ, Kafka, RabbitMQ)'
    ],
    credentials: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker', 'AWS Cloud', 'Redis'],
    solutionsDelivered: [
      {
        challenge: 'Database deadlocks and server crashes during sudden peak traffic spikes.',
        solution: 'Connection pooling, Redis distributed caching, and horizontal autoscaling on Kubernetes.',
        value: 'Handled 20x traffic spikes with 0% downtime.'
      },
      {
        challenge: 'Vulnerable endpoints and exposed API keys risking critical business data.',
        solution: 'Strict JWT authentication, HMAC request signing, rate limiting, and automated security penetration audits.',
        value: 'Zero security breaches and SOC2/HIPAA compliance ready.'
      },
      {
        challenge: 'Slow multi-table SQL queries causing multi-second delays for mobile clients.',
        solution: 'Database indexing, materialized query views, and denormalized read-replicas.',
        value: 'Reduced API response times from 3.2s to 42ms.'
      }
    ],
    capabilities: [
      {
        title: 'High-Concurrency REST & GraphQL APIs',
        description: 'Cleanly documented, versioned APIs with schema validation, rate limiting, and sub-100ms response targets.'
      },
      {
        title: 'Cloud Infrastructure & DevOps',
        description: 'Automated infrastructure provisioning on AWS/GCP with Docker containers, autoscaling groups, and VPC isolation.'
      },
      {
        title: 'High-Availability Database Engineering',
        description: 'PostgreSQL and MySQL database tuning, connection pooling, automated backups, and Redis distributed caching.'
      },
      {
        title: 'Event-Driven Architecture & Queues',
        description: 'Asynchronous task workers using Redis BullMQ, RabbitMQ, and Apache Kafka for non-blocking workload execution.'
      },
      {
        title: 'Enterprise Auth & Security Audits',
        description: 'OAuth2, OpenID Connect, SAML single sign-on (SSO), role-based permissions (RBAC), and encryption at rest and in transit.'
      },
      {
        title: 'Continuous Deployment & Monitoring',
        description: 'Zero-downtime blue/green deployments with GitHub Actions, Sentry crash tracking, and Prometheus/Grafana metrics.'
      }
    ],
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'API Response', value: '< 45ms' },
      { label: 'Throughput', value: '100K+ req/s' },
      { label: 'Security Standard', value: 'SOC2 / HIPAA' }
    ],
    techStack: [
      { name: 'Node.js / Express', role: 'Runtime API' },
      { name: 'Python / FastAPI', role: 'High-Speed Services' },
      { name: 'PostgreSQL', role: 'Primary Relational DB' },
      { name: 'Redis', role: 'Cache & Queue Engine' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'AWS / GCP', role: 'Cloud Infrastructure' }
    ],
    process: [
      { step: '01', name: 'Data Modeling & API Contracts', desc: 'Designing relational database schemas, indexes, and OpenAPI/Swagger specifications.' },
      { step: '02', name: 'Core Microservices Build', desc: 'Implementing business logic, authentication guards, and database transactions.' },
      { step: '03', name: 'Stress & Load Testing', desc: 'Running k6 load tests simulating 10,000+ concurrent requests and penetration audits.' },
      { step: '04', name: 'Production Cloud Launch', desc: 'Container orchestration, SSL certificate hardening, and 24/7 automated monitoring setup.' }
    ],
    faqs: [
      { q: 'Can you migrate our existing legacy database without downtime?', a: 'Yes! We use dual-write and replication migration strategies so your live production systems experience zero interruptions during the database switchover.' },
      { q: 'What cloud provider do you deploy to?', a: 'We architect for AWS (Amazon Web Services), Google Cloud Platform (GCP), DigitalOcean, or private bare-metal servers depending on your budget and regulatory requirements.' }
    ]
  },
  // ─────────────────────────────────────────────────────────────
  // 2. OTHER SPECIALIZED SERVICES
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'custom-web-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Custom Web Application Engineering',
    shortDescription: 'High-performance bespoke web applications, enterprise portals, and scalable cloud platforms.',
    heroDescription: 'We engineer custom, production-grade web applications built with modern frontend frameworks and scalable backend systems tailored for mission-critical operations and high transaction throughput.',
    icon: Globe,
    badge: 'Core Service',
    highlights: [
      'Single Page Apps (SPAs) & Server-Side Rendered (SSR) Platforms',
      'Complex SaaS Dashboards & Realtime Enterprise Portals',
      'Clean Modular Codebase with 100% Automated Test Coverage',
      'Sub-Second Page Load Speed (95+ Lighthouse Scores)'
    ],
    solutionsDelivered: [
      {
        challenge: 'Outdated legacy web applications failing to scale with modern user traffic.',
        solution: 'Modern React / Next.js architecture with edge rendering and Redis caching.',
        value: '3x faster load times and 40% increase in user retention.'
      }
    ],
    capabilities: [
      {
        title: 'Bespoke Frontend Engineering',
        description: 'Pixel-perfect, fluid web interfaces developed with React, Next.js, and Tailwind CSS for instant load times.'
      },
      {
        title: 'Scalable Microservices & APIs',
        description: 'Robust server-side logic using Node.js, Express, Go, and Python designed to process millions of transactions.'
      }
    ],
    techStack: [
      { name: 'React.js', role: 'Frontend UI' },
      { name: 'Next.js', role: 'Full-Stack SSR' },
      { name: 'TypeScript', role: 'Type Safety' },
      { name: 'Node.js', role: 'Runtime API' }
    ],
    process: [
      { step: '01', name: 'Architecture Mapping', desc: 'Defining data contracts and selecting optimal frameworks.' },
      { step: '02', name: 'UI/UX Specs', desc: 'Crafting responsive prototypes before writing production code.' },
      { step: '03', name: 'Agile Sprints', desc: 'Two-week sprint delivery with automated testing and continuous integration.' },
      { step: '04', name: 'Global Rollout', desc: 'Security scans, load testing, and CDN edge deployment.' }
    ],
    faqs: [
      { q: 'Will we own 100% of the code?', a: 'Yes, full intellectual property and code repositories are transferred upon delivery.' }
    ]
  },
  {
    slug: 'ecommerce-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'E-Commerce & Multi-Vendor Marketplaces',
    shortDescription: 'Headless Shopify, custom multi-vendor platforms, and high-conversion payment checkouts.',
    heroDescription: 'We build headless Shopify, WooCommerce, and custom multi-vendor commerce engines engineered for maximum conversion, rapid product filtering, and seamless payment processing.',
    icon: ShoppingCart,
    badge: 'Revenue Focused',
    highlights: [
      'Headless Shopify & Custom Next.js Storefronts',
      'Sub-Second Product Filtering & High-Converting Checkout',
      'Multi-Vendor Portals & Split Payment Gateways',
      'Omnichannel Inventory Sync (Amazon, TikTok Shop, Store)'
    ],
    solutionsDelivered: [
      {
        challenge: 'High cart abandonment due to slow mobile themes and multi-step checkouts.',
        solution: 'Headless Next.js storefronts with 1-click Express Pay checkouts.',
        value: '25% - 40% higher checkout conversion rates.'
      }
    ],
    capabilities: [
      {
        title: 'Headless Commerce Architecture',
        description: 'Decoupling frontend UI from the commerce backend to achieve sub-second page transitions.'
      }
    ],
    techStack: [
      { name: 'Shopify Plus', role: 'Commerce Core' },
      { name: 'Next.js', role: 'Headless Frontend' },
      { name: 'Stripe', role: 'Payments' }
    ],
    process: [
      { step: '01', name: 'Funnel Strategy', desc: 'Analyzing checkout behavior and catalog requirements.' },
      { step: '02', name: 'Storefront Build', desc: 'Developing lightning-fast product pages and payment flows.' }
    ],
    faqs: [
      { q: 'Can you migrate our products without downtime?', a: 'Yes, we execute zero-downtime migrations preserving order history and SEO URLs.' }
    ]
  },
  {
    slug: 'mobile-app-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'Mobile App Engineering (iOS & Android)',
    shortDescription: 'High-performance React Native, Flutter, Swift, and Kotlin mobile apps with offline-first synchronization.',
    heroDescription: 'We build fluid, 60fps mobile applications using React Native, Flutter, Swift, and Kotlin that deliver intuitive user experiences, hardware sensor integration, and reliable offline data sync.',
    icon: Smartphone,
    badge: 'iOS & Android',
    highlights: [
      'React Native & Flutter Unified Codebases',
      'Offline-First Data Sync & Background Push Notifications',
      'Biometric FaceID, Bluetooth & Camera Hardware Integration',
      '100% Guaranteed App Store & Google Play Approval'
    ],
    solutionsDelivered: [
      {
        challenge: 'High development costs of writing separate iOS and Android native apps.',
        solution: 'Unified cross-platform architecture sharing 90%+ code while retaining native 60fps performance.',
        value: '40% savings on development budget.'
      }
    ],
    capabilities: [
      {
        title: 'Native-Grade UI/UX Motion',
        description: 'Smooth 60fps animations, haptic feedback, and responsive layouts across all device sizes.'
      }
    ],
    techStack: [
      { name: 'React Native', role: 'Cross-Platform' },
      { name: 'Flutter', role: 'Mobile Framework' },
      { name: 'Swift / Kotlin', role: 'Native Modules' }
    ],
    process: [
      { step: '01', name: 'UX Mapping', desc: 'Designing thumb-friendly navigation and gesture patterns.' },
      { step: '02', name: 'Testing & Launch', desc: 'Deploying TestFlight betas and publishing to App Stores.' }
    ],
    faqs: [
      { q: 'Will the app feel native?', a: 'Yes, modern cross-platform frameworks compile to native arm64 code with zero lag.' }
    ]
  },
  {
    slug: 'saas-enterprise-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'SaaS & Multi-Tenant Systems',
    shortDescription: 'Multi-tenant cloud platforms, automated Stripe subscriptions, and granular role-based permissions.',
    heroDescription: 'We architect battle-tested SaaS systems with row-level tenant data isolation, automated usage-based subscriptions, audit logs, and 99.99% uptime ready for global enterprise scale.',
    icon: Layers,
    badge: 'Multi-Tenant',
    highlights: [
      'Tenant Data Segregation (Row Level Security)',
      'Automated Usage-Based & Tiered Stripe Subscriptions',
      'Granular Role-Based Access Control (RBAC) & SAML/SSO',
      'High-Concurrency Cloud Architecture'
    ],
    solutionsDelivered: [
      {
        challenge: 'Accidental tenant data crossover risking client trust and compliance fines.',
        solution: 'PostgreSQL Row Level Security (RLS) and schema-isolated multi-tenant data pipelines.',
        value: '100% cryptographic tenant segregation.'
      }
    ],
    capabilities: [
      {
        title: 'Multi-Tenant Core Engine',
        description: 'Tenant provisioning, custom domain mapping, and isolated role permissions.'
      }
    ],
    techStack: [
      { name: 'Next.js 15', role: 'SaaS Web App' },
      { name: 'PostgreSQL (RLS)', role: 'Database' },
      { name: 'Stripe Billing', role: 'Subscriptions' }
    ],
    process: [
      { step: '01', name: 'Tenancy Design', desc: 'Defining isolation boundaries and subscription tiers.' },
      { step: '02', name: 'MVP Rollout', desc: 'Rapid delivery of core value proposition with automated testing.' }
    ],
    faqs: [
      { q: 'Can you build a SaaS MVP in 6-8 weeks?', a: 'Yes, using our modular blueprints we deliver full production MVPs in 6 to 8 weeks.' }
    ]
  },
  {
    slug: 'api-backend-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Development',
    title: 'API & Cloud Backend Architecture',
    shortDescription: 'Sub-50ms RESTful & GraphQL APIs, microservices, and asynchronous event-driven worker queues.',
    heroDescription: 'We build bulletproof API infrastructures, event message queues, and cloud microservices that scale smoothly during peak traffic without performance degradation.',
    icon: Server,
    badge: 'High Throughput',
    highlights: [
      'RESTful & GraphQL API Engineering',
      'Event-Driven Microservices (Kafka / RabbitMQ / BullMQ)',
      'Database Optimization & Connection Pooling',
      'OAuth2, JWT & API Key Security Layers'
    ],
    solutionsDelivered: [
      {
        challenge: 'Slow database queries blocking server threads and causing timeouts.',
        solution: 'Asynchronous worker queues offloading heavy operations with sub-50ms API responses.',
        value: '90% faster API performance.'
      }
    ],
    capabilities: [
      {
        title: 'High-Speed API Gateways',
        description: 'Engineered for sub-50ms response times with automated rate limiting and token validation.'
      }
    ],
    techStack: [
      { name: 'Node.js', role: 'API Server' },
      { name: 'Go (Golang)', role: 'High-Speed Services' },
      { name: 'Redis', role: 'Cache & Queue' }
    ],
    process: [
      { step: '01', name: 'API Schema Specs', desc: 'Writing OpenAPI and GraphQL contracts.' },
      { step: '02', name: 'Load Benchmarking', desc: 'Stress testing against thousands of concurrent requests.' }
    ],
    faqs: [
      { q: 'Can you migrate legacy backends to microservices?', a: 'Yes, we use Strangler Fig patterns for zero-downtime migrations.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ADVANCED AI & CLOUD TECH
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'ai-solutions',
    categoryId: 'advanced-technology',
    categoryName: 'Advanced AI & Cloud Tech',
    title: 'Enterprise AI & Generative AI Solutions',
    shortDescription: 'Custom LLMs, private Retrieval-Augmented Generation (RAG) pipelines, and autonomous business AI agents.',
    heroDescription: 'We engineer private, enterprise-grade Generative AI pipelines, Retrieval-Augmented Generation (RAG) systems, and autonomous multi-agent workflows that automate complex operations with zero data leakage.',
    icon: Bot,
    badge: 'Next Gen AI',
    highlights: [
      'Private RAG Connected to Internal Company Documents',
      'Autonomous Multi-Agent Systems for Multi-Step Automation',
      'Intelligent Voice & Chat AI Trained on Domain Data',
      'Zero-Data-Retention & SOC2 Enterprise Privacy'
    ],
    solutionsDelivered: [
      {
        challenge: 'Staff spending hours manually searching PDFs and answering repetitive client queries.',
        solution: 'Custom RAG conversational agent connected to proprietary docs for instant, accurate answers.',
        value: '80% reduction in support response times.'
      }
    ],
    capabilities: [
      {
        title: 'Enterprise RAG Knowledge Engines',
        description: 'Connecting internal documentation with vector embeddings for hallucination-free search.'
      }
    ],
    techStack: [
      { name: 'OpenAI GPT-4o', role: 'LLM Reasoning' },
      { name: 'Google Gemini', role: 'Multimodal AI' },
      { name: 'LangChain & Pinecone', role: 'RAG & Vector DB' }
    ],
    process: [
      { step: '01', name: 'Data Readiness', desc: 'Auditing document formats and setting up vector chunking.' },
      { step: '02', name: 'Production Agent Embed', desc: 'Integrating secured AI endpoints into existing software.' }
    ],
    faqs: [
      { q: 'Is our data secure?', a: 'Yes, we enforce zero-data-retention APIs and private vector storage.' }
    ]
  },
  {
    slug: 'cloud-devops',
    categoryId: 'advanced-technology',
    categoryName: 'Advanced AI & Cloud Tech',
    title: 'Cloud Architecture & DevOps Engineering',
    shortDescription: 'Automated CI/CD pipelines, Kubernetes container clusters, and 30-50% cloud cost reduction on AWS/GCP.',
    heroDescription: 'We build automated Infrastructure-as-Code (Terraform), auto-scaling Kubernetes clusters, and continuous CI/CD pipelines on AWS and Google Cloud that ensure 99.99% uptime and lower monthly infrastructure bills.',
    icon: Cloud,
    badge: '99.99% Uptime',
    highlights: [
      'Infrastructure as Code (Terraform) & Zero Configuration Drift',
      'Automated Blue/Green CI/CD Pipelines (GitHub Actions)',
      'Docker & Kubernetes (EKS/GKE) Container Orchestration',
      'Cloud Cost Optimization (30% to 50% Monthly Savings)'
    ],
    solutionsDelivered: [
      {
        challenge: 'High monthly AWS/GCP bills from unoptimized instances and idle storage.',
        solution: 'Cloud architecture rightsizing, spot instances, and serverless auto-scaling.',
        value: '35% to 50% lower monthly cloud bills.'
      }
    ],
    capabilities: [
      {
        title: 'Infrastructure as Code',
        description: 'Declarative cloud provisioning using Terraform.'
      }
    ],
    techStack: [
      { name: 'AWS & GCP', role: 'Cloud Infrastructure' },
      { name: 'Docker & Kubernetes', role: 'Containers' },
      { name: 'Terraform', role: 'IaC' }
    ],
    process: [
      { step: '01', name: 'Infrastructure Audit', desc: 'Identifying bottlenecks and cost waste.' },
      { step: '02', name: 'CI/CD Automation', desc: 'Setting up automated testing and blue/green deployments.' }
    ],
    faqs: [
      { q: 'Can you migrate our servers without downtime?', a: 'Yes, we execute DNS traffic switching with zero customer disruption.' }
    ]
  },
  {
    slug: 'cybersecurity',
    categoryId: 'advanced-technology',
    categoryName: 'Advanced AI & Cloud Tech',
    title: 'Cybersecurity, Pen Testing & Code Audits',
    shortDescription: 'Offensive penetration testing, source code security audits, and SOC2/HIPAA compliance roadmaps.',
    heroDescription: 'We conduct exhaustive penetration testing, automated vulnerability assessments, and code hardening to safeguard your digital assets and customer data before attackers can exploit them.',
    icon: ShieldCheck,
    badge: 'Zero Trust',
    highlights: [
      'Web & Mobile Application Penetration Testing',
      'Source Code Security Auditing & CVE Remediation',
      'Zero-Trust Access Architecture & AES-256 Encryption',
      'SOC2, HIPAA & GDPR Security Compliance Verification'
    ],
    solutionsDelivered: [
      {
        challenge: 'Hidden security vulnerabilities leaving customer databases exposed to hackers.',
        solution: 'Offensive ethical penetration testing and automated security hardening.',
        value: '100% elimination of critical and high-severity security flaws.'
      }
    ],
    capabilities: [
      {
        title: 'Offensive Penetration Testing',
        description: 'Simulating real-world attacks to identify business logic and auth vulnerabilities.'
      }
    ],
    techStack: [
      { name: 'Burp Suite Pro', role: 'Pen Testing' },
      { name: 'OWASP ZAP', role: 'Vulnerability Scanner' },
      { name: 'SonarQube', role: 'Code Quality' }
    ],
    process: [
      { step: '01', name: 'Threat Mapping', desc: 'Scanning public endpoints and authentication barriers.' },
      { step: '02', name: 'Patching & Certificate', desc: 'Providing code patches and issuing Clean Security Certificate.' }
    ],
    faqs: [
      { q: 'Do you provide formal audit reports for enterprise clients?', a: 'Yes, we provide executive and technical audit reports ready for compliance reviews.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3. UI/UX DESIGN & BRANDING
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'ui-ux-design-service',
    categoryId: 'design-creative',
    categoryName: 'UI/UX & Product Design',
    title: 'UI/UX Design & Usability Engineering',
    shortDescription: 'Conversion-driven Figma design systems, interactive prototypes, and frictionless user flows.',
    heroDescription: 'We design intuitive, visually striking user interfaces in Figma backed by cognitive user research and atomic design systems that turn complex workflows into effortless digital experiences.',
    icon: Layout,
    badge: 'Design Excellence',
    highlights: [
      'Complete Figma Design Systems & Token Libraries',
      'Interactive High-Fidelity Prototypes & Usability Testing',
      'User Journey Mapping & Information Architecture',
      'Developer-Ready Auto-Layout & CSS Token Handoff'
    ],
    solutionsDelivered: [
      {
        challenge: 'Users abandoning software during onboarding due to complex clunky interfaces.',
        solution: 'Frictionless onboarding flows and progressive disclosure design.',
        value: '3x increase in user onboarding completion rates.'
      }
    ],
    capabilities: [
      {
        title: 'Design Systems & Variable Tokens',
        description: 'Scalable component libraries built with Figma auto-layout and dark/light mode tokens.'
      }
    ],
    techStack: [
      { name: 'Figma', role: 'UI/UX Platform' },
      { name: 'Framer', role: 'Prototypes' },
      { name: 'Lottie', role: 'Motion Specs' }
    ],
    process: [
      { step: '01', name: 'UX Research', desc: 'Mapping user personas and wireframing layouts.' },
      { step: '02', name: 'Visual Polish & Handoff', desc: 'Delivering tokens and responsive components.' }
    ],
    faqs: [
      { q: 'Do you design in Figma?', a: 'Yes, 100% of our UI/UX work is created using standard Figma auto-layout and tokens.' }
    ]
  },
  {
    slug: 'brand-identity',
    categoryId: 'design-creative',
    categoryName: 'UI/UX & Product Design',
    title: 'Brand Identity & Visual Design Systems',
    shortDescription: 'Vector logomarks, typography rules, 3D visual assets, and corporate brand books.',
    heroDescription: 'We develop authoritative visual identities, vector logomarks, typography guidelines, and 3D visual storytelling that establish instant market credibility and brand recognition.',
    icon: Palette,
    badge: 'Brand Strategy',
    highlights: [
      'Custom Vector Logomark & Iconography Suites',
      'Complete Brand Guidelines Book & Color Palette',
      '3D Visual Renders & Marketing Asset Kits',
      'Vector Master Files (SVG, AI, EPS, PDF)'
    ],
    solutionsDelivered: [
      {
        challenge: 'Inconsistent branding across website, pitch decks, and social media.',
        solution: 'Comprehensive Brand Book PDF detailing exact hex scales, typography, and spacing.',
        value: '100% visual consistency across all touchpoints.'
      }
    ],
    capabilities: [
      {
        title: 'Distinctive Logomark Design',
        description: 'Timeless vector logos designed for clarity from favicons to large displays.'
      }
    ],
    techStack: [
      { name: 'Adobe Illustrator', role: 'Vector Design' },
      { name: 'Adobe Photoshop', role: 'Image Manipulation' },
      { name: 'Blender', role: '3D Graphics' }
    ],
    process: [
      { step: '01', name: 'Brand Positioning', desc: 'Defining brand values and aesthetic direction.' },
      { step: '02', name: 'Asset Delivery', desc: 'Exporting vector master files with brand guidelines.' }
    ],
    faqs: [
      { q: 'What vector formats are included?', a: 'You receive AI, EPS, SVG, PDF, and high-res PNG/JPEG files with full copyright ownership.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4. DIGITAL MARKETING & GROWTH (SEO, GOOGLE ADS, LINKEDIN)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'seo-growth',
    categoryId: 'digital-growth',
    categoryName: 'Digital Marketing & Growth',
    title: 'Data-Driven Search Engine Optimization (SEO)',
    shortDescription: 'Technical SEO audits, high-intent keyword ranking, Core Web Vitals optimization, and authority backlink acquisition.',
    heroDescription: 'We combine deep technical SEO audits, schema structured data, high-intent commercial keyword rankings, and high-authority link outreach to turn Google search into your primary customer acquisition channel.',
    icon: Search,
    badge: 'Organic Scale',
    highlights: [
      'Technical SEO Audits & Crawl Error Remediation',
      'High-Intent Commercial & Transactional Keyword Strategy',
      'Schema.org Structured Data & Rich Snippet Domination',
      'High-Authority Digital PR & Backlink Acquisition'
    ],
    solutionsDelivered: [
      {
        challenge: 'Zero organic Google traffic forcing business to overspend on paid ads.',
        solution: 'Targeted content clustering around high-intent transactional search queries.',
        value: '400%+ increase in qualified organic search traffic.'
      }
    ],
    capabilities: [
      {
        title: 'Technical SEO & Core Web Vitals',
        description: 'Fixing indexation errors, sitemap hierarchies, canonicals, and page load speeds.'
      },
      {
        title: 'On-Page Content Strategy',
        description: 'Keyword-optimized landing pages and educational content matching commercial buyer intent.'
      }
    ],
    techStack: [
      { name: 'Google Search Console', role: 'Search Analytics' },
      { name: 'Ahrefs', role: 'Keyword & Backlinks' },
      { name: 'SEMrush', role: 'Competitive Intelligence' }
    ],
    process: [
      { step: '01', name: 'Technical Audit', desc: 'Scanning site health and indexing bottlenecks.' },
      { step: '02', name: 'On-Page & Schema Fixes', desc: 'Implementing structured data and speed improvements.' },
      { step: '03', name: 'Authority Push', desc: 'Publishing optimized content clusters and securing backlinks.' }
    ],
    faqs: [
      { q: 'How long before we see SEO results?', a: 'Technical indexing improves within weeks, with substantial ranking growth compounding within 3 to 6 months.' }
    ]
  },
  {
    slug: 'google-ads-ppc',
    categoryId: 'digital-growth',
    categoryName: 'Digital Marketing & Growth',
    title: 'Google Ads & PPC Campaign Management',
    shortDescription: 'High-intent Google Search ads, Performance Max funnels, YouTube ads, and conversion tracking.',
    heroDescription: 'Capture buyers at the exact moment they search for your services. We architect, launch, and optimize high-converting Google Search, Shopping, and Performance Max ad campaigns that maximize return on ad spend (ROAS) and lower cost per acquisition (CPA).',
    icon: Target,
    badge: 'High Conversion PPC',
    highlights: [
      'Google Search & High-Intent Keyword Bidding',
      'Performance Max (PMax) AI-Driven Multi-Channel Campaigns',
      'Negative Keyword Filtering & Fraud Click Protection',
      'Server-Side Conversion Tracking & Offline Event Sync'
    ],
    solutionsDelivered: [
      {
        challenge: 'Burning advertising budget on irrelevant search terms that generate zero customer inquiries.',
        solution: 'Strict phrase/exact match keyword targeting and daily negative keyword pruning.',
        value: '45% reduction in wasted ad spend and higher lead quality.'
      },
      {
        challenge: 'Low Quality Score causing high cost-per-click (CPC) bids.',
        solution: 'Alignment between ad copy, search keywords, and dedicated high-converting landing pages.',
        value: 'Higher Google Quality Score and lower click costs.'
      }
    ],
    capabilities: [
      {
        title: 'Search & Performance Max Campaigns',
        description: 'Structuring campaigns to dominate top search results for high-value commercial queries.'
      },
      {
        title: 'Dedicated Landing Page Optimization',
        description: 'Creating high-converting, lightning-fast landing pages tailored specifically for each ad group.'
      }
    ],
    techStack: [
      { name: 'Google Ads Manager', role: 'PPC Platform' },
      { name: 'Google Tag Manager', role: 'Tag Management' },
      { name: 'Google Analytics 4 (GA4)', role: 'Attribution' }
    ],
    process: [
      { step: '01', name: 'Keyword & Competitor Research', desc: 'Identifying high-intent buyer keywords and competitor bid strategies.' },
      { step: '02', name: 'Campaign & Landing Page Setup', desc: 'Writing compelling ad copy and creating high-converting landing pages.' },
      { step: '03', name: 'Continuous Bid & Budget Optimization', desc: 'Scaling winning search queries and pruning underperforming terms daily.' }
    ],
    faqs: [
      { q: 'How quickly can Google Ads generate leads?', a: 'Google Ads can start driving qualified targeted traffic and inquiries within 24 to 48 hours of campaign launch.' }
    ]
  },
  {
    slug: 'linkedin-optimization-growth',
    categoryId: 'digital-growth',
    categoryName: 'Digital Marketing & Growth',
    title: 'LinkedIn Optimization & B2B Lead Generation',
    shortDescription: 'Executive profile branding, company page authority, B2B sponsored content, and targeted InMail lead pipelines.',
    heroDescription: 'For B2B software, corporate services, and enterprise agencies, LinkedIn is the #1 lead source. We optimize executive and corporate LinkedIn profiles, craft authoritative thought leadership content, and run precision B2B ad funnels that book meetings with decision-makers.',
    icon: FaLinkedin,
    badge: 'B2B Authority',
    highlights: [
      'Executive Profile & Corporate Page Authority Branding',
      'Targeted B2B Decision-Maker Advertising (CEOs, CTOs, Founders)',
      'Thought Leadership Content Strategy & Engagement Funnels',
      'Direct InMail Outreach Pipelines & Lead Magnet Distribution'
    ],
    solutionsDelivered: [
      {
        challenge: 'Generic, unoptimized LinkedIn profile failing to build trust with prospective high-ticket enterprise clients.',
        solution: 'Complete visual and copywriting overhaul: custom banner, compelling headline, social proof, and portfolio showcase.',
        value: 'Instant executive authority and 3x more inbound connection acceptances.'
      },
      {
        challenge: 'Struggling to reach verified decision-makers (CEOs, VPs, Directors) through standard social media.',
        solution: 'Hyper-targeted LinkedIn Matched Audiences targeting specific company sizes, job titles, and industries.',
        value: 'Direct access to high-budget enterprise decision-makers.'
      }
    ],
    capabilities: [
      {
        title: 'Executive & Company Page Branding',
        description: 'Crafting high-impact banners, positioning headlines, featured media sections, and authoritative company descriptions.'
      },
      {
        title: 'B2B Sponsored Content & Lead Gen Forms',
        description: 'Running native LinkedIn lead gen forms that auto-fill contact info for frictionless enterprise inquiries.'
      }
    ],
    techStack: [
      { name: 'LinkedIn Campaign Manager', role: 'B2B Ads' },
      { name: 'LinkedIn Sales Navigator', role: 'Lead Prospecting' },
      { name: 'LinkedIn Insight Tag', role: 'B2B Retargeting' }
    ],
    process: [
      { step: '01', name: 'Profile & Brand Positioning Audit', desc: 'Refining executive bio, company positioning, and target persona definitions.' },
      { step: '02', name: 'Content & Campaign Setup', desc: 'Crafting thought leadership content, ad creatives, and native lead forms.' },
      { step: '03', name: 'Lead Pipeline Execution', desc: 'Routing qualified B2B inquiries directly into your CRM for sales follow-up.' }
    ],
    faqs: [
      { q: 'Is LinkedIn effective for software and tech companies?', a: 'Yes! LinkedIn is the most effective platform for B2B tech companies to connect directly with CTOs, CEOs, and enterprise buyers.' }
    ]
  },
  {
    slug: 'performance-marketing',
    categoryId: 'digital-growth',
    categoryName: 'Digital Marketing & Growth',
    title: 'Performance Marketing & Social Ad Funnels',
    shortDescription: 'Data-driven Meta (Facebook & Instagram), TikTok, and YouTube ad campaigns with server-side tracking (CAPI) and high ROAS.',
    heroDescription: 'We design, launch, and continuously optimize paid campaigns across Meta, TikTok, and YouTube with server-side tracking (CAPI) to deliver maximum return on ad spend and lower customer acquisition costs.',
    icon: Megaphone,
    badge: 'High ROAS',
    highlights: [
      'Meta (Facebook & Instagram) Targeted Funnels',
      'Server-Side Conversion API (CAPI) & Tracking',
      'Short-Form Video Ad Creatives & Persuasive Copywriting',
      'A/B Tested High-Converting Landing Page Optimization'
    ],
    solutionsDelivered: [
      {
        challenge: 'Wasting ad budget on low-quality clicks that generate zero sales.',
        solution: 'Hyper-targeted audience segmentation, retargeting pools, and dedicated conversion landing pages.',
        value: '40% lower cost per acquisition (CPA).'
      }
    ],
    capabilities: [
      {
        title: 'Full-Funnel Social Advertising',
        description: 'Audience targeting, ad copywriting, creative design, and retargeting funnels.'
      }
    ],
    techStack: [
      { name: 'Meta Ads Manager', role: 'Social Ads' },
      { name: 'Meta CAPI', role: 'Server Tracking' },
      { name: 'Google Tag Manager', role: 'Attribution' }
    ],
    process: [
      { step: '01', name: 'Tracking Setup', desc: 'Configuring server-side pixels and conversion tracking.' },
      { step: '02', name: 'Scaling Phase', desc: 'Scaling budget on winning ad creatives.' }
    ],
    faqs: [
      { q: 'What platforms do you advertise on?', a: 'We manage campaigns across Meta (Instagram/Facebook), TikTok, and YouTube.' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return allServices.find(service => service.slug === slug);
}

export function getServicesByCategory(categoryId) {
  return allServices.filter(service => service.categoryId === categoryId);
}
