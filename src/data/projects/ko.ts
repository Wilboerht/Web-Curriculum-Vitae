import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "프로젝트",
  githubLabel: "GitHub에서 더 보기",
  githubAria: "GitHub에서 더 보기",
  detailsLabel: "상세 보기",
  detailsAriaPrefix: "상세 보기: ",
  moreLabel: "프로젝트 더 보기",
  lessLabel: "접기",
  backLabel: "이력서로 돌아가기",
  personName: "Hongkun Wang",
  reportLabel: "프로젝트 보고서",
  languageLabel: "언어",
  headingsLabel: "제목",
  overviewLabel: "개요",
  detailsSectionLabel: "프로젝트 상세",
  infoLabel: "프로젝트 정보",
  roleLabel: "역할",
  timelineLabel: "기간",
  websiteLabel: "웹사이트",
  printWarning: "본 이력서에는 개인정보가 포함되어 있으며 채용 평가 목적으로만 사용 가능합니다. 무단 저장, 재배포 또는 기타 용도로의 사용을 금합니다.",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD 중국 공식 사이트",
    displayName: "중국 공식 사이트",
    date: "2025년 11월 – 현재",
    owner: "제품, UI/UX, 풀스택 개발, 배포 및 운영 독립 담당",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "중국 시장을 위한 브랜드 공식 사이트와 멤버십 플랫폼: 상품 전시, 이커머스 연동, 멤버십 포인트, 피부 측정 프로필을 하나의 경험으로 통합하고 위챗·더우인·휴대폰 번호 계정을 통일해 온라인 판매 론칭과 재구매를 지원; 205 API / 51 모델 / 2,100+ 테스트(해당 단일 시스템).",
    details: [
      {
        title: "브랜드 공식 사이트 & 멤버십 플랫폼:",
        body: "Next.js 16 + Prisma + PostgreSQL 기반으로 브랜드 공식 사이트와 멤버십 플랫폼 구축 — 상품 진열, 외부 전자상거래 연동(티몰 / 도우인 / 샤오홍슈 / 위챗 샵 링크 + GA 이벤트 추적), 회원 등급, 포인트 원장, 포인트 교환(순펑 물류 추적), 오프라인 구매 내역 수동 등록, 피부 프로필 및 계정 보안 센터; 위챗·도우인·휴대폰 OTP 등 다중 채널 신원을 통합 계정 체계로 통합 — 전 사이트 205개 API 라우트, 51개 데이터 모델, 2,100+개 자동화 테스트 케이스(해당 단일 시스템).",
      },
      {
        title: "제품 & 인터랙션 디자인:",
        body: "제품 기획(PRD)을 독립적으로 작성하고 제품 디자인을 주도; 정보 아키텍처, 인터랙션, UI/UX 디자인을 독립적으로 완성하고 코드로 직접 구현. Framer Motion + View Transitions로 다단계 스킨케어 리추얼 가이드와 몰입형 브랜드 스토리텔링을 구현하고 제품 드로어와 상세 페이지를 연동, 전 기기 반응형 레이아웃 제공.",
      },
      {
        title: "관리자 콘솔 & 보안 거버넌스:",
        body: "상품 / 카테고리 / 회원 / 포인트 교환 / 오프라인 구매 내역 수동 등록 / 채용 공고 / 메시지 / OAuth 클라이언트를 아우르는 관리자 콘솔(Tiptap 리치 텍스트) 구축, TOTP 2단계 인증과 민감 작업 재인증(Step-up), 감사 로그와 일일 무결성 검증 기준점, 예약 작업, 데이터베이스 기반 레이트 리미팅, 웹훅 실패 재시도; SEO / GEO(생성형 엔진 최적화; sitemap / JSON-LD / llms.txt / 바이두 푸시) 구현.",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD 통합 인증 플랫폼(SSO / OIDC)",
    displayName: "통합 인증 플랫폼(SSO / OIDC)",
    date: "2026년 7월 – 현재",
    owner: "제품, 풀스택 개발, 배포 및 운영 독립 담당",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "중화권의 통합 아이덴티티 기반: 자체 구축한 OAuth 2.0 / OIDC SSO가 5개 시스템 — 위챗 미니프로그램 2종, 공식 사이트(사용자/관리자), 피부 측정 서브사이트(사용자/관리자), BA 인증 검증 플랫폼(관리자) — 을 연결하고 시스템 간 단일 로그인과 글로벌 로그아웃을 지원하며, 관리자 콘솔은 TOTP 2단계 인증으로 보호되고 재사용 가능한 npm SDK로 패키징.",
    details: [
      {
        title: "프로토콜 구현:",
        body: "OAuth 2.0 / OIDC 기반 SSO 자체 구축, 공식 메인 사이트와 동일 도메인에 배포되며 메인 사이트가 Authorization Server로서 RS256 JWT 발급, authorize / token / userinfo / introspect / revoke / end-session 프로토콜 엔드포인트 전체 구현, PKCE·DPoP 지원; 관리자 콘솔은 TOTP 2단계 인증으로 보호.",
      },
      {
        title: "SDK 및 연동:",
        body: "npm SDK(@nihplod/sso-sdk / @nihplod/sso-verify) 패키징·배포로 서브 프로젝트가 몇 분 내 연동할 수 있도록 지원, Token Introspection + Backchannel Logout으로 시스템 간 SSO 및 글로벌 로그아웃 구현, 위챗 미니프로그램 2종, 공식 사이트(사용자/관리자), 피부 측정 서브사이트(사용자/관리자), BA 인증 검증 플랫폼(관리자)의 통합 로그인 지원.",
      },
      {
        title: "보안 강화:",
        body: "키 로테이션, 토큰 취소(RFC 7009), 다중 인스턴스 블랙리스트 공유 지원으로 유지보수와 감사가 용이한 인증 체계 구축.",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD AI 스킨케어 어드바이저 시스템",
    displayName: "AI 스킨케어 어드바이저 시스템",
    date: "2026년 1월 – 현재",
    owner: "제품, 인터랙션, 풀스택 개발, 배포 및 운영 독립 담당, UI 비주얼 디자인 협업",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "소비자용 AI 스킨케어 어드바이저: 설문 + 얼굴 스캔의 듀얼 채널로 피부를 분석하고 피부 타입·계절·지역 규칙에 따라 맞춤 제품 제안을 생성하며, 리포트와 프로필을 위챗워크(WeCom) 어드바이저에게 전달해 「피부 측정 → 솔루션 → 팔로업 → 재구매」 선순환 구조를 완성; 93 API / 531 테스트.",
    details: [
      {
        title: "AI 피부 측정 및 개인화 추천:",
        body: "Tongyi Qianwen VL / DeepSeek LLM 연동으로 「설문 + 얼굴 스캔」 듀얼 채널 피부 분석 구현, 자체 룰 엔진으로 8가지 피부 타입과 계절 / 지역 환경 요인 기반 제품 스코어링(관리자 화면에서 시각적으로 설정해 운영팀이 코드 없이 조정) 지원.",
      },
      {
        title: "전환 및 어트리뷰션:",
        body: "모델 통합 및 핵심 API 개발 주도; 이커머스 링크(티몰 / 도우인 / 샤오홍슈 / 위챗 샵)에 UTM / pid 추적과 클릭 이벤트 계측 지원, 위챗워크 어드바이저 단축 링크와 결합해 어트리뷰션 가능한 상담 전환 경로 구축.",
      },
      {
        title: "성장 및 멤버십 운영:",
        body: "4단계 회원 피부 측정 쿼터 통합(일반: 평생 10회; 실버: 기본 10회 + ¥1,000 소비마다 20회 추가; 골드 / 다이아몬드: 총량 무제한; 모든 유료 등급: 일 최대 10회), 로그인 계정에 리포트와 프로필 연결; 공유 포스터, 채널 ref 어트리뷰션, 가입 전환 팝업 설계 및 비식별 집계 CSV 통계를 브랜드 백서와 시장 인사이트에 제공.",
      },
      {
        title: "AI 비용 및 신뢰성 엔지니어링:",
        body: "AI 요청 큐와 동시성 제어, 서킷 브레이커, 일/월 토큰 및 비용 예산 상한, 호출별 과금 내역 영속화, 모델 화이트리스트와 공급자 폴백 설계; 멱등 재시도와 쿼터 예약 / 해제로 중복 과금 방지; 피부 프로필은 재검사 안내를 위한 90일 롤링 유효기간을 가지며, 전체 리포트는 365일 보관되고 자주/드물게 접근하는 데이터로 계층화해 아카이빙(최근 10건 전체 리포트, 비식별 요약 최대 3년)이 적용됩니다.",
      },
      {
        title: "데이터 자산 선순환:",
        body: "HMAC 서명 + IP 레이트 리미팅 서버 간 API 설계, 피부 측정 리포트와 스킨케어 프로필을 session_id로 위챗워크 AI 고객서비스에 전달, 일회성 측정을 지속 운영 가능하고 재구매를 이끄는 사용자 데이터 자산으로 전환.",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "위챗워크 AI 고객서비스",
    date: "2026년 8월",
    owner: "제품, 풀스택 개발, 배포 및 운영 독립 담당",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "FastAPI + Redis + DeepSeek 기반 위챗워크 AI 고객서비스: 위챗워크 고객서비스, 위챗워크 앱, 위챗 공식 계정의 세 가지 메시지 진입점을 통합하고, 지능형 상담원 전환, 피부 프로필 승계, 7×24 동반형 팔로업을 지원; 44KB 브랜드 FAQ 지식베이스, 34개 골든 회귀 케이스, 340+ 자동화 테스트, PIPL 준수 개인정보 내보내기/삭제 기능.",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD 인증 검증 플랫폼",
    date: "2026년 4월 – 2026년 5월",
    owner: "제품, 디자인, 풀스택 개발, 배포 및 운영 독립 담당",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "대리점 인증 관리 및 위조 방지 검증 플랫폼: Next.js 16 + PostgreSQL 기반, 2단계 심사 워크플로우와 인증서 상태 머신, Canvas + jsPDF로 전자 도장과 동적 QR 코드가 포함된 인증서를 실시간 생성; 공개 검증은 3단계 폴백 매칭과 카메라 QR 스캔을 지원하며, 위조 신고 티켓, JWT 블랙리스트, 작업 감사를 갖춤.",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD AI 피부 측정 미니프로그램",
    date: "2026년 10월 – 현재",
    owner: "제품, 디자인, 미니프로그램 개발, 배포 및 운영 독립 담당",
    summary:
      "피부 측정 H5의 위챗 미니프로그램 버전: 14개 페이지, 위챗 VisionKit과 106개 키포인트로 정면 / 오른쪽 / 왼쪽 / 턱 들기 4단계 자세 안내와 자동 촬영; 비동기 분석 폴링, Canvas 2D 10차원 레이더 차트와 피부 트렌드 곡선, 동적 점수 포스터와 재검사 구독 메시지.",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD 멤버십 센터 미니프로그램",
    date: "2026년 10월 – 현재",
    owner: "제품, 미니프로그램 개발, 배포 및 운영 독립 담당",
    summary:
      "네이티브 TypeScript 멤버십 센터 미니프로그램: 19개 페이지, 위챗 원클릭 로그인, 회원 등급과 승급 진행률, 포인트 잔액과 거래 내역, 포인트 교환(requestId 멱등), 주소록, 순펑 물류, 오프라인 구매 내역 수동 등록, 보안 센터와 계정 삭제를 포함; 공식 사이트의 OAuth 2.0과 비즈니스 API에 직접 연결하며 자체 백엔드가 없음.",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today 브랜드 웹사이트",
    date: "2026년 1월 – 2026년 2월",
    owner: "제품, 디자인, 풀스택 개발, AIGC 비주얼, 배포 및 운영 독립 담당",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "AI 피부 측정 플랫폼의 B2B 웹사이트: Next.js 16 + Tailwind CSS v4 기반, 제품 역량 소개, API 연동 / 화이트 라벨 / 전략 제휴 세 가지 비즈니스 모델 랜딩 페이지와 API 문서; 제휴 문의 폼은 위챗워크 봇으로 실시간 전송되며, 브랜드 디자인 시스템, 라이트/다크 테마, AIGC 비주얼 자산을 갖춤.",
  },
];
