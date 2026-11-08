import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "Projects",
  githubLabel: "GitHub profile",
  githubAria: "View GitHub profile",
  detailsLabel: "View details",
  detailsAriaPrefix: "View details: ",
  moreLabel: "Show more projects",
  lessLabel: "Show less",
  backLabel: "Back to CV",
  personName: "Hongkun Wang",
  reportLabel: "Project Report",
  languageLabel: "Language",
  headingsLabel: "Headings",
  overviewLabel: "Overview",
  detailsSectionLabel: "Project Details",
  infoLabel: "Project Info",
  roleLabel: "Role",
  timelineLabel: "Timeline",
  websiteLabel: "Website",
  printWarning: "This resume contains personal information and is intended solely for recruitment evaluation. Unauthorized storage, distribution, or other use is prohibited.",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD China Official Website",
    displayName: "China Official Website",
    date: "Nov 2025 – Present",
    owner: "Independently led product, UI/UX, full-stack development, deployment, and operations",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "Brand website and membership platform for the China market: integrates product discovery, e-commerce referral, member points and skin profiles into one experience, unifies WeChat / Douyin / phone-number identities, and supports the brand's online retail launch and repeat purchases; 205 API routes / 51 models / 2,100+ tests (this system alone).",
    details: [
      {
        title: "Brand Website & Member Platform:",
        body: "Built the brand's official website and member platform with Next.js 16 + Prisma + PostgreSQL — product showcases, third-party e-commerce referral (Tmall / Douyin / Xiaohongshu / WeChat Shop links + GA event tracking), membership tiers, points ledger, points redemption (SF Express tracking), manual purchase record entry for offline purchases, skin profiles, and an account security center; consolidated WeChat, Douyin, and phone OTP identities into a unified account system — 205 API routes, 51 data models, and 2,100+ automated test cases (this system alone).",
      },
      {
        title: "Product & Interaction Design:",
        body: "Owned product design and authored the PRD independently; completed the information architecture, interaction, and UI/UX design independently and implemented directly in code. Built multi-step skincare ritual guides and immersive brand storytelling with Framer Motion + View Transitions, integrated the product drawer with detail pages, and delivered fully responsive layouts.",
      },
      {
        title: "Admin Console & Security Governance:",
        body: "Built an admin console covering products / categories / members / points redemption / manual purchase record entry / job postings / messages / OAuth clients (Tiptap rich text), with TOTP two-factor authentication and step-up verification for sensitive actions, operation audit logs and daily integrity checkpoints, scheduled jobs, database-persisted rate limiting, and webhook failure retries; implemented SEO / GEO / AEO (generative & answer engine optimization; dynamic sitemap, AI crawler allowlist & Content-Signal, Organization / Product / FAQ / HowTo JSON-LD, llms.txt / llms-full.txt, product-level GEO FAQs (up to 20, admin-editable with rule-based fallback), Baidu push & IndexNow).",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD Unified Authentication Platform (SSO / OIDC)",
    displayName: "Unified Authentication Platform (SSO / OIDC)",
    date: "Jul 2026 – Present",
    owner: "Independently led product, full-stack development, deployment, and operations",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "Unified identity foundation for Greater China: a self-built OAuth 2.0 / OIDC single sign-on covering 5 systems — two WeChat mini-programs, the official website (user and admin sides), the skin-analysis sub-site (user and admin sides), and the BA authorization verification platform (admin side); it enables cross-system single sign-on and global sign-out, with TOTP 2FA on admin consoles, packaged as a reusable npm SDK.",
    details: [
      {
        title: "Protocol Implementation:",
        body: "Built a self-hosted OAuth 2.0 / OIDC SSO, co-deployed on the same domain as the official main site, which acts as the Authorization Server issuing RS256 JWTs — fully implementing the authorize / token / userinfo / introspect / revoke / end-session protocol endpoints with support for PKCE and DPoP; the admin console is protected by TOTP two-factor authentication.",
      },
      {
        title: "SDK & Integration:",
        body: "Packaged and published npm SDKs (@nihplod/sso-sdk / @nihplod/sso-verify) so sub-projects can integrate in minutes; enables cross-system SSO and global sign-out via Token Introspection + Backchannel Logout, supporting unified login across two WeChat mini-programs, the official website (user and admin sides), the skin-analysis sub-site (user and admin sides), and the BA authorization verification platform (admin side).",
      },
      {
        title: "Security Hardening:",
        body: "Supports secret rotation, token revocation (RFC 7009), and multi-instance blacklist sharing for a maintainable and auditable auth system.",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD AI Skincare Advisor System",
    displayName: "AI Skincare Advisor System",
    date: "Jan 2026 – Present",
    owner: "Independently led product, interaction, and full-stack development, deployment, and operations, with UI visual design in collaboration",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "AI skincare advisor for consumers: dual-channel skin analysis via questionnaire + face scan, personalized product recommendations based on skin type, season and region, with reports and profiles passed to WeCom advisors — closing the loop from analysis to regimen, follow-up and repurchase; 93 API routes / 531 tests.",
    details: [
      {
        title: "AI Skin Analysis & Personalized Recommendations:",
        body: "Integrated Tongyi Qianwen VL / DeepSeek LLMs for dual-channel (questionnaire + facial scan) skin analysis; a custom rule engine scores and matches products against 8 skin types plus seasonal / regional environmental factors, configurable through a visual admin console so operations teams can adjust without code.",
      },
      {
        title: "Conversion & Attribution:",
        body: "Led model integration and core API development; e-commerce outbound links (Tmall / Douyin / Xiaohongshu / WeChat Shop) support UTM / pid tracking and click-event instrumentation, forming an attributable consultation-to-conversion path together with WeCom advisor short links.",
      },
      {
        title: "Growth & Membership Operations:",
        body: "Integrated four-tier member skin-analysis quotas (Standard: 10 lifetime sessions; Silver: base 10 + 20 per ¥1,000 spent; Gold / Diamond: unlimited total; all paid tiers: max 10/day), with reports and profiles tied to the logged-in account; designed share posters, channel ref attribution, and registration-conversion popups, and exported desensitized aggregate CSV statistics to inform the brand whitepaper and market insights.",
      },
      {
        title: "AI Cost & Reliability Engineering:",
        body: "Designed an AI request queue with concurrency control, circuit breakers, daily / monthly token and cost budget caps, persisted per-call billing, and a model whitelist with provider fallback; used idempotent retries and quota reservation / release to prevent duplicate charges; skin profiles have a rolling 90-day validity with retest prompts, full reports are retained for 365 days, and hot / cold tiered storage keeps the latest 10 full reports plus desensitized cold-tier summaries for up to 3 years.",
      },
      {
        title: "Data Asset Loop:",
        body: "Designed a server-to-server API with HMAC signatures + IP rate limiting; skin-analysis reports and skincare profiles are passed to WeCom AI customer service via session_id, turning one-off skin tests into user data assets that support ongoing engagement and repeat purchases.",
      },
      {
        title: "Search & AI Discoverability (SEO / GEO / AEO):",
        body: "Configured Organization / WebApplication / FAQPage / Breadcrumb JSON-LD, AI crawler allowlist, sitemap, llms.txt / llms-full.txt, and 10 FAQ answers for the standalone skin-analysis site, with Google / Baidu site verification.",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "WeCom AI Customer Service",
    date: "Aug 2026",
    owner: "Independently led product, full-stack development, deployment, and operations",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "WeCom AI customer service built with FastAPI + Redis + DeepSeek: unifies three message entry points (WeCom customer service, WeCom app, and WeChat Official Account), supports smart human handoff, inherits skincare profiles, and provides 7×24 companion-style follow-up; 44KB brand FAQ knowledge base, 34 golden regression cases, 340+ automated tests, and PIPL-compliant PII export/deletion.",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD Authorization & Verification Platform",
    date: "Apr 2026 – May 2026",
    owner: "Independently led product, design, full-stack development, deployment, and operations",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "Dealer authorization management and anti-counterfeit verification platform built with Next.js 16 + PostgreSQL: two-level review workflow and certificate state machine, Canvas + jsPDF real-time synthesis of authorization certificates with e-seal and dynamic QR codes; public verification with three-tier fallback matching and camera QR scanning, plus counterfeit-report ticketing, JWT blacklisting, and operation audit.",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD AI Skin Analysis Mini-Program",
    date: "Oct 2026 – Present",
    owner: "Independently led product, design, mini-program development, deployment, and operations",
    summary:
      "WeChat mini-program version of the skin-analysis flow: 14 pages, with WeChat VisionKit and 106 keypoints for four-step pose guidance (front / right / left / chin-up) and auto-capture; async analysis polling, Canvas 2D 10-dimension radar chart and skin trend curve, dynamic score poster, and retest subscription messages.",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD Member Center Mini-Program",
    date: "Oct 2026 – Present",
    owner: "Independently led product, mini-program development, deployment, and operations",
    summary:
      "19-page member center mini-program in native TypeScript: WeChat one-click login, member tiers and upgrade progress, points balance and transactions, gift redemption (requestId idempotency), address book, SF Express tracking, manual purchase record entry, security center, and account deletion; connects directly to the official website's OAuth 2.0 and business APIs with no custom backend.",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today Brand Website",
    date: "Jan 2026 – Feb 2026",
    owner: "Independently led product, design, full-stack development, AIGC visuals, deployment, and operations",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "B2B website for the AI skin-analysis platform built with Next.js 16 + Tailwind CSS v4: product capability showcase, three business-model landing pages (API integration / white-label / strategic partnership), and API documentation; partnership inquiries pushed to a WeCom bot in real time, with a custom design system, light/dark themes, and AIGC visual assets.",
  },
];
