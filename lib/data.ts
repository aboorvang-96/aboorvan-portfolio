export const site = {
  name: 'Aboorvan M G',
  title: 'Aboorvan M G — AI Full-Stack Developer',
  description:
    'Aboorvan M G is a software developer building web, mobile, desktop, and AI-assisted applications.',
  url: 'https://aboorvan.dev',
  email: 'aboorvang96@gmail.com',
  github: 'https://github.com/aboorvang-96',
  linkedin: 'https://www.linkedin.com/in/aboorvan-m-g-187328129/',
  Phone : '+91 9655255713',
  location: 'India',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Capabilities' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export const enjoyBuilding = [
  { title: 'Web applications', desc: 'Business software and APIs built around clear workflows and durable data models.' },
  { title: 'AI applications', desc: 'LLM integrations, RAG pipelines, AI agents, and AI-assisted software systems.' },
  { title: 'Automation', desc: 'Workflow automation, API integrations, and web or data-scraping tools.' },
  { title: 'Mobile software', desc: 'Cross-platform companion applications and focused utilities for daily work.' },
  { title: 'Backend systems', desc: 'Python services, Django applications, REST APIs, and SQL-backed products.' },
  { title: 'Product engineering', desc: 'From application architecture through implementation, integration, and iteration.' },
];

export const capabilities = [
  {
    title: 'Business application development',
    body: 'Building practical software for operational workflows such as finance, HR, inventory, attendance, reporting, and customer management.',
    stack: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'JavaScript'],
  },
  {
    title: 'AI Developer',
    body: 'Exploring and building RAG pipelines, AI agents, LLM integrations, workflow automation, and AI-assisted application experiences.',
    stack: ['Python', 'LLM applications', 'RAG', 'AI agents', 'Automation'],
  },
  {
    title: 'AI Full Stack Developer',
    body: 'Building end-to-end applications that combine interfaces, APIs, data layers, and AI features into one product experience.',
    stack: ['React', 'Django', 'PostgreSQL', 'LLMs', 'API integrations'],
  },
  {
    title: 'Cross-platform application delivery',
    body: 'Creating mobile, PWA, desktop, and web experiences suited to the workflow they support.',
    stack: ['React Native', 'Expo', 'Flutter', 'PyWebView', 'PyInstaller'],
  },
];

export const projects = [
  {
    slug: 'spim-suite', name: 'SPIM Suite', tag: 'ERP / Business Management',
    tech: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
    problem: 'Business operations often spread across separate tools and manual processes.',
    solution: 'A web-based ERP and business-management application that brings core operations into one system.',
    features: ['Dashboard', 'Income, expenses, and transactions', 'Reports', 'Projects and clients', 'Invoices and branches', 'Employees, salary, and attendance', 'Stock and material management'],
    architecture: 'A Python and Django web application with PostgreSQL, JavaScript, HTML, and CSS.',
  },
  {
    slug: 'spim-lite', name: 'SPIM Lite', tag: 'Mobile / PWA Companion',
    tech: ['React Native', 'Expo', 'PWA'],
    problem: 'SPIM Suite workflows also need a lighter experience for mobile and installable web use.',
    solution: 'A React Native and Expo companion application connected to the SPIM Suite backend, with PWA support.',
    features: ['Mobile companion experience', 'Connection to the SPIM Suite backend', 'Expo-based React Native development', 'PWA delivery'],
    architecture: 'A React Native and Expo application integrated with the SPIM Suite backend.',
  },
  {
    slug: 'spim-expense-manager', name: 'SPIM Expense Manager', tag: 'Mobile Application',
    tech: ['Flutter', 'Dart'],
    problem: 'Expense tracking benefits from a focused mobile experience.',
    solution: 'A Flutter application for managing expenses.',
    features: ['Expense management', 'Mobile-first interface', 'Flutter application development'],
    architecture: 'A Flutter and Dart mobile application.',
  },
  {
    slug: 'stock-lite', name: 'Stock Lite', tag: 'Desktop Application',
    tech: ['Python', 'Django', 'SQLite', 'PyWebView', 'Waitress', 'Pandas', 'OpenPyXL', 'ReportLab', 'PyInstaller'],
    problem: 'Stock and material workflows can require a self-contained desktop tool.',
    solution: 'A desktop-oriented stock-management application built with Python and Django.',
    features: ['Stock management', 'SQLite-backed application data', 'Spreadsheet support with Pandas and OpenPyXL', 'Report generation with ReportLab', 'Packaged desktop delivery with PyInstaller'],
    architecture: 'Python and Django with SQLite, PyWebView, Waitress, Pandas, OpenPyXL, ReportLab, and PyInstaller.',
  },
  {
    slug: 'ai-engineering', name: 'AI Development', tag: 'AI Development',
    tech: ['Python', 'LLM integrations', 'RAG', 'AI agents', 'Workflow automation', 'Web scraping', 'API integrations'],
    problem: 'Teams need useful software that can apply modern AI capabilities to real workflows and data.',
    solution: 'AI-related development spanning RAG pipelines, AI agents, LLM integrations, automation, scraping, and AI-assisted software systems.',
    features: ['RAG pipeline development', 'AI-agent workflows', 'LLM integrations', 'Workflow automation', 'Web and data scraping', 'API integrations'],
    architecture: 'AI-assisted software systems designed around Python, integrations, workflows, and application-specific data.',
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'SQL'] },
  { category: 'Frontend & Mobile', items: ['React', 'React Native', 'Expo', 'Flutter', 'HTML', 'CSS'] },
  { category: 'Backend & APIs', items: ['Django', 'REST APIs', 'API integrations', 'Software architecture'] },
  { category: 'Databases', items: ['PostgreSQL', 'SQL', 'SQLite'] },
  { category: 'AI Development', items: ['LLM applications', 'RAG pipelines', 'AI agents', 'Workflow automation'] },
  { category: 'Data & Application Tools', items: ['Web scraping', 'Pandas', 'OpenPyXL', 'ReportLab', 'PyWebView', 'Waitress', 'PyInstaller'] },
];
