import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

export const projects = [
  {
    title: "Financial Data MCP Server",
    text: "Developed a FastAPI-MCP financial server over the Yahoo Finance dataset, exposing schema-preserving MCP tools through asynchronous FastAPI endpoints and Pydantic schemas for agentic LLM workflows.",
    tags: ["Python", "FastAPI", "MCP", "Pydantic"],
  },
  {
    title: "Multi-Agent Orchestration System",
    text: "Built a multi-agent AI system using Google Agent Development Kit, orchestrating specialized agents through task delegation with Gemini-backed reasoning and custom tool integration.",
    tags: ["Python", "ADK", "Gemini", "Agents"],
  },
  {
    title: "Confluence RAG Knowledge Assistant",
    text: "Engineered a Langflow-powered RAG pipeline ingesting Confluence documentation into ChromaDB with Azure OpenAI for context-aware question answering.",
    tags: ["Langflow", "RAG", "ChromaDB", "Azure OpenAI"],
  },
];

export const experience = [
  {
    company: "MSCI Inc.",
    logo: "/logos/msci.png",
    logoDark: false,
    role: "Technology Analyst | Analytics Engineering",
    dates: "Jun 2024 - Jul 2026",
    bullets: [
      "Delivered a full-stack Portfolio Hedging Basket platform using React.js, TypeScript, and Node.js, with a configurable risk optimization engine for constrained hedge construction.",
      "Architected FastAPI services processing multi-billion-row MSCI Analytics datasets in Snowflake; optimized data models, asynchronous processing, SQL queries, pagination, and serialization, reducing API latency from 40s to <10s.",
      "Proposed and implemented a FastMCP-based tool layer exposing analytics and hedging APIs to a chatbot, enabling traders to construct hedge baskets and perform risk analysis through natural language.",
      "Orchestrated an AI-driven framework upgrade pipeline for automated version discovery, dependency analysis, compatibility checks, code upgrades, and build validation.",
      "Designed a multi-tenant Redis caching layer for low-latency access to 300K+ portfolios per tenant, with automated cache lifecycle management and data isolation.",
      "Eliminated manual credential provisioning and per-client, per-environment secret storage in Azure Key Vault by engineering a real-time credential retrieval system with secret-expiry handling and request coalescing.",
    ],
  },
  {
    company: "MSCI Inc.",
    logo: "/logos/msci.png",
    logoDark: false,
    role: "Technology and Data Intern",
    dates: "Jan 2024 - Jun 2024",
    bullets: [
      "Initiated and led a zero-downtime Azure configuration framework integration for Portfolio Insights supporting 200+ institutional clients, using CI/CD pipelines and YAML configuration for runtime, environment-aware, client-specific updates.",
    ],
  },
  {
    company:
      "Indian Space Research Organisation (ISRO) - Vikram Sarabhai Space Centre",
    logo: "/logos/isro.png",
    logoDark: true,
    role: "Project Intern",
    dates: "Oct 2023 - Nov 2023",
    bullets: [
      "Automated complex load-case generation for aerospace and mechanical structural analysis software using pybind11, eliminating repetitive manual setup and enabling engineers to run more scenarios faster, with fewer errors.",
    ],
  },
  {
    company: "ifm",
    logo: "/logos/ifm.png",
    logoDark: false,
    role: "Development Intern",
    dates: "Jul 2022 - Dec 2022",
    bullets: [
      "Contributed to the development of an Inventory Management System using Django as the backend, MySQL as the database, and HTML, CSS, and JavaScript for the frontend; cleaned, organized, and migrated raw product data from Excel files into a structured MySQL database.",
      "Collaborated to modernize ifm's product tracking system by implementing features for adding, updating, and reviewing inventory items, while optimizing site performance and fixing bugs identified during testing, resulting in smoother operations and improved inventory efficiency.",
    ],
  },
];

export const publications = [
  {
    title:
      "Question and Assessment Generator: Deep Learning Approach for Customizable and Intelligent Assessment Creation",
    venue: "IEEE Xplore, ICWITE 2024",
    description:
      "Proposed an automated question paper generation system using deep learning and natural language processing, particularly transformer models, to generate customizable assessments from PDFs, audio, and video while incorporating Bloom's Taxonomy and multiple question formats.",
    link: "https://ieeexplore.ieee.org/document/10503319",
  },
  {
    title: "State of the Art Analysis of Word Sense Disambiguation",
    venue: "Springer, ICBDS 2023",
    description:
      "Presented a comprehensive analysis of Word Sense Disambiguation approaches, covering knowledge-based methods and machine learning techniques for determining the appropriate meaning of ambiguous words in context.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-61298-5_5",
  },
  {
    title:
      "IPFS-Blockchain Technology for Lease Agreement and Rental System in Real Estate",
    venue: "IEEE Xplore, ICBDS 2023",
    description:
      "Proposed a blockchain-based housing lease system using smart contracts and IPFS to enable secure lease agreements, property listings, identity verification, utility-bill integration, and automated rent collection.",
    link: "https://ieeexplore.ieee.org/abstract/document/10346458",
    award: "Best Research Paper Award",
  },
  {
    title:
      "A Survey and Implementation of Machine Learning Algorithms for Customer Churn Prediction",
    venue: "IJRITCC, 2023",
    description:
      "Developed and evaluated machine learning models for customer churn prediction using historical customer data, preprocessing, feature engineering, categorical encoding, and multiple evaluation metrics including accuracy, precision, recall, F1 score, and ROC AUC.",
    link: "https://ijritcc.org/index.php/ijritcc/article/view/8625",
  },
  {
    title:
      "IPFS-Blockchain Technology for Health Insurance Fraud Prevention and Wellness Incentives",
    venue: "IEEE Xplore, ICBDS 2024",
    description:
      "Proposed a blockchain, gamification, and IPFS-based approach for reducing health insurance fraud, improving reimbursement processes, storing medical records securely, and encouraging healthy behavior through wellness incentives.",
    link: "https://ieeexplore.ieee.org/document/10837188",
  },
];

export const certifications = [
  {
    title: "Hugging Face: MCP Course",
    issuer: "Hugging Face",
    date: "Jan 2026",
    credentialId: "",
    link: null,
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Jan 2026",
    credentialId: "ELRTTWSTV04S",
    link: "https://www.coursera.org/account/accomplishments/verify/ELRTTWSTV04S",
  },
  {
    title: "Structured Machine Learning Projects",
    issuer: "DeepLearning.AI",
    date: "Jan 2026",
    credentialId: "6V5OJJR8MV7P",
    link: "https://www.coursera.org/account/accomplishments/verify/6V5OJJR8MV7P",
  },
  {
    title: "Microsoft Fabric DP-700 Data Engineering Associate",
    issuer: "Microsoft",
    date: "Dec 2025",
    credentialId: "E55DD65FD4A27C3B",
    link: "https://learn.microsoft.com/en-us/users/vaishnavipophale-2046/credentials/e55dd65fd4a27c3b",
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "Dec 2025",
    credentialId: "",
    link: "https://www.credly.com/badges/749d9053-f3d2-4bab-922a-998fe20635b4",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2022",
    credentialId: "",
    link: "https://www.credly.com/badges/b6e8f6e8-eadf-4f43-a816-b606e8510f9b",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "Oct 2021",
    credentialId: "",
    link: "https://www.credly.com/badges/0635f8a3-e1f3-4846-ae3d-a2fa53654c9a",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Sep 2021",
    credentialId: "d5717c30a8114385b629ff8a2712341d",
    link: "https://www.credly.com/badges/7c5ff557-f2b2-434f-b462-ea31e992623a",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "Aug 2021",
    credentialId: "",
    link: "https://drive.google.com/file/d/1c3jo2S2bsxFknpfWoWA4-cKjTk8TO12a/view",
  },
  {
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    date: "",
    credentialId: "fe3f224955834cff93c38f10f3cd8dcc",
    link: "https://drive.google.com/file/d/1Z5HNZ0AuY1qhHuDbM0uURel5TJmJ7DDS/view",
  },
  {
    title: "Getting Started with DeepStream for Video Analytics on Jetson Nano",
    issuer: "NVIDIA",
    date: "",
    credentialId: "269db94039384367895ffb7f70ce0d42",
    link: "https://www.credly.com/badges/5e9ae52d-e2c6-4e85-a525-7ea487b211b8",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "May 2021",
    credentialId: "",
    link: "https://www.credly.com/badges/f2404b86-0d9f-4b3a-a138-b5d353a0c61a",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "Mar 2021",
    credentialId: "",
    link: "https://courses.cognitiveclass.ai/certificates/7f510b68a85141d5a984cc297947ddad",
  },
  {
    title: "Data Science Foundations - Level 1",
    issuer: "IBM",
    date: "Mar 2021",
    credentialId: "68555360f69a47809bdca196940a0568",
    link: null,
  },
];

export function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} / Vaishnavi Sunil Pophale</span>

      <div className="footer-links">
        <a href="mailto:vpophale@andrew.cmu.edu">
          <Mail size={14} />
          Email
        </a>

        <a href="tel:+14122874864">
          <Phone size={14} />
          412-287-4864
        </a>

        <a
          href="https://www.linkedin.com/in/vaishnavi-pophale-4a0037206/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export function Nav() {
  return (
    <header>
      <Link className="brand" href="/">
        Vaishnavi Sunil Pophale
      </Link>

      <nav>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/research">Research</Link>
        <Link href="/certifications">Certifications</Link>

        <a
          href="/Vaishnavi_Pophale_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}