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
import { FaLinkedin } from 'react-icons/fa6';

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

export const allServices = [
  // ─────────────────────────────────────────────────────────────
  // 1. WEB & SOFTWARE DEVELOPMENT
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
