import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "项目经历",
  githubLabel: "GitHub 主页",
  githubAria: "前往 GitHub 主页",
  detailsLabel: "查看详情",
  detailsAriaPrefix: "查看详情：",
  moreLabel: "展开更多项目",
  lessLabel: "收起项目",
  backLabel: "返回简历",
  personName: "王泓坤",
  reportLabel: "项目报告",
  languageLabel: "语言",
  headingsLabel: "标题",
  overviewLabel: "项目概述",
  detailsSectionLabel: "项目详情",
  infoLabel: "项目信息",
  roleLabel: "角色",
  timelineLabel: "时间",
  websiteLabel: "网站",
  stackLabel: "技术栈",
  printWarning: "本简历含个人隐私信息，仅限招聘评估使用，未经授权禁止存储、转发或用于其他用途。",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD 中国官网",
    displayName: "中国官网",
    date: "2025.11 – 至今",
    owner: "产品、UI/UX、全栈开发与部署运维独立负责",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "品牌在中国市场的官网与会员平台：整合产品展示、电商导购、会员积分与测肤档案，统一微信、抖音、手机号等多来源账号；支撑品牌线上零售从零上线与复购，205 API / 51 模型 / 2,100+ 测试（官网单系统）。",
    details: [
      {
        title: "品牌官网与会员平台：",
        body: "基于 Next.js 16 + Prisma + PostgreSQL 构建品牌官网、产品陈列与第三方电商导购（天猫 / 抖音 / 小红书 / 微信小店外链 + GA 事件追踪），并实现会员等级、积分账本、积分兑礼（对接顺丰物流轨迹）、线下消费补录、测肤档案与账号安全中心；聚合微信、抖音、手机号验证码等多来源身份至统一账号体系；全站 205 个 API 路由、51 个数据模型、2,100+ 个自动化测试用例（该单系统）。",
      },
      {
        title: "产品与交互设计：",
        body: "独立负责产品设计并输出 PRD；信息架构、交互与 UI/UX 设计独立完成，并以代码直接落地。基于 Framer Motion + View Transitions 实现多步骤护肤流程指南与沉浸式品牌叙事，集成产品抽屉（drawer）与详情页联动，全端响应式适配。",
      },
      {
        title: "管理后台与安全治理：",
        body: "搭建覆盖产品 / 分类 / 会员 / 积分兑礼 / 线下消费补录 / 招聘职位 / 消息 / OAuth 客户端的管理后台（Tiptap 富文本），配套 TOTP 双因素认证（2FA）与敏感操作二次验证（Step-up）、操作审计与每日完整性校验锚点、定时任务、基于数据库的持久化限流及 Webhook 失败重试。",
      },
      {
        title: "搜索与 AI 可发现性（SEO / GEO / AEO）：",
        body: "实现 SEO / GEO / AEO（生成式与答案引擎优化；动态 sitemap、AI 爬虫白名单与 Content-Signal、Organization / Product / FAQ / HowTo JSON-LD、llms.txt / llms-full.txt、产品级 GEO FAQ（最多 20 组，后台可编辑 + 规则兜底）、百度推送与 IndexNow）。",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD 统一认证平台（SSO / OIDC）",
    displayName: "统一认证平台（SSO / OIDC）",
    date: "2026.07 – 至今",
    owner: "产品、全栈开发与部署运维独立负责",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "品牌大中华区的统一身份基础设施：自建 OAuth 2.0 / OIDC 单点登录，覆盖 5 个系统——两个微信小程序、官网（用户端 / 管理端）、测肤子站（用户端 / 管理端）与 BA 授权验真平台（管理端）；实现跨系统单点登录（免重复登录）与全局登出；管理后台支持 TOTP 双因素认证（2FA），并封装为可复用 npm SDK。",
    details: [
      {
        title: "协议实现：",
        body: "自建 OAuth 2.0 / OIDC 单点登录，与官网主站同域部署，主站作为 Authorization Server 签发 JWT（RS256），完整实现 authorize / token / userinfo / introspect / revoke / end-session 协议端点，支持 PKCE、DPoP；管理后台支持 TOTP 双因素认证（2FA）。",
      },
      {
        title: "SDK 与接入：",
        body: "封装并发布 npm SDK（@nihplod/sso-sdk / @nihplod/sso-verify），供子项目在数分钟内完成接入；通过 Token Introspection + Backchannel Logout 实现跨系统单点登录与全局登出，支撑两个微信小程序、官网（用户端 / 管理端）、测肤子站（用户端 / 管理端）与 BA 授权验真平台（管理端）统一登录。",
      },
      {
        title: "安全加固：",
        body: "支持密钥轮换、Token 撤销（RFC 7009）与多实例黑名单共享，保障认证体系便于运维与审计。",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD AI 护肤顾问系统",
    displayName: "AI 护肤顾问系统",
    date: "2026.01 – 至今",
    owner: "产品、交互、全栈开发与部署运维独立负责，UI 视觉设计协作完成",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "面向消费者的 AI 护肤顾问：以「问卷 + 面部扫描」双通道完成皮肤分析，结合肤质 / 季节 / 地域规则生成个性化产品方案，并将报告与档案同步至企业微信（企微）顾问，形成「测肤 → 方案 → 跟进 → 复购」闭环；93 API / 531 测试。",
    details: [
      {
        title: "AI 测肤与个性化推荐：",
        body: "接入通义千问 VL / DeepSeek 大模型实现「问卷 + 面部扫描」双通道皮肤分析；自研规则引擎按 8 种肤质类型与季节 / 地域环境因子评分并匹配产品，支持后台可视化配置，运营无需编写代码即可调整。",
      },
      {
        title: "转化与归因：",
        body: "主导模型集成与核心接口开发；电商外链（天猫 / 抖音 / 小红书 / 微信小店）支持 UTM / pid 追踪与点击事件埋点，结合企微顾问短链形成可归因的咨询转化链路。",
      },
      {
        title: "增长与会员运营：",
        body: "整合四档会员测肤配额（普通会员终身 10 次；银卡基础 10 次 + 每消费满 ¥1,000 赠 20 次；金卡 / 钻石不限总量；所有付费会员每日最多 10 次），并将报告与档案绑定登录账号；设计分享海报、渠道 ref 归因与注册转化弹窗，并输出脱敏群体统计 CSV，为品牌白皮书与市场洞察提供数据支持。",
      },
      {
        title: "AI 成本与可靠性工程：",
        body: "设计 AI 请求队列与并发控制、熔断器、日/月 Token 与费用预算上限、调用计费持久化记录、模型白名单与供应商回退（Provider Fallback）；通过幂等重试与额度预占 / 释放机制避免重复扣费；肌肤档案采用 90 天滚动有效期，到期提示复测；完整报告保留 365 天，并按冷热分层存储（热层保留最近 10 条完整报告，冷层脱敏摘要最长保留 3 年）。",
      },
      {
        title: "数据资产闭环：",
        body: "设计 HMAC 签名 + IP 限流的服务端到服务端（S2S）接口，测肤报告与护肤档案通过 session_id 同步至企业微信（企微）AI 客服，将一次性测肤转化为可持续运营、可驱动复购的用户数据资产。",
      },
      {
        title: "搜索与 AI 可发现性（SEO / GEO / AEO）：",
        body: "为独立测肤站配置 Organization / WebApplication / FAQPage / Breadcrumb JSON-LD、AI 爬虫白名单、sitemap、llms.txt / llms-full.txt 与 10 组 FAQ 答案内容，并完成 Google / 百度站点验证。",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "企微 AI 客服",
    date: "2026.08",
    owner: "产品、全栈开发与部署运维独立负责",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "基于 FastAPI + Redis + DeepSeek 的企业微信 AI 客服：统一企微客服、企微应用与公众号三个入口，支持智能转人工、护肤档案继承与 7×24 陪伴式跟进；44KB 品牌 FAQ 知识库、34 条金标回归用例、340+ 自动化测试，并满足 PIPL 个人信息导出与删除要求。",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD 授权验真平台",
    date: "2026.04 – 2026.05",
    owner: "产品、设计、全栈开发与部署运维独立负责",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "经销商授权管理与防伪验真平台：基于 Next.js 16 + PostgreSQL，实现两级审核工作流与证书状态机，Canvas + jsPDF 实时合成带电子印章与动态二维码的授权证书；公开验真支持三级降级匹配与拍照扫码，配套防伪举报工单、JWT 黑名单与操作审计。",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD AI 测肤小程序",
    date: "2026.10 – 至今",
    owner: "产品、设计、小程序开发与部署运维独立负责",
    summary:
      "测肤 H5 的微信小程序版：14 个页面，基于微信 VisionKit 106 个关键点实现正脸 / 右侧 / 左侧 / 抬下巴四步姿态引导与自动抓拍；异步分析轮询、Canvas 2D 十维雷达图与肌肤趋势曲线、动态评分海报与复测订阅消息。",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD 会员中心小程序",
    date: "2026.10 – 至今",
    owner: "产品、小程序开发与部署运维独立负责",
    summary:
      "原生 TypeScript 会员中心小程序：19 个页面，覆盖微信一键登录、会员等级与升级进度、积分余额与流水、积分兑礼（requestId 幂等）、地址簿、顺丰物流、线下消费补录、安全中心与账号注销；直连官网 OAuth 2.0 与业务 API，无自建后端。",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today 品牌官网",
    date: "2026.01 – 2026.02",
    owner: "产品、设计、全栈开发、AIGC 视觉与部署运维独立负责",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "AI 测肤平台的 B2B 官网：基于 Next.js 16 + Tailwind CSS v4，覆盖产品能力展示、API 接入 / 白标定制 / 战略合作三类落地页与 API 文档；合作咨询表单实时推送企微机器人，配套品牌设计系统、明暗主题与 AIGC 视觉素材。",
  },
];
