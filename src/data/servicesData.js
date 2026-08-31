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
  Home,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';

export const serviceCategories = [
  {
    id: 'enterprise-systems',
    title: 'Enterprise & Business Systems',
    icon: Building2,
    description: 'Custom ERPs, CRMs, Point of Sale (POS), Healthcare HMS, Fintech, and LMS systems built to automate entire business operations.',
  },
  {
    id: 'web-development',
    title: 'Web & Software Engineering',
    icon: Code,
    description: 'Bespoke web applications, SaaS multi-tenant platforms, high-throughput microservices, and cross-platform mobile apps.',
  },
  {
    id: 'advanced-technology',
    title: 'Advanced AI & Cloud Tech',
    icon: Cpu,
    description: 'Enterprise AI agents, private RAG pipelines, AWS/GCP cloud infrastructure, cybersecurity audits, and high-concurrency databases.',
  },
  {
    id: 'design-growth',
    title: 'UI/UX Design & Digital Growth',
    icon: PenTool,
    description: 'Conversion-driven Figma design systems, premium brand books, technical SEO ranking, and high-ROAS marketing funnels.',
  }
];

export const enterpriseSpecialties = [
  {
    icon: Building2,
    title: 'Enterprise ERP Systems',
    desc: 'All-in-one supply chain, inventory, accounting, and multi-branch resource management.',
    slug: 'enterprise-erp-systems'
  },
  {
    icon: Users,
    title: 'Custom CRM Platforms',
    desc: 'Lead pipelines, automated follow-ups, WhatsApp/Email sync, and customer lifetime value tracking.',
    slug: 'custom-crm-systems'
  },
  {
    icon: Store,
    title: 'Point of Sale (POS) Systems',
    desc: 'High-speed retail billing, thermal printing, barcode scanning, and multi-store inventory.',
    slug: 'pos-retail-systems'
  },
  {
    icon: Stethoscope,
    title: 'Hospital & Healthcare (HMS)',
    desc: 'Patient EHR, doctor scheduling, pharmacy inventory, and lab reporting portals.',
    slug: 'hospital-healthcare-systems'
  },
  {
    icon: GraduationCap,
    title: 'LMS & Education Portals',
    desc: 'Live classrooms, video streaming, automated grading, and student certification.',
    slug: 'lms-education-portals'
  },
  {
    icon: Wallet,
    title: 'Fintech & Payment Engines',
    desc: 'Digital wallets, micro-lending platforms, multi-currency ledger, and PCI-DSS checkouts.',
    slug: 'fintech-payment-solutions'
  }
];

export const allServices = [
  // ─────────────────────────────────────────────────────────────
  // 1. ENTERPRISE & BUSINESS SYSTEMS (ERP, CRM, POS, HMS, LMS, FINTECH)
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'enterprise-erp-systems',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'Enterprise ERP Systems',
    shortDescription: 'Custom Enterprise Resource Planning systems integrating inventory, supply chain, HR, finance, and multi-warehouse operations.',
    heroDescription: 'Off-the-shelf ERPs are rigid, expensive, and force your company to change how it works. We engineer bespoke Enterprise ERP software tailored exactly to your workflow—connecting procurement, warehouse management, automated accounting, payroll, and real-time executive analytics in one unified dashboard.',
    icon: Building2,
    badge: 'Enterprise Core',
    highlights: [
      'Multi-Branch & Multi-Warehouse Live Inventory Sync',
      'Double-Entry Accounting, Invoicing & Tax Automation',
      'Procurement, Vendor Portals & Supply Chain Tracking',
      'HR Management, Attendance Biometrics & Payroll Processing'
    ],
    solutionsDelivered: [
      {
        challenge: 'Disconnected spreadsheets and disparate software causing data silos and costly inventory stockouts.',
        solution: 'Unified centralized database linking purchase orders directly to inventory, sales channels, and general ledger.',
        value: '100% real-time stock visibility and 40% reduction in operational waste.'
      },
      {
        challenge: 'Multi-branch operations lacking consolidated financial reports and audit trails.',
        solution: 'Role-based accounting module with automatic currency conversion, tax reporting, and branch P&L balance sheets.',
        value: 'Instant 1-click executive financial summaries and total audit compliance.'
      },
      {
        challenge: 'Slow, manual HR payroll calculation and attendance reconciliation.',
        solution: 'Automated biometrics integration with custom overtime rules, leave management, and bank transfer exports.',
        value: '90% faster monthly payroll processing with zero calculation errors.'
      }
    ],
    capabilities: [
      {
        title: 'Supply Chain & Inventory Management',
        description: 'Batch tracking, barcode scanning, minimum stock alerts, and automated vendor purchase order triggers.'
      },
      {
        title: 'Financial Accounting & Invoicing',
        description: 'Automated double-entry bookkeeping, accounts payable/receivable, bank reconciliation, and custom tax rules.'
      },
      {
        title: 'HR & Payroll Automation',
        description: 'Employee lifecycle management, biometric device syncing, tax deductions, and automated payslip generation.'
      },
      {
        title: 'Executive BI Dashboard',
        description: 'Real-time KPI visualization, forecasting charts, exportable PDF/Excel reports, and mobile executive view.'
      }
    ],
    techStack: [
      { name: 'React / Next.js', role: 'Enterprise UI' },
      { name: 'Node.js / Express', role: 'Core Logic Engine' },
      { name: 'PostgreSQL', role: 'ACID Relational DB' },
      { name: 'Redis', role: 'Real-Time Caching' },
      { name: 'Docker', role: 'Private Deployment' },
      { name: 'Tailwind CSS', role: 'Design System' }
    ],
    process: [
      { step: '01', name: 'Operational Workflow Audit', desc: 'Mapping departmental processes, chart of accounts, and data dependencies.' },
      { step: '02', name: 'Custom Module Prototyping', desc: 'Designing custom UI screens for procurement, inventory, and finance teams.' },
      { step: '03', name: 'Core Engine & Data Migration', desc: 'Developing business logic and securely migrating historical data from legacy systems.' },
      { step: '04', name: 'Staff Training & On-Premise Rollout', desc: 'Conducting department-wide training sessions and launching on private cloud or on-premise servers.' }
    ],
    faqs: [
      { q: 'Can this ERP be deployed on our private on-premise servers?', a: 'Yes. We support deployment on your private local servers, AWS, Google Cloud, or hybrid setups with automated local backups.' },
      { q: 'Can we add custom modules later as our company expands?', a: 'Absolutely. Our modular architecture allows adding new departments, branches, or features without disturbing existing operations.' }
    ]
  },
  {
    slug: 'custom-crm-systems',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'Custom CRM Platforms',
    shortDescription: 'Tailored Customer Relationship Management systems with visual deal pipelines, WhatsApp/Email sync, and automated lead routing.',
    heroDescription: 'Generic CRMs like Salesforce and HubSpot are bloated with features you don’t need while missing the exact sales workflows your team relies on. We build high-converting, custom CRM software that automates lead capture, tracks deals, logs customer calls, and boosts sales team closing rates.',
    icon: Users,
    badge: 'Sales Acceleration',
    highlights: [
      'Visual Drag-and-Drop Deal Pipelines & Kanban Stages',
      'Automated Lead Assignment & Instant WhatsApp/SMS/Email Alerts',
      'Omnichannel Chat (WhatsApp, Instagram, Web Chat in One Inbox)',
      'Sales Rep Activity Tracking, Call Logs & Commission Calculation'
    ],
    solutionsDelivered: [
      {
        challenge: 'Leads falling through the cracks because sales reps manage inquiries across scattered WhatsApp chats and notebooks.',
        solution: 'Unified lead capture inbox aggregating website forms, Meta ads, WhatsApp, and calls with automated routing.',
        impact: '3x faster lead response time and zero missed inquiries.'
      },
      {
        challenge: 'Lack of visibility into sales representative activities, daily calls, and conversion performance.',
        solution: 'Automated rep activity telemetry, logged call durations, deal stage velocity, and real-time leaderboards.',
        impact: '35% increase in sales team productivity and measurable accountability.'
      },
      {
        challenge: 'Paying thousands in monthly recurring per-user license fees to third-party CRM SaaS.',
        solution: 'Custom owned CRM platform with unlimited user accounts and zero recurring seat fees.',
        impact: '100% software ownership and massive annual software cost savings.'
      }
    ],
    capabilities: [
      {
        title: 'Omnichannel Lead Capture',
        description: 'Auto-ingest leads from Google Ads, Facebook/Instagram leads, WhatsApp Business API, and website forms.'
      },
      {
        title: 'Visual Deal Pipeline & Stage Automation',
        description: 'Custom deal stages with automatic task creation, automated follow-up emails, and contract generation.'
      },
      {
        title: 'Integrated WhatsApp & Telephony',
        description: 'Direct click-to-call, recorded audio call logs, and two-way WhatsApp messaging inside the customer contact card.'
      },
      {
        title: 'Customer Lifetime Value & Analytics',
        description: 'Comprehensive reporting on customer acquisition cost (CAC), pipeline value, and rep closing ratios.'
      }
    ],
    techStack: [
      { name: 'React.js', role: 'Pipeline Interface' },
      { name: 'Node.js', role: 'Real-Time Sync' },
      { name: 'PostgreSQL', role: 'Contact & Deal DB' },
      { name: 'WhatsApp Cloud API', role: 'Messaging Integration' },
      { name: 'Twilio / VoIP', role: 'Telephony Logging' }
    ],
    process: [
      { step: '01', name: 'Sales Funnel Mapping', desc: 'Analyzing lead sources, qualification stages, and team assignment rules.' },
      { step: '02', name: 'Pipeline & Interface Design', desc: 'Creating intuitive Kanban boards, customer profiles, and quick action bars.' },
      { step: '03', name: 'Integrations & Automation', desc: 'Wiring WhatsApp Cloud API, email marketing webhooks, and ad account pixels.' },
      { step: '04', name: 'Team Onboarding & Go-Live', desc: 'Importing historical customer lists and conducting hands-on sales team training.' }
    ],
    faqs: [
      { q: 'Is there a limit on how many sales reps can use the CRM?', a: 'No! Because you own the software, you can create unlimited sales agent and manager accounts with zero monthly subscription fees.' }
    ]
  },
  {
    slug: 'pos-retail-systems',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'Point of Sale (POS) & Retail Systems',
    shortDescription: 'High-speed desktop, web, and tablet POS software with barcode scanning, thermal receipt printing, and offline checkout.',
    heroDescription: 'Retail and restaurant checkouts require split-second transaction speed and rock-solid reliability. We build custom Point of Sale (POS) systems featuring sub-second barcode lookups, thermal printer and cash drawer integration, multi-branch inventory tracking, and offline billing mode.',
    icon: Store,
    badge: 'High Speed Retail',
    highlights: [
      'Sub-Second Barcode Scanning & Express Touch Billing',
      'Offline Billing Engine (Keeps Working When Internet Drops)',
      'Thermal Receipt Printing & Cash Drawer Peripheral Support',
      'Multi-Store Inventory, Transfers & End-of-Day Cash Balancing'
    ],
    solutionsDelivered: [
      {
        challenge: 'Long customer checkout queues and billing delays during peak store rush hours.',
        solution: 'Keyboard-shortcut-driven touchscreen POS interface processing transactions in under 5 seconds.',
        impact: '50% reduction in customer wait times and faster table/counter turnover.'
      },
      {
        challenge: 'Internet outages completely freezing store billing and stopping sales.',
        solution: 'Offline-first local SQLite engine caching all transactions and automatically syncing when reconnected.',
        impact: '100% continuous store operation with zero downtime.'
      },
      {
        challenge: 'Cash register discrepancies and shrinkage between shifts.',
        solution: 'Blind cash drop closing, shift register balancing, and manager PIN override audit logs.',
        impact: 'Zero unaccounted cash variance and complete shift transparency.'
      }
    ],
    capabilities: [
      {
        title: 'Hardware Peripheral Compatibility',
        description: 'Plug-and-play support for ESC/POS thermal printers, USB/Bluetooth barcode scanners, weighing scales, and card terminals.'
      },
      {
        title: 'Multi-Store Central Cloud Sync',
        description: 'Head office dashboard showing real-time sales across all branches, low-stock warnings, and inter-branch transfers.'
      },
      {
        title: 'Customer Loyalty & Discounts',
        description: 'Points redemption, phone-number loyalty lookup, dynamic promotional coupons, and seasonal discounts.'
      },
      {
        title: 'Restaurant & Table Management (Optional)',
        description: 'Table layout mapping, Kitchen Order Tickets (KOT) printing to kitchen, and bill splitting.'
      }
    ],
    techStack: [
      { name: 'Electron / React', role: 'Desktop / Web POS' },
      { name: 'Node.js', role: 'Local Hardware Bridge' },
      { name: 'SQLite / IndexedDB', role: 'Offline Storage' },
      { name: 'PostgreSQL', role: 'Cloud Head Office DB' },
      { name: 'WebSockets', role: 'Real-Time Sync' }
    ],
    process: [
      { step: '01', name: 'Hardware & Workflow Specs', desc: 'Identifying printer models, barcode standards, and store checkout flows.' },
      { step: '02', name: 'Touch & Shortcut UI Design', desc: 'Optimizing touch targets, product category grids, and rapid numpad actions.' },
      { step: '03', name: 'Hardware Bridge & Sync Build', desc: 'Writing printer drivers, barcode listeners, and offline data sync protocols.' },
      { step: '04', name: 'Store Deployment & Testing', desc: 'Deploying to store POS machines, conducting cashier dry runs, and live rollout.' }
    ],
    faqs: [
      { q: 'Will this POS work with existing thermal printers and barcode scanners?', a: 'Yes! We support standard USB, Ethernet, and Bluetooth thermal printers (Epson, Xprinter, Star Micronics) and standard 1D/2D barcode scanners.' }
    ]
  },
  {
    slug: 'hospital-healthcare-systems',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'Hospital & Healthcare Management (HMS)',
    shortDescription: 'Electronic Health Records (EHR), OPD/IPD management, doctor appointment scheduling, pharmacy billing, and lab portals.',
    heroDescription: 'Healthcare institutions require rigorous data accuracy, HIPAA-compliant patient confidentiality, and seamless cross-departmental coordination. We develop comprehensive Hospital Information Management Systems (HIMS) connecting reception, OPD/IPD, nursing stations, pharmacy, and diagnostic laboratories.',
    icon: Stethoscope,
    badge: 'HIPAA Compliant',
    highlights: [
      'Electronic Health Records (EHR) & Digital Patient History',
      'Doctor Scheduling, Online Patient Booking & OPD Queue Tokens',
      'IPD Bed Allocation, Nursing Charts & Discharge Summaries',
      'Pharmacy Inventory & Automated Diagnostic Lab Report Generation'
    ],
    solutionsDelivered: [
      {
        challenge: 'Lost physical paper medical records and delayed patient history retrieval during emergencies.',
        solution: 'Encrypted cloud Electronic Health Records accessible instantly by authorized doctors via Patient MR Number.',
        impact: 'Instant patient medical history access and zero misplaced files.'
      },
      {
        challenge: 'Crowded waiting rooms and chaotic patient appointment queues.',
        solution: 'Smart token queuing display screens and online WhatsApp appointment booking integration.',
        impact: 'Smooth patient flow and 60% reduction in reception overcrowding.'
      },
      {
        challenge: 'Pharmacy medicine stock leakages and manual lab report distribution delays.',
        solution: 'Barcode-tracked pharmacy dispensing and automatic SMS/WhatsApp download links for lab test results.',
        impact: 'Accurate pharmacy stock balances and instant patient report delivery.'
      }
    ],
    capabilities: [
      {
        title: 'OPD & IPD Clinical Workflow',
        description: 'Digital prescription writing, bed status dashboards, vital signs recording, and comprehensive discharge summaries.'
      },
      {
        title: 'Diagnostic Lab & Radiology Portal',
        description: 'Custom lab test templates, normal reference ranges, pathologist digital signatures, and PDF report generation.'
      },
      {
        title: 'Pharmacy Point of Sale & Expiry Tracking',
        description: 'Medicine batch tracking, upcoming expiry alerts, supplier purchase orders, and itemized billing.'
      },
      {
        title: 'Healthcare Compliance & Security',
        description: 'Role-based doctor/nurse/cashier access privileges, patient data encryption, and audit trail logs.'
      }
    ],
    techStack: [
      { name: 'React.js', role: 'Clinical Workstation UI' },
      { name: 'Node.js / Python', role: 'Medical Records API' },
      { name: 'PostgreSQL', role: 'Encrypted Healthcare DB' },
      { name: 'PDFKit', role: 'Lab & Prescription Engine' },
      { name: 'WebSockets', role: 'Live Token Displays' }
    ],
    process: [
      { step: '01', name: 'Clinical Workflow Audit', desc: 'Documenting OPD, IPD, lab testing, and billing procedures with medical staff.' },
      { step: '02', name: 'Medical Template Customization', desc: 'Setting up custom prescription formats, doctor fees, and diagnostic test templates.' },
      { step: '03', name: 'Departmental Integration', desc: 'Connecting reception, doctor cabins, lab, pharmacy, and central cash counters.' },
      { step: '04', name: 'Hospital Go-Live', desc: 'Conducting staff training across shifts and launching with on-site technical support.' }
    ],
    faqs: [
      { q: 'Is patient medical data secure and compliant?', a: 'Yes. All patient records are encrypted with AES-256 at rest and TLS 1.3 in transit, with granular role-based access control.' }
    ]
  },
  {
    slug: 'lms-education-portals',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'LMS & Education Platforms',
    shortDescription: 'Custom Learning Management Systems, student portals, secure video streaming, automated grading, and digital certifications.',
    heroDescription: 'Institutes, universities, and corporate training companies need modern e-learning ecosystems that engage students and simplify administration. We build custom Learning Management Systems (LMS) with secure video streaming, interactive quizzes, student fee management, and automated certificate generation.',
    icon: GraduationCap,
    badge: 'EdTech Scalability',
    highlights: [
      'Encrypted DRM Video Streaming & Lecture Playlists',
      'Automated Quizzes, Timed Exams & Instant Grading',
      'Student Fee Collection & Installment Management',
      'Verifiable QR-Coded Digital Certificate Generation'
    ],
    solutionsDelivered: [
      {
        challenge: 'Course video piracy and unauthorized screen recording draining creator revenues.',
        solution: 'Encrypted dynamic video player with DRM protection and dynamic student watermark overlays.',
        impact: '100% prevention of course piracy and unauthorized sharing.'
      },
      {
        challenge: 'Instructors spending dozens of hours manually grading multiple-choice tests and assignments.',
        solution: 'Automated assessment engine with instant score calculation and detailed student performance analytics.',
        impact: 'Zero grading time for instructors and immediate feedback for learners.'
      }
    ],
    capabilities: [
      {
        title: 'Curriculum & Course Builder',
        description: 'Multi-chapter curriculum structuring, downloadable attachments, homework submission portals, and discussion boards.'
      },
      {
        title: 'Fee Management & Installments',
        description: 'Automated fee challans, online card/bank payments, scholarship discounts, and installment tracking.'
      },
      {
        title: 'Live Class & Zoom/Meet Integration',
        description: 'Schedule and launch live interactive lectures directly within the student portal with automated attendance.'
      }
    ],
    techStack: [
      { name: 'Next.js', role: 'Student Portal' },
      { name: 'Node.js', role: 'LMS Backend' },
      { name: 'PostgreSQL', role: 'Student Database' },
      { name: 'AWS S3 & CloudFront', role: 'High-Speed Video CDN' },
      { name: 'Canvas API', role: 'Certificate Generation' }
    ],
    process: [
      { step: '01', name: 'Curriculum & Portal Architecture', desc: 'Structuring student, teacher, and administrator roles and learning paths.' },
      { step: '02', name: 'Video Streaming Pipeline', desc: 'Configuring adaptive bitrate video encoding and watermark security.' },
      { step: '03', name: 'Payment & Certification Setup', desc: 'Integrating tuition payment gateways and verifiable certificate templates.' },
      { step: '04', name: 'Enrollment Launch', desc: 'Onboarding student batches and deploying scalable cloud streaming infrastructure.' }
    ],
    faqs: [
      { q: 'Can students access courses on mobile devices?', a: 'Yes! The LMS is 100% responsive and works flawlessly on iPhones, Android smartphones, tablets, and desktops.' }
    ]
  },
  {
    slug: 'fintech-payment-solutions',
    categoryId: 'enterprise-systems',
    categoryName: 'Enterprise & Business Systems',
    title: 'Fintech & Payment Gateway Solutions',
    shortDescription: 'Digital wallets, micro-lending algorithms, automated reconciliation ledgers, and PCI-DSS compliant checkout engines.',
    heroDescription: 'Financial technology requires zero-error transaction processing, cryptographic security, and bulletproof audit trails. We engineer custom digital wallets, peer-to-peer payout engines, loan origination systems, and custom multi-currency payment aggregators.',
    icon: Wallet,
    badge: 'PCI-DSS Compliant',
    highlights: [
      'Double-Entry Cryptographic Financial Ledger Architecture',
      'Multi-Currency Wallet Top-Up & P2P Transfer Engines',
      'Automated Bank Reconciliation & Webhook Settlement Pools',
      'KYC Identity Verification & Anti-Fraud Monitoring Filters'
    ],
    solutionsDelivered: [
      {
        challenge: 'Financial ledger discrepancies caused by race conditions during concurrent fund transfers.',
        solution: 'Immutable double-entry balance ledger with ACID transactional database locks and idempotency keys.',
        impact: 'Zero financial discrepancies and 100% mathematical audit accuracy.'
      },
      {
        challenge: 'Manual verification of customer KYC documents delaying account activation.',
        solution: 'Automated OCR identity document scanning and biometric liveness verification API integration.',
        impact: 'Account activation time reduced from 24 hours to under 60 seconds.'
      }
    ],
    capabilities: [
      {
        title: 'Immutable Ledger Engine',
        description: 'Every single debit and credit is mathematically paired, preventing unauthorized balance alterations.'
      },
      {
        title: 'Payout & Disbursement Automation',
        description: 'Batch payouts to bank accounts and mobile wallets with automated failure retry queues.'
      },
      {
        title: 'Fraud Detection Algorithms',
        description: 'Real-time transaction risk scoring detecting velocity spikes and geolocation anomalies.'
      }
    ],
    techStack: [
      { name: 'Node.js / Go', role: 'High-Speed Financial Engine' },
      { name: 'PostgreSQL', role: 'ACID Financial Ledger' },
      { name: 'Redis', role: 'Idempotency & Locks' },
      { name: 'AWS KMS', role: 'Cryptographic Key Vault' }
    ],
    process: [
      { step: '01', name: 'Regulatory & Ledger Architecture', desc: 'Defining ledger account hierarchies, transaction flows, and compliance requirements.' },
      { step: '02', name: 'Idempotent Core Engine Build', desc: 'Implementing transactional locks and automated reconciliation algorithms.' },
      { step: '03', name: 'Security & Penetration Audit', desc: 'Conducting intensive security audits and race-condition stress tests.' },
      { step: '04', name: 'Production Cutover', desc: 'Deploying to isolated PCI-compliant cloud infrastructure.' }
    ],
    faqs: [
      { q: 'How do you guarantee that money cannot be created out of thin air?', a: 'Our ledger enforces strict double-entry accounting where every transaction must balance to zero, backed by database-level constraints.' }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. WEB & SOFTWARE ENGINEERING
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'custom-web-development',
    categoryId: 'web-development',
    categoryName: 'Web & Software Engineering',
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
    categoryName: 'Web & Software Engineering',
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
    categoryName: 'Web & Software Engineering',
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
    categoryName: 'Web & Software Engineering',
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

  // ─────────────────────────────────────────────────────────────
  // 3. ADVANCED AI & CLOUD TECH
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
  // 4. UI/UX DESIGN & DIGITAL GROWTH
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'ui-ux-design-service',
    categoryId: 'design-growth',
    categoryName: 'UI/UX Design & Digital Growth',
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
    categoryId: 'design-growth',
    categoryName: 'UI/UX Design & Digital Growth',
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
  {
    slug: 'seo-growth',
    categoryId: 'design-growth',
    categoryName: 'UI/UX Design & Digital Growth',
    title: 'Data-Driven Search Engine Optimization (SEO)',
    shortDescription: 'Technical SEO, commercial keyword ranking, Core Web Vitals optimization, and authority backlinks.',
    heroDescription: 'We combine deep technical SEO audits, schema structured data, high-intent commercial keyword rankings, and high-authority link outreach to turn Google search into your primary customer acquisition channel.',
    icon: Search,
    badge: 'Organic Traffic',
    highlights: [
      'Technical SEO Audits & Crawl Error Remediation',
      'High-Intent Commercial Keyword Strategy',
      'Schema.org Structured Data & Rich Snippets',
      'High-Authority Digital PR & Backlink Acquisition'
    ],
    solutionsDelivered: [
      {
        challenge: 'Zero organic Google traffic forcing business to overspend on paid ads.',
        solution: 'Targeted content clustering around high-intent transactional search queries.',
        value: '400%+ increase in qualified organic traffic.'
      }
    ],
    capabilities: [
      {
        title: 'Technical SEO & Core Web Vitals',
        description: 'Fixing indexation errors, sitemap hierarchies, and page load speeds.'
      }
    ],
    techStack: [
      { name: 'Google Search Console', role: 'Search Analytics' },
      { name: 'Ahrefs & SEMrush', role: 'Keyword & Backlinks' }
    ],
    process: [
      { step: '01', name: 'Technical Audit', desc: 'Scanning site health and indexing status.' },
      { step: '02', name: 'Authority Push', desc: 'Publishing optimized content and securing backlinks.' }
    ],
    faqs: [
      { q: 'How long before we see SEO results?', a: 'Technical indexing improves within weeks, with substantial ranking growth compounding within 3 to 6 months.' }
    ]
  },
  {
    slug: 'performance-marketing',
    categoryId: 'design-growth',
    categoryName: 'UI/UX Design & Digital Growth',
    title: 'Performance Marketing & Conversion Funnels',
    shortDescription: 'Data-driven Google, Meta, and LinkedIn ad campaigns with server-side tracking (CAPI) and high ROAS.',
    heroDescription: 'We design, launch, and continuously optimize paid campaigns across Google, Meta, and LinkedIn with server-side tracking (CAPI) to deliver maximum return on ad spend and lower customer acquisition costs.',
    icon: Target,
    badge: 'High ROAS',
    highlights: [
      'Google Search, Display & Performance Max Campaigns',
      'Meta (Facebook & Instagram) Targeted Funnels',
      'Server-Side Conversion API (CAPI) & Tracking',
      'A/B Tested High-Converting Landing Page Optimization'
    ],
    solutionsDelivered: [
      {
        challenge: 'Wasting ad budget on low-quality clicks that generate zero sales.',
        solution: 'Hyper-targeted audience segmentation, negative keywords, and dedicated conversion landing pages.',
        value: '40% lower cost per acquisition (CPA).'
      }
    ],
    capabilities: [
      {
        title: 'Full-Funnel Paid Advertising',
        description: 'Audience targeting, ad copywriting, creative design, and retargeting funnels.'
      }
    ],
    techStack: [
      { name: 'Google Ads', role: 'Search & Display' },
      { name: 'Meta Ads Manager', role: 'Social Ads' },
      { name: 'Meta CAPI', role: 'Server Tracking' }
    ],
    process: [
      { step: '01', name: 'Tracking Setup', desc: 'Configuring server-side pixels and conversion tracking.' },
      { step: '02', name: 'Scaling Phase', desc: 'Scaling budget on winning ad creatives.' }
    ],
    faqs: [
      { q: 'What platforms do you advertise on?', a: 'We manage campaigns across Google Search, YouTube, Meta (Instagram/Facebook), and LinkedIn.' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return allServices.find(service => service.slug === slug);
}

export function getServicesByCategory(categoryId) {
  return allServices.filter(service => service.categoryId === categoryId);
}
