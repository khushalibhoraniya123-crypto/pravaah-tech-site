import type { PortfolioProject } from '@/types';

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'business-management-platform',
    name: 'Nexus Enterprise ERP',
    category: 'Software',
    subtitle: 'Unified Multi-Tenant Business Management & Supply Chain System',
    client: 'Nexus Global Logistics',
    industry: 'Logistics & Supply Chain',
    year: '2025',
    timeline: '5 Months',
    shortDesc: 'A comprehensive cloud ERP & CRM system streamlining inventory, payroll, and departmental analytics for an international supply chain.',
    fullDesc: 'Engineered an end-to-end ERP platform that unifies accounting, multi-warehouse logistics, team timesheets, and real-time executive BI dashboards. Scaled to support over 150,000 daily operational events with sub-200ms API response times.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Redis', 'TypeScript', 'Prisma'],
    stats: [
      { label: 'Efficiency Boost', value: '+45%' },
      { label: 'Active Users', value: '12,500+' },
      { label: 'Response Latency', value: '<180ms' },
    ],
    deliverables: ['Custom ERP Architecture', 'Role-Based RBAC Permissions', 'Multi-Warehouse Sync', 'Automated Invoicing Engine'],
    challenge: {
      title: 'Operational Fragmentation Across Distributed Hubs',
      description: 'The client struggled with disconnected legacy desktop applications and decentralized spreadsheets across 8 international warehouses, leading to frequent inventory mismatches and administrative delays.',
      points: [
        'Over 12% discrepancy in real-time inventory counts between warehouses.',
        'Manual invoicing and customs compliance took 4 to 5 business days per shipment.',
        'Lack of consolidated executive reporting and real-time shipment telemetry.',
        'Legacy infrastructure unable to handle concurrent peak-hour transaction loads.'
      ]
    },
    solution: {
      title: 'Cloud-Native Modular ERP & Real-Time Event Bus',
      description: 'We architected a unified web-based ERP platform with multi-tenant PostgreSQL partitioning, automated financial reconciliation, and WebSocket-driven warehouse tracking.',
      highlights: [
        'Constructed a centralized microservices architecture deployed via Docker container orchestration.',
        'Implemented distributed Redis caching to deliver sub-200ms query responses across 150,000+ daily events.',
        'Built automated tax compliance and dynamic multi-currency PDF invoice generation.',
        'Created granular role-based access control (RBAC) ensuring enterprise-grade data security.'
      ],
      architecture: [
        'Frontend: Next.js & React with Tailwind CSS and TanStack Table',
        'Backend API: Node.js / Express microservices with TypeScript',
        'Database: PostgreSQL with Prisma ORM and automated read-replicas',
        'Caching & Queue: Redis for real-time state and BullMQ for background jobs'
      ]
    },
    keyFeatures: [
      {
        title: 'Multi-Warehouse Live Sync',
        description: 'Real-time stock level synchronization across 8 fulfillment centers with automated low-stock reorder triggers.'
      },
      {
        title: 'Automated Billing & Customs Invoicing',
        description: 'Instant generation of localized tax invoices, bills of lading, and automated payment status tracking.'
      },
      {
        title: 'Executive BI & Telemetry Dashboard',
        description: 'Interactive financial forecasting, freight cost analytics, and employee productivity telemetry.'
      },
      {
        title: 'Audit-Proof Access Control',
        description: 'Enterprise RBAC security matrix with detailed activity logging for compliance audits.'
      }
    ],
    process: [
      { step: '01', phase: 'Discovery & Schema Architecture', description: 'Audited existing logistics workflows, mapped data structures, and designed normalized database schemas.' },
      { step: '02', phase: 'Core Engine Engineering', description: 'Developed backend microservices for inventory, billing, authentication, and background job processing.' },
      { step: '03', phase: 'High-Density UI/UX Design', description: 'Built an intuitive web interface with responsive data tables, keyboard shortcuts, and dark/light modes.' },
      { step: '04', phase: 'Load Testing & Security Audits', description: 'Conducted rigorous load testing up to 10,000 concurrent requests and completed security penetration tests.' },
      { step: '05', phase: 'Deployment & Team Onboarding', description: 'Executed zero-downtime database migration and trained 200+ logistics personnel across 8 facilities.' }
    ],
    results: [
      { metric: '+45%', label: 'Operational Throughput', description: 'Streamlined daily order processing and dispatch workflows.' },
      { metric: '<180ms', label: 'Average Response Time', description: 'High-performance cloud architecture with sub-second queries.' },
      { metric: '$1.2M', label: 'Annual Cost Savings', description: 'Drastic reduction in inventory loss, manual errors, and overtime.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Executive ERP Overview & Financial Telemetry' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Warehouse Stock Distribution & Real-Time Tracking' },
      { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop', caption: 'Customs Invoicing & Payment Reconciliation' }
    ],
    featured: true,
  },
  {
    id: 'ai-assistant-analytics',
    name: 'CognitiveIQ AI Assistant',
    category: 'AI',
    subtitle: 'Enterprise Generative AI & Knowledge Retrieval Platform',
    client: 'Apex Capital Advisors',
    industry: 'Financial Advisory & Capital Markets',
    year: '2026',
    timeline: '3.5 Months',
    shortDesc: 'Custom LLM-powered cognitive search and workflow automation assistant trained on proprietary corporate documentation.',
    fullDesc: 'Constructed an intelligent AI workspace platform that ingests PDFs, databases, and internal wikis to provide grounded, citation-backed answers, contract summaries, and automated email draft responses for 800+ employees.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop',
    technologies: ['OpenAI API', 'Python', 'LangChain', 'Next.js', 'Vector DB', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    stats: [
      { label: 'Query Resolution', value: '94%' },
      { label: 'Time Saved / Week', value: '14 hrs' },
      { label: 'Document Index', value: '500k+ pages' },
    ],
    deliverables: ['RAG Pipeline Architecture', 'Vector Search Engine', 'Real-Time Streaming Interface', 'Security Guardrails'],
    challenge: {
      title: 'Information Silos in Massive Financial Repositories',
      description: 'Analysts at Apex Capital were spending over 15 hours weekly sifting through tens of thousands of PDF filings, market analyses, and policy documents to prepare client reports.',
      points: [
        'Over 500,000 pages of unstructured documents across multiple internal servers.',
        'Hallucination risks from generic public AI tools that lack corporate grounding.',
        'Strict regulatory compliance forbidding proprietary data exposure to public models.',
        'Slow research turnaround creating bottlenecks in time-sensitive deal closings.'
      ]
    },
    solution: {
      title: 'Private Retrieval-Augmented Generation (RAG) Architecture',
      description: 'We built a secure enterprise AI knowledge base utilizing vector embeddings, semantic chunking, and dual-model verification with strict source attribution.',
      highlights: [
        'Implemented custom vector ingestion pipeline indexing 500,000+ pages into a high-speed vector database.',
        'Integrated exact page/paragraph citation links for every generated answer to guarantee zero unverified assertions.',
        'Configured private VPC deployment preventing any training on company intellectual property.',
        'Engineered real-time token streaming with sub-500ms time-to-first-token response.'
      ],
      architecture: [
        'AI Engine: LangChain / LlamaIndex with OpenAI Enterprise & Anthropic API',
        'Vector Store: Pinecone & pgvector for semantic similarity retrieval',
        'Backend: Python FastAPI with asynchronous request processing',
        'Frontend: Next.js App Router with Server-Sent Events (SSE) streaming'
      ]
    },
    keyFeatures: [
      {
        title: 'Citation-Backed AI Q&A',
        description: 'Answers link directly to exact source PDF pages and paragraphs with highlighted text previews.'
      },
      {
        title: 'Multi-Modal File Ingestion',
        description: 'Seamless upload and semantic parsing of complex PDF reports, financial tables, and scanned documents.'
      },
      {
        title: 'Automated Briefing Generation',
        description: 'One-click generation of comprehensive executive investment memos and market risk summaries.'
      },
      {
        title: 'Enterprise Role-Gated Knowledge',
        description: 'Access permissions ensure confidential executive folders remain restricted to authorized personnel.'
      }
    ],
    process: [
      { step: '01', phase: 'Compliance & Data Auditing', description: 'Mapped document taxonomy and established strict financial security parameters.' },
      { step: '02', phase: 'Vector Embedding Pipeline', description: 'Engineered chunking strategies and optimized vector indexes for financial terminology.' },
      { step: '03', phase: 'Agentic Verification Engine', description: 'Implemented hallucination filters and multi-step reasoning validation.' },
      { step: '04', phase: 'Interactive Workspace UI', description: 'Designed a clean, intuitive conversational interface with rich Markdown and table rendering.' },
      { step: '05', phase: 'Production Deployment & Rollout', description: 'Deployed within dedicated cloud VPC and onboarded 800+ financial analysts.' }
    ],
    results: [
      { metric: '94%', label: 'Query Accuracy', description: 'High precision verified by senior compliance officers.' },
      { metric: '14 hrs', label: 'Time Saved Weekly', description: 'Freed up analysts for strategic investment execution.' },
      { metric: '100%', label: 'Data Residency', description: 'Zero data leakage with complete private VPC isolation.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop', caption: 'CognitiveIQ Conversational Workspace' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Document Knowledge Graph & Semantic Index' },
      { url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop', caption: 'Automated Financial Memo Generator' }
    ],
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    name: 'Aura Luxe Marketplace',
    category: 'Web',
    subtitle: 'Next-Gen Headless E-commerce & Lifestyle Portal',
    client: 'Aura Lifestyle Brands',
    industry: 'Luxury Retail & Fashion',
    year: '2025',
    timeline: '4 Months',
    shortDesc: 'Ultra-fast headless e-commerce store with dynamic currency localization, 3D product previews, and instant checkout.',
    fullDesc: 'Designed and engineered a high-converting lifestyle retail platform featuring sub-second page transitions, dynamic inventory reservation, Stripe checkout orchestration, and customized recommendation widgets.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Stripe API', 'Tailwind CSS', 'GraphQL', 'Algolia', 'Vercel'],
    stats: [
      { label: 'Conversion Rate', value: '+38%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Mobile Sales', value: '68%' },
    ],
    deliverables: ['Headless Storefront', 'Stripe Payment Gateway', 'Instant Algolia Search', 'Cart Retention System'],
    challenge: {
      title: 'Slow Monolithic Storefront Inhibiting Global Growth',
      description: 'Aura Luxe was held back by a slow monolithic CMS storefront with 4.5-second load times on mobile, high cart abandonment, and clumsy international checkouts.',
      points: [
        '4.5-second page load times causing 72% mobile bounce rate.',
        'Inability to serve localized currencies, tax rates, and customs fees seamlessly.',
        'Frequent out-of-stock checkouts due to lagging inventory synchronization.',
        'High maintenance costs for monolithic legacy platform upgrades.'
      ]
    },
    solution: {
      title: 'Modern Headless Storefront on Edge Infrastructure',
      description: 'We transitioned the client to a modern headless Next.js architecture integrated with GraphQL APIs, Algolia instant search, and global Edge CDN distribution.',
      highlights: [
        'Engineered an ultra-fast headless storefront delivering 0.8-second average load speeds globally.',
        'Integrated dynamic IP-based currency conversion and localized tax calculations for 40+ countries.',
        'Implemented real-time cart reservation ensuring zero stock overselling during flash sales.',
        'Optimized core web vitals achieving a 99/100 Google Lighthouse performance rating.'
      ],
      architecture: [
        'Storefront: Next.js App Router with React Server Components',
        'API Layer: GraphQL gateway aggregating catalog, cart, and reviews',
        'Search & Filter: Algolia InstantSearch with typo-tolerance and facets',
        'Payment: Stripe Elements and Apple Pay / Google Pay express checkout'
      ]
    },
    keyFeatures: [
      {
        title: 'Sub-Second Page Navigation',
        description: 'Instant client-side route transitions and speculative prefetching for smooth shopping.'
      },
      {
        title: 'Localized Global Checkouts',
        description: 'Dynamic currency conversion, local payment methods, and automated tax calculations.'
      },
      {
        title: 'AI-Powered Recommendations',
        description: 'Personalized product carousels based on real-time browsing behavior and purchase history.'
      },
      {
        title: 'Flash Sale Inventory Lock',
        description: 'Atomic cart reservation locking items for 10 minutes during checkout to avoid duplicate orders.'
      }
    ],
    process: [
      { step: '01', phase: 'Brand Aesthetics & UI Design', description: 'Created an elegant luxury design system focused on high-res typography and photography.' },
      { step: '02', phase: 'Headless Commerce Architecture', description: 'Integrated GraphQL endpoints for product catalog, customer accounts, and shopping carts.' },
      { step: '03', phase: 'Instant Search & Filter Integration', description: 'Configured Algolia indexing with instant faceted filtering across price, color, and size.' },
      { step: '04', phase: 'Checkout & Payment Optimization', description: 'Implemented single-step Stripe payment with 1-click Apple Pay / Google Pay support.' },
      { step: '05', phase: 'Global Launch & CDN Optimization', description: 'Deployed on edge servers with image optimization and automated cache invalidation.' }
    ],
    results: [
      { metric: '+38%', label: 'Conversion Rate', description: 'Significant increase in checkout completion on mobile and desktop.' },
      { metric: '0.8s', label: 'Average Page Speed', description: 'Lightning-fast shopping experience across all global regions.' },
      { metric: '68%', label: 'Mobile Revenue Share', description: 'Delivered an app-like smooth shopping experience on smartphones.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Headless Luxury Storefront & Product Showcase' },
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Interactive Product Customizer & 3D Viewer' },
      { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop', caption: 'Express Single-Step International Checkout' }
    ],
    featured: true,
  },
  {
    id: 'restaurant-management-system',
    name: 'DineFlow POS & Kitchen Display',
    category: 'Mobile',
    subtitle: 'Cross-Platform Restaurant POS & Real-Time Kitchen Display System',
    client: 'Urban Feast Hospitality',
    industry: 'Hospitality & Food Services',
    year: '2025',
    timeline: '4 Months',
    shortDesc: 'Tablet POS, real-time Kitchen Display System (KDS), and contactless QR ordering application for multi-location restaurant chains.',
    fullDesc: 'Delivered a synchronized mobile/tablet suite that coordinates contactless customer ordering, waiter billing, kitchen ticket firing, and daily inventory costing with real-time WebSocket sync.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io', 'Thermal Printer SDK', 'TypeScript', 'Docker'],
    stats: [
      { label: 'Table Turn Speed', value: '+28%' },
      { label: 'Order Accuracy', value: '99.8%' },
      { label: 'Daily Orders', value: '8,000+' },
    ],
    deliverables: ['Waiter Tablet App', 'Kitchen Display System (KDS)', 'Customer QR Web App', 'Admin Cloud Portal'],
    challenge: {
      title: 'Peak-Hour Chaos and Communication Bottlenecks',
      description: 'Urban Feast was struggling during peak dining hours with handwritten order slips, kitchen delays, billing errors, and lack of menu synchronization across tables.',
      points: [
        'Average order delivery latency exceeded 35 minutes during peak dinner hours.',
        'Ticket misplacement and verbal modifier errors caused 6% order remakes.',
        'No real-time inventory depletion leading to items being ordered after selling out.',
        'Split-bill calculations took waitstaff up to 8 minutes per table.'
      ]
    },
    solution: {
      title: 'Real-Time Synchronized Restaurant Operating System',
      description: 'We built a cohesive hardware-integrated mobile and tablet ecosystem linking guests, waitstaff, kitchen stations, and cloud management via sub-50ms WebSockets.',
      highlights: [
        'Engineered responsive Flutter apps for iPad/Android tablets and handheld waiter terminals.',
        'Constructed a color-coded Kitchen Display System with automated course firing timers.',
        'Integrated contactless QR menus allowing guests to order and pay directly from their phones.',
        'Added automated thermal printer integration for order receipts and kitchen prep dockets.'
      ],
      architecture: [
        'Client Apps: Flutter for cross-platform iOS/Android tablets and POS terminals',
        'Realtime Sync: Socket.io WebSocket cluster on Node.js',
        'Database: MongoDB with change streams for real-time order states',
        'Hardware: ESC/POS thermal printer network integration'
      ]
    },
    keyFeatures: [
      {
        title: 'Real-Time KDS Station Routing',
        description: 'Orders automatically route items to specific kitchen stations (Grill, Bar, Pastry, Expediter).'
      },
      {
        title: 'QR Code Pay-at-Table',
        description: 'Guests can scan a dynamic table QR to view live tabs, split bills, and pay with digital wallets.'
      },
      {
        title: 'Ingredient Level Depletion',
        description: 'Every sold dish automatically deducts precise recipe grammage from central inventory.'
      },
      {
        title: 'Offline-Resilient POS Mode',
        description: 'Local caching enables continuous ordering and receipt printing even during internet outages.'
      }
    ],
    process: [
      { step: '01', phase: 'Kitchen Workflow Study', description: 'Shadowed restaurant operations to map order cycles and station dependencies.' },
      { step: '02', phase: 'Real-Time Architecture', description: 'Engineered WebSocket event bus ensuring reliable order delivery under heavy loads.' },
      { step: '03', phase: 'Cross-Platform App Development', description: 'Built ergonomic Flutter applications optimized for quick touch gestures.' },
      { step: '04', phase: 'Hardware & Printer SDK Integration', description: 'Integrated ESC/POS network thermal printers and cash drawers.' },
      { step: '05', phase: 'Multi-Branch Pilot & Deployment', description: 'Piloted across 3 flagship venues and expanded to 12 restaurant locations.' }
    ],
    results: [
      { metric: '+28%', label: 'Faster Table Turnover', description: 'Faster ordering and payment cycles allowed seating more parties daily.' },
      { metric: '99.8%', label: 'Order Accuracy', description: 'Virtually eliminated remakes and miscommunicated order modifiers.' },
      { metric: '8,000+', label: 'Daily Orders Processed', description: 'Reliable real-time performance across high-volume restaurant chains.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Kitchen Display System & Station Timers' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Handheld Waiter POS & Quick Billing' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Restaurant Analytics & Shift Revenue Dashboard' }
    ],
    featured: false,
  },
  {
    id: 'travel-booking-platform',
    name: 'Voyager Global Travel',
    category: 'Web',
    subtitle: 'Dynamic Holiday Package & Flight Booking Engine',
    client: 'Voyager Travel Group',
    industry: 'Travel & Hospitality',
    year: '2025',
    timeline: '5 Months',
    shortDesc: 'A seamless travel discovery platform with interactive destination itineraries, live flight rates, and automated visa guidance.',
    fullDesc: 'Built an intuitive travel marketplace integrating multiple airline GDS feeds and hotel inventory providers with instant currency conversion, split billing, and automated traveler notification journeys.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Mapbox GL', 'Tailwind CSS', 'Redis', 'Stripe'],
    stats: [
      { label: 'Bookings Processed', value: '$4.2M' },
      { label: 'Global Destinations', value: '120+' },
      { label: 'Search Latency', value: '350ms' },
    ],
    deliverables: ['Multi-Carrier Flight Engine', 'Interactive Map Itinerary', 'Split-Payment Gateway', 'Automated PDF Vouchers'],
    challenge: {
      title: 'Disjointed Booking Experience Across Disparate APIs',
      description: 'Voyager Travel was losing high-value travelers due to slow aggregation of multiple airline GDS feeds, cumbersome itinerary customizers, and clunky payment handling.',
      points: [
        'GDS flight API responses took up to 8 seconds, leading to high drop-off rates.',
        'Travelers could not visualize multi-city routes on interactive maps.',
        'High cart abandonment due to lack of flexible group split-payment options.',
        'Manual customer support needed to issue customized PDF travel vouchers.'
      ]
    },
    solution: {
      title: 'Unified High-Speed Travel Aggregation & Itinerary Hub',
      description: 'We engineered a centralized travel hub with parallel API fetching, Redis distributed caching, interactive Mapbox routing, and automated voucher generation.',
      highlights: [
        'Implemented asynchronous GDS flight & hotel aggregation cutting search latency down to 350ms.',
        'Built a drag-and-drop dynamic itinerary builder powered by Mapbox GL interactive maps.',
        'Engineered split-payment functionality allowing groups to pay their shares separately.',
        'Automated instant branded PDF voucher and boarding pass generation.'
      ],
      architecture: [
        'Frontend: React.js with TypeScript and Mapbox GL integration',
        'Backend: Node.js / Express with high-concurrency API aggregation',
        'Caching: Redis caching layer for airline fare rules and hotel room blocks',
        'Payments: Stripe Connect for escrow hold and automated split payouts'
      ]
    },
    keyFeatures: [
      {
        title: 'Sub-400ms GDS Search',
        description: 'Parallel API scraping and intelligent caching delivers lightning-fast flight and hotel deals.'
      },
      {
        title: 'Interactive Map Itineraries',
        description: 'Visual day-by-day itinerary planning with driving routes, sightseeing pins, and hotel stops.'
      },
      {
        title: 'Group Split-Payment Checkout',
        description: 'Allows travel companions to split holiday package costs across multiple credit cards.'
      },
      {
        title: 'Instant Automated Voucher Dispatch',
        description: 'Auto-generates print-ready PDF itineraries, airline tickets, and hotel check-in vouchers.'
      }
    ],
    process: [
      { step: '01', phase: 'GDS & Supplier API Integration', description: 'Architected unified data adapter for Amadeus, Sabre, and Hotelbeds APIs.' },
      { step: '02', phase: 'High-Concurrency Caching Layer', description: 'Configured Redis clusters to handle massive search request bursts.' },
      { step: '03', phase: 'Mapbox Route Visualization', description: 'Designed custom vector map styles and interactive point-to-point journey lines.' },
      { step: '04', phase: 'Split Billing & Checkout Engine', description: 'Engineered multi-party payment settlement and escrow security.' },
      { step: '05', phase: 'Global Deployment & Marketing Launch', description: 'Rolled out platform globally with localized currency support across 120+ destinations.' }
    ],
    results: [
      { metric: '$4.2M', label: 'First-Year Bookings', description: 'Rapid commercial adoption from independent travelers and luxury tour groups.' },
      { metric: '350ms', label: 'Flight Search Latency', description: 'Over 90% reduction in search wait times compared to legacy platform.' },
      { metric: '120+', label: 'Destinations Covered', description: 'Extensive global inventory across 6 continents.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop', caption: 'Interactive Destination Itinerary & Mapbox Routes' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Multi-Carrier Flight Comparison Engine' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Automated Traveler Vouchers & Digital Passes' }
    ],
    featured: false,
  },
  {
    id: 'finance-dashboard-design',
    name: 'FinPulse Wealth Analytics',
    category: 'UI/UX',
    subtitle: 'High-Density Fintech Dashboard & Atomic Design System',
    client: 'FinPulse Technologies',
    industry: 'Wealth Management & Fintech',
    year: '2026',
    timeline: '2.5 Months',
    shortDesc: 'Clean, modern UI/UX design and design system for a wealth management terminal tracking multi-asset portfolios and risk metrics.',
    fullDesc: 'Executed comprehensive user research and developed an atomic design system with 250+ responsive components, dark/light accessibility modes, and real-time financial charting widgets.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Testing', 'Micro-interactions', 'Tailwind CSS', 'TypeScript'],
    stats: [
      { label: 'UX Usability Score', value: '96/100' },
      { label: 'Component Library', value: '250+ Tokens' },
      { label: 'Task Completion', value: '+52%' },
    ],
    deliverables: ['Figma System Architecture', 'Clickable High-Fidelity Prototype', 'WCAG 2.1 AA Audit', 'Developer Token Package'],
    challenge: {
      title: 'Cognitive Overload in Legacy Financial Dashboards',
      description: 'Wealth managers were overwhelmed by cluttered legacy terminal interfaces with inconsistent layouts, poor contrast, and confusing multi-level navigation.',
      points: [
        'High cognitive load and frequent input errors during rapid market order execution.',
        'Inconsistent design patterns across desktop, web, and tablet devices.',
        'Lack of dark mode support causing severe eye fatigue during prolonged market monitoring.',
        'Slow developer handoff cycles due to missing component specifications.'
      ]
    },
    solution: {
      title: 'Atomic Design System & Data-Dense Terminal Layout',
      description: 'We created an atomic design framework with 250+ modular components, rigorous color contrast tokens, ergonomic micro-interactions, and real-time financial charts.',
      highlights: [
        'Constructed a scalable design token hierarchy for typography, spacing, elevations, and semantic financial colors.',
        'Designed high-density charting modules (Candlestick, Depth Chart, Asset Allocation Heatmap).',
        'Achieved 100% WCAG 2.1 AA accessibility compliance across dark and light modes.',
        'Delivered developer-ready TypeScript / Tailwind CSS component tokens.'
      ],
      architecture: [
        'Design Tooling: Figma with Variables, Auto Layout 5.0, and Component Properties',
        'Component Code: React.js with Tailwind CSS design tokens',
        'Charting Library: Lightweight Charts & D3.js integration specifications',
        'Documentation: Zeroheight interactive design system documentation'
      ]
    },
    keyFeatures: [
      {
        title: '250+ Atomic UI Tokens',
        description: 'Comprehensive library covering buttons, inputs, tables, badges, modals, and graph widgets.'
      },
      {
        title: 'Dark & Light Ergonomic Themes',
        description: 'Engineered for financial traders with OLED dark mode reducing eye fatigue by 60%.'
      },
      {
        title: 'High-Density Market Telemetry',
        description: 'Optimized typography hierarchy allows viewing 4x more actionable portfolio metrics without clutter.'
      },
      {
        title: 'Interactive Prototype with Realistic Data',
        description: 'Fully responsive clickable prototypes validating user flows before engineering handoff.'
      }
    ],
    process: [
      { step: '01', phase: 'User Research & Stakeholder Interviews', description: 'Conducted in-depth interviews with 24 portfolio managers and retail wealth advisors.' },
      { step: '02', phase: 'Information Architecture & Wireframes', description: 'Redefined navigation hierarchy and created low-fidelity layout blueprints.' },
      { step: '03', phase: 'Design Token System Creation', description: 'Established semantic color variables, typography scales, and grid structures in Figma.' },
      { step: '04', phase: 'High-Fidelity Component Library', description: 'Designed 250+ interactive components with responsive auto-layout properties.' },
      { step: '05', phase: 'Usability Testing & Developer Handoff', description: 'Conducted rigorous usability testing sessions and published developer documentation.' }
    ],
    results: [
      { metric: '96/100', label: 'UX Usability Score', description: 'Scored top-tier marks in standardized System Usability Scale (SUS) benchmarks.' },
      { metric: '250+', label: 'Design Tokens', description: 'Accelerated frontend engineering velocity by over 40%.' },
      { metric: '+52%', label: 'Faster Task Completion', description: 'Traders execute complex rebalancing workflows in half the time.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop', caption: 'FinPulse Dark-Mode Wealth Terminal' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Atomic Design Token System & Figma Components' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Multi-Asset Portfolio Heatmaps & Risk Charting' }
    ],
    featured: true,
  },
];

