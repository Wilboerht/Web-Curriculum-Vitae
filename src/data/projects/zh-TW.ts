import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "項目經歷",
  githubLabel: "GitHub 首頁",
  githubAria: "前往 GitHub 首頁",
  detailsLabel: "查看詳情",
  detailsAriaPrefix: "查看詳情：",
  moreLabel: "展開更多項目",
  lessLabel: "收起項目",
  backLabel: "返回履歷",
  personName: "王泓坤",
  reportLabel: "專案報告",
  languageLabel: "語言",
  headingsLabel: "標題",
  overviewLabel: "專案概述",
  detailsSectionLabel: "專案詳情",
  infoLabel: "專案資訊",
  roleLabel: "角色",
  timelineLabel: "時間",
  websiteLabel: "網站",
  printWarning: "本履歷含個人隱私資訊，僅限招聘評估使用，未經授權禁止儲存、轉發或用於其他用途。",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD 中國官網",
    displayName: "中國官網",
    date: "2025.11 – 至今",
    owner: "產品、UI/UX、全棧開發與部署維運獨立負責",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "品牌在中國市場的官網與會員平台：整合產品展示、電商導購、會員積分與測膚檔案，統一微信、抖音、手機號等多來源帳號；支撐品牌線上零售從零上線與回購，205 API / 51 模型 / 2,100+ 測試（官網單系統）。",
    details: [
      {
        title: "品牌官網與會員平台：",
        body: "基於 Next.js 16 + Prisma + PostgreSQL 建構品牌官網與會員平台 — 產品陳列、第三方電商導購（天貓 / 抖音 / 小紅書 / 微信小店外鏈 + GA 事件追蹤）、會員等級、積分帳本、積分兌禮（對接順豐物流軌跡）、線下消費補錄、測膚檔案與帳號安全中心；聚合微信、抖音、手機號驗證碼等多來源身分至統一帳號體系；全站 205 個 API 路由、51 個資料模型、2,100+ 個自動化測試用例（該單系統）。",
      },
      {
        title: "產品與互動設計：",
        body: "獨立負責產品設計並輸出 PRD；資訊架構、互動與 UI/UX 設計獨立完成，並以程式碼直接落地。基於 Framer Motion + View Transitions 實現多步驟護膚流程指南與沉浸式品牌敘事，整合產品抽屜（drawer）與詳情頁連動，全端響應式適配。",
      },
      {
        title: "管理後台與安全治理：",
        body: "搭建覆蓋產品 / 分類 / 會員 / 積分兌禮 / 線下消費補錄 / 招聘職位 / 訊息 / OAuth 客戶端的管理後台（Tiptap 富文字），配套 TOTP 雙因素認證（2FA）與敏感操作二次驗證（Step-up）、操作稽核與每日完整性校驗錨點、定時任務、基於資料庫的持久化限流及 Webhook 失敗重試；實現 SEO / GEO（生成式引擎優化；sitemap / JSON-LD / llms.txt / 百度推送）。",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD 統一認證平台（SSO / OIDC）",
    displayName: "統一認證平台（SSO / OIDC）",
    date: "2026.07 – 至今",
    owner: "產品、全棧開發與部署維運獨立負責",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "品牌大中華區的統一身份基礎設施：自建 OAuth 2.0 / OIDC 單一簽入，覆蓋 5 個系統——兩個微信小程式、官網（使用者端 / 管理端）、測膚子站（使用者端 / 管理端）與 BA 授權驗真平台（管理端）；實現跨系統單一登入（免重複登入）與全域登出；管理後台支援 TOTP 雙因素認證（2FA），並封裝為可複用 npm SDK。",
    details: [
      {
        title: "協定實現：",
        body: "自建 OAuth 2.0 / OIDC 單一登入，與官網主站同域部署，主站作為 Authorization Server 簽發 JWT（RS256），完整實現 authorize / token / userinfo / introspect / revoke / end-session 協定端點，支援 PKCE、DPoP；管理後台支援 TOTP 雙因素認證（2FA）。",
      },
      {
        title: "SDK 與接入：",
        body: "封裝並發布 npm SDK（@nihplod/sso-sdk / @nihplod/sso-verify），供子專案在數分鐘內完成接入；透過 Token Introspection + Backchannel Logout 實現跨系統單一登入與全域登出，支撐兩個微信小程式、官網（使用者端 / 管理端）、測膚子站（使用者端 / 管理端）與 BA 授權驗真平台（管理端）統一登入。",
      },
      {
        title: "安全加固：",
        body: "支援金鑰輪換、Token 撤銷（RFC 7009）與多實例黑名單共用，保障認證體系便於維運與稽核。",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD AI 護膚顧問系統",
    displayName: "AI 護膚顧問系統",
    date: "2026.01 – 至今",
    owner: "產品、互動、全棧開發與部署維運獨立負責，UI 視覺設計協作完成",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "面向消費者的 AI 護膚顧問：以「問卷 + 面部掃描」雙通道完成肌膚分析，結合膚質 / 季節 / 地域規則生成個人化產品方案，並將報告與檔案同步至企業微信（企微）顧問，形成「測膚 → 方案 → 跟進 → 回購」閉環；93 API / 531 測試。",
    details: [
      {
        title: "AI 測膚與個人化推薦：",
        body: "接入通義千問 VL / DeepSeek 大模型實現「問卷 + 面部掃描」雙通道皮膚分析；自研規則引擎按 8 種膚質類型與季節 / 地域環境因子評分並匹配產品，支援後台視覺化配置，營運無需撰寫程式碼即可調整。",
      },
      {
        title: "轉化與歸因：",
        body: "主導模型整合與核心介面開發；電商外鏈（天貓 / 抖音 / 小紅書 / 微信小店）支援 UTM / pid 追蹤與點擊事件埋點，結合企微顧問短鏈形成可歸因的諮詢轉化鏈路。",
      },
      {
        title: "增長與會員營運：",
        body: "整合四檔會員測膚配額（一般會員終身 10 次；銀卡基礎 10 次 + 每消費滿 ¥1,000 贈 20 次；金卡 / 鑽石不限總量；所有付費會員每日最多 10 次），並將報告與檔案綁定登入帳號；設計分享海報、渠道 ref 歸因與註冊轉化彈窗，並輸出去識別化群體統計 CSV，為品牌白皮書與市場洞察提供數據支持。",
      },
      {
        title: "AI 成本與可靠性工程：",
        body: "設計 AI 請求佇列與併發控制、熔斷器、日/月 Token 與費用預算上限、呼叫計費持久化記錄、模型白名單與供應商回退（Provider Fallback）；透過冪等重試與額度預佔 / 釋放機制避免重複扣費；肌膚檔案採用 90 天滾動有效期，到期提示複測；完整報告保留 365 天，並按冷熱分層儲存（熱層保留最近 10 條完整報告，冷層去識別化摘要最長保留 3 年）。",
      },
      {
        title: "資料資產閉環：",
        body: "設計 HMAC 簽名 + IP 限流的伺服器端到伺服器端（S2S）介面，測膚報告與護膚檔案透過 session_id 同步至企業微信（企微）AI 客服，將一次性測膚轉化為可持續營運、可驅動回購的使用者資料資產。",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "企微 AI 客服",
    date: "2026.08",
    owner: "產品、全棧開發與部署維運獨立負責",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "基於 FastAPI + Redis + DeepSeek 的企業微信 AI 客服：統一企微客服、企微應用與公眾號三個入口，支援智慧轉人工、護膚檔案繼承與 7×24 陪伴式跟進；44KB 品牌 FAQ 知識庫、34 條金標回歸用例、340+ 自動化測試，並滿足 PIPL 個人資訊匯出與刪除要求。",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD 授權驗真平台",
    date: "2026.04 – 2026.05",
    owner: "產品、設計、全棧開發與部署維運獨立負責",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "經銷商授權管理與防偽驗真平台：基於 Next.js 16 + PostgreSQL，實現兩級審核工作流與證書狀態機，Canvas + jsPDF 即時合成帶電子印章與動態 QR Code 的授權證書；公開驗真支援三級降級匹配與拍照掃碼，配套防偽舉報工單、JWT 黑名單與操作稽核。",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD AI 測膚小程式",
    date: "2026.10 – 至今",
    owner: "產品、設計、小程式開發與部署維運獨立負責",
    summary:
      "測膚 H5 的微信小程式版：14 個頁面，基於微信 VisionKit 106 個關鍵點實現正臉 / 右側 / 左側 / 抬下巴四步姿態引導與自動抓拍；非同步分析輪詢、Canvas 2D 十維雷達圖與肌膚趨勢曲線、動態評分海報與複測訂閱訊息。",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD 會員中心小程式",
    date: "2026.10 – 至今",
    owner: "產品、小程式開發與部署維運獨立負責",
    summary:
      "原生 TypeScript 會員中心小程式：19 個頁面，涵蓋微信一鍵登入、會員等級與升級進度、積分餘額與流水、積分兌禮（requestId 冪等）、地址簿、順豐物流、線下消費補錄、安全中心與帳號註銷；直連官網 OAuth 2.0 與業務 API，無自建後端。",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today 品牌官網",
    date: "2026.01 – 2026.02",
    owner: "產品、設計、全棧開發、AIGC 視覺與部署維運獨立負責",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "AI 測膚平台的 B2B 官網：基於 Next.js 16 + Tailwind CSS v4，涵蓋產品能力展示、API 接入 / 白標定製 / 策略合作三類落地頁與 API 文件；合作諮詢表單即時推送企微機器人，配套品牌設計系統、明暗主題與 AIGC 視覺素材。",
  },
];
