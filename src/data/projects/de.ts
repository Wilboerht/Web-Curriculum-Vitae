import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "Projekte",
  githubLabel: "Mehr auf GitHub ansehen",
  githubAria: "Mehr auf GitHub ansehen",
  detailsLabel: "Details ansehen",
  detailsAriaPrefix: "Details ansehen: ",
  moreLabel: "Weitere Projekte anzeigen",
  lessLabel: "Weniger anzeigen",
  backLabel: "Zurück zum Lebenslauf",
  personName: "Hongkun Wang",
  reportLabel: "Projektbericht",
  languageLabel: "Sprache",
  headingsLabel: "Überschriften",
  overviewLabel: "Überblick",
  detailsSectionLabel: "Projektdetails",
  infoLabel: "Projektinformationen",
  roleLabel: "Rolle",
  timelineLabel: "Zeitraum",
  websiteLabel: "Website",
  stackLabel: "Tech-Stack",
  printWarning: "Dieser Lebenslauf enthält persönliche Daten und ist ausschließlich für die Bewertung im Rahmen von Einstellungsverfahren bestimmt. Unbefugte Speicherung, Weitergabe oder sonstige Nutzung ist untersagt.",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD Offizielle China-Website",
    displayName: "Offizielle China-Website",
    date: "Nov. 2025 – heute",
    owner: "Produkt, UI/UX, Full-Stack-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "Markenwebsite und Mitgliederplattform für den China-Markt: verbindet Produktpräsentation, E-Commerce-Verlinkung, Mitgliederpunkte und Hautprofile in einem integrierten Erlebnis, vereinheitlicht WeChat-, Douyin- und Telefonnummern-Identitäten und unterstützt den Online-Handel von Grund auf sowie Wiederkäufe; 205 API-Routen / 51 Modelle / 2.100+ Tests (dieses System allein).",
    details: [
      {
        title: "Markenwebsite & Mitgliederplattform:",
        body: "Die offizielle Markenwebsite und Mitgliederplattform mit Next.js 16 + Prisma + PostgreSQL aufgebaut — Produktpräsentation, Drittanbieter-E-Commerce-Verlinkung (Tmall / Douyin / Xiaohongshu / WeChat Shop + GA-Event-Tracking), Mitgliedsstufen, Punktejournal, Punkte-Einlösung (SF-Express-Tracking), manuelle Erfassung von Offline-Käufen, Hautprofile und ein Kontosicherheitszentrum; WeChat-, Douyin- und Telefon-OTP-Identitäten in einem einheitlichen Kontosystem zusammengeführt — 205 API-Routen, 51 Datenmodelle und 2.100+ automatisierte Testfälle (dieses System allein).",
      },
      {
        title: "Produkt- & Interaktionsdesign:",
        body: "Produktdesign eigenverantwortlich übernommen und PRD erstellt; Informationsarchitektur, Interaktion und UI/UX-Design eigenverantwortlich umgesetzt und direkt im Code realisiert. Mehrstufige Hautpflegeritual-Guides und immersives Marken-Storytelling mit Framer Motion + View Transitions umgesetzt, den Produkt-Drawer mit den Detailseiten verknüpft und vollständig responsive Layouts geliefert.",
      },
      {
        title: "Admin-Konsole & Sicherheits-Governance:",
        body: "Eine Admin-Konsole für Produkte / Kategorien / Mitglieder / Punkte-Einlösung / manuelle Erfassung von Offline-Käufen / Stellenanzeigen / Nachrichten / OAuth-Clients (Tiptap Rich Text) aufgebaut, mit TOTP-Zwei-Faktor-Authentifizierung und Step-up-Verifizierung für sensible Aktionen, Audit-Logs und täglichen Integritätsprüfungen, geplanten Jobs, datenbankgestütztem Rate-Limiting und Wiederholungsversuchen bei fehlgeschlagenen Webhooks.",
      },
      {
        title: "Suche & KI-Auffindbarkeit (SEO / GEO / AEO):",
        body: "SEO / GEO / AEO umgesetzt (generative & answer engine optimization; dynamische Sitemap, KI-Crawler-Allowlist & Content-Signal, Organization-/Product-/FAQ-/HowTo-JSON-LD, llms.txt / llms-full.txt, produktspezifische GEO-FAQs (bis zu 20, im Admin-Bereich pflegbar mit regelbasiertem Fallback), Baidu-Push & IndexNow).",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD Plattform für einheitliche Authentifizierung (SSO / OIDC)",
    displayName: "Plattform für einheitliche Authentifizierung (SSO / OIDC)",
    date: "Juli 2026 – heute",
    owner: "Produkt, Full-Stack-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "Die einheitliche Identitätsbasis für Greater China: ein selbst entwickeltes OAuth 2.0 / OIDC Single Sign-on für 5 Systeme — zwei WeChat-Mini-Programme, die offizielle Website (Nutzer- und Admin-Seite), die Hautanalyse-Subsite (Nutzer- und Admin-Seite) und die BA-Autorisierungsprüfungsplattform (Admin-Seite); es ermöglicht systemübergreifendes Login und globales Logout, die Admin-Konsolen sind durch TOTP-2FA geschützt – verpackt als wiederverwendbares npm-SDK.",
    details: [
      {
        title: "Protokoll-Implementierung:",
        body: "Self-hosted OAuth 2.0 / OIDC-SSO aufgebaut, auf derselben Domain wie die offizielle Hauptseite betrieben — die Hauptseite fungiert als Authorization Server und stellt RS256-JWTs aus; die Endpunkte authorize / token / userinfo / introspect / revoke / end-session vollständig implementiert, inkl. PKCE und DPoP; die Admin-Konsole ist durch TOTP-Zwei-Faktor-Authentifizierung geschützt.",
      },
      {
        title: "SDK & Integration:",
        body: "npm-SDKs (@nihplod/sso-sdk / @nihplod/sso-verify) verpackt und veröffentlicht, sodass Teilprojekte innerhalb von Minuten integriert werden können; mit Token Introspection + Backchannel Logout für systemübergreifendes SSO und globales Logout — einheitlicher Login für zwei WeChat-Mini-Programme, die offizielle Website (Nutzer- und Admin-Seite), die Hautanalyse-Subsite (Nutzer- und Admin-Seite) und die BA-Autorisierungsprüfungsplattform (Admin-Seite).",
      },
      {
        title: "Sicherheits-Härtung:",
        body: "Unterstützt Secret-Rotation, Token-Widerruf (RFC 7009) und Multi-Instanz-Blacklist-Sharing für ein wartbares und auditierbares Authentifizierungssystem.",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD KI-Hautpflegeberater",
    displayName: "KI-Hautpflegeberater",
    date: "Jan. 2026 – heute",
    owner: "Produkt, Interaktion, Full-Stack-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet, UI-Visualdesign in Zusammenarbeit",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "Ein KI-Hautpflegeberater für Verbraucher: zweikanalige Hautanalyse per Fragebogen + Gesichtsscan, personalisierte Produktempfehlungen nach Hauttyp, Jahreszeit und Region sowie Übergabe von Berichten und Profilen an WeCom-Berater – geschlossener Kreislauf von Analyse über Pflegeplan und Follow-up bis zum Wiederkauf; 93 API-Routen / 531 Tests.",
    details: [
      {
        title: "KI-Hautanalyse & personalisierte Empfehlungen:",
        body: "Qwen VL / DeepSeek-LLMs für die zweikanalige Hautanalyse (Fragebogen + Gesichtsscan) integriert; eine eigene Regel-Engine bewertet Produkte anhand von 8 Hauttypen sowie saisonalen / regionalen Umweltfaktoren — über eine visuelle Admin-Konsole konfigurierbar, sodass das Betriebsteam ohne Programmieraufwand anpassen kann.",
      },
      {
        title: "Conversion & Attribution:",
        body: "Modellintegration und Entwicklung der Kern-APIs geleitet; E-Commerce-Ausgangslinks (Tmall / Douyin / Xiaohongshu / WeChat Shop) unterstützen UTM-/pid-Tracking und Click-Event-Instrumentierung und bilden zusammen mit WeCom-Berater-Kurzlinks einen attribuierbaren Beratungs-Conversion-Pfad.",
      },
      {
        title: "Wachstum & Mitgliederbetrieb:",
        body: "Vierstufige Hautanalyse-Kontingente für Mitglieder integriert (Standard: 10 lebenslange Sitzungen; Silber: Basis 10 + 20 pro ¥1.000 Umsatz; Gold / Diamant: unbegrenzt insgesamt; alle bezahlten Stufen: max. 10/Tag), Berichte und Profile an das angemeldete Konto gebunden; Teilen-Poster, Kanal-ref-Attribution und Registrierungs-Conversion-Popups gestaltet sowie anonymisierte aggregierte CSV-Statistiken für Marken-Whitepaper und Markt-Insights exportiert.",
      },
      {
        title: "KI-Kosten- & Zuverlässigkeits-Engineering:",
        body: "KI-Anfragewarteschlange mit Nebenläufigkeitskontrolle, Circuit Breaker, Tages-/Monatslimits für Tokens und Kosten, persistenter Abrechnung pro Aufruf sowie Modell-Whitelist mit Anbieter-Fallback entworfen; idempotente Wiederholungsversuche und Kontingent-Reservierung / -Freigabe verhindern Doppelbelastungen; Hautprofile haben eine rollierende 90-Tage-Gültigkeit mit Retest-Hinweisen, vollständige Berichte werden 365 Tage aufbewahrt, und die zweistufige Archivierung (heiß/kalt) behält die letzten 10 vollständigen Berichte sowie anonymisierte Cold-Tier-Zusammenfassungen für bis zu 3 Jahre.",
      },
      {
        title: "Datenasset-Kreislauf:",
        body: "Eine Server-zu-Server-API mit HMAC-Signaturen + IP-Rate-Limiting entworfen; Hautanalyse-Berichte und Hautpflegeprofile werden per session_id an den WeCom-KI-Kundenservice übergeben — einmalige Hauttests werden so zu dauerhaft nutzbaren Datenassets, die Wiederholungskäufe fördern.",
      },
      {
        title: "Suche & KI-Auffindbarkeit (SEO / GEO / AEO):",
        body: "Für die eigenständige Hautanalyse-Site Organization-/WebApplication-/FAQPage-/Breadcrumb-JSON-LD, KI-Crawler-Allowlist, Sitemap, llms.txt / llms-full.txt und 10 FAQ-Antworten konfiguriert sowie Google-/Baidu-Site-Verification abgeschlossen.",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "WeCom-KI-Kundenservice",
    date: "Aug. 2026",
    owner: "Produkt, Full-Stack-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "WeCom-KI-Kundenservice mit FastAPI + Redis + DeepSeek: vereint drei Nachrichteneingänge (WeCom-Kundenservice, WeCom-App und WeChat Official Account), unterstützt intelligente Übergabe an Menschen, übernimmt Hautpflegeprofile und bietet 7×24-Begleitung; 44KB Marken-FAQ-Wissensbasis, 34 Golden-Regressionfälle, 340+ automatisierte Tests und PIPL-konforme Export-/Löschfunktionen für personenbezogene Daten.",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD Autorisierungs- und Verifizierungsplattform",
    date: "Apr. 2026 – Mai 2026",
    owner: "Produkt, Design, Full-Stack-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "Händlerautorisierungs- und Fälschungsschutzplattform mit Next.js 16 + PostgreSQL: zweistufiger Prüf-Workflow und Zertifikats-Zustandsmaschine, Canvas + jsPDF zur Echtzeit-Erzeugung von Autorisierungszertifikaten mit E-Siegel und dynamischem QR-Code; öffentliche Verifizierung mit dreistufigem Fallback-Matching und Kamera-QR-Scan, plus Fälschungsmelde-Tickets, JWT-Blacklisting und Audit-Logging.",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD KI-Hautanalyse-Mini-Programm",
    date: "Okt. 2026 – heute",
    owner: "Produkt, Design, Mini-Programm-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    summary:
      "WeChat-Mini-Programm-Version des Hautanalyse-Flows: 14 Seiten, mit WeChat VisionKit und 106 Keypoints für vierstufige Positivierungsführung (vorne / rechts / links / Kinn hoch) und automatische Aufnahme; asynchrone Analyse-Abfragen, Canvas-2D-Radar-Diagramm mit 10 Dimensionen und Hauttrendkurve, dynamisches Score-Poster und Retest-Abo-Nachrichten.",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD Mitgliedercenter-Mini-Programm",
    date: "Okt. 2026 – heute",
    owner: "Produkt, Mini-Programm-Entwicklung, Deployment und Betrieb eigenverantwortlich geleitet",
    summary:
      "19-seitiges Mitgliedercenter-Mini-Programm in nativem TypeScript: WeChat-One-Click-Login, Mitgliedsstufen und Upgrade-Fortschritt, Punktestand und -verlauf, Geschenk-Einlösung (requestId-Idempotenz), Adressbuch, SF-Express-Tracking, manuelle Erfassung von Offline-Käufen, Sicherheitszentrum und Kontolöschung; direkte Anbindung an OAuth 2.0 und Business-APIs der offiziellen Website ohne eigenes Backend.",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today Markenwebsite",
    date: "Jan. 2026 – Feb. 2026",
    owner: "Produkt, Design, Full-Stack-Entwicklung, AIGC-Visuals, Deployment und Betrieb eigenverantwortlich geleitet",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "B2B-Website der KI-Hautanalyseplattform mit Next.js 16 + Tailwind CSS v4: Produktpräsentation, drei Landingpages für Geschäftsmodelle (API-Integration / White-Label / strategische Partnerschaft) und API-Dokumentation; Partnerschaftsanfragen werden in Echtzeit an einen WeCom-Bot gesendet, ergänzt durch ein Marken-Designsystem, helles/dunkles Theme und AIGC-Visualassets.",
  },
];
