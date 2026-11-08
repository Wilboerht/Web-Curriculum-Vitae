import type { Project, ProjectUi } from "./types";

export const ui: ProjectUi = {
  sectionTitle: "プロジェクト経歴",
  githubLabel: "GitHubでさらに見る",
  githubAria: "GitHubでさらに見る",
  detailsLabel: "詳細を見る",
  detailsAriaPrefix: "詳細を見る：",
  moreLabel: "プロジェクトをさらに表示",
  lessLabel: "折りたたむ",
  backLabel: "履歴書に戻る",
  personName: "王泓坤",
  reportLabel: "プロジェクト報告",
  languageLabel: "言語",
  headingsLabel: "見出し",
  overviewLabel: "概要",
  detailsSectionLabel: "プロジェクト詳細",
  infoLabel: "プロジェクト情報",
  roleLabel: "役割",
  timelineLabel: "期間",
  websiteLabel: "サイト",
  stackLabel: "技術スタック",
  printWarning: "本履歴書には個人情報が含まれており、採用選考の評価のみを目的としています。無断での保存、転送、その他の利用を禁じます。",
};

export const projects: Project[] = [
  {
    slug: "nihplod-website",
    id: "project-website",
    name: "NIHPLOD 中国公式サイト",
    displayName: "中国公式サイト",
    date: "2025年11月 – 現在",
    owner: "プロダクト・UI/UX・フルスタック開発・デプロイ・運用：独立担当",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://nihplod.cn", label: "nihplod.cn" },
    summary:
      "中国市場向けブランドサイト兼会員プラットフォーム。商品紹介、EC誘導、会員ポイント、肌プロフィールを一つの体験に統合し、WeChat・Douyin・電話番号のIDを統一。オンライン販売の立ち上げとリピート購入を支援。205 APIルート / 51データモデル / 2,100件以上のテスト（本システム単体）。",
    details: [
      {
        title: "ブランドサイト・会員プラットフォーム：",
        body: "Next.js 16 + Prisma + PostgreSQLでブランド公式サイトと会員プラットフォームを構築。商品紹介、外部EC誘導（Tmall / Douyin / Xiaohongshu / WeChat Shopリンク + GAイベント計測）、会員ランク、ポイント台帳、ポイント交換（SF Express配送追跡）、購入履歴の後付け登録、肌プロフィール、アカウントセキュリティセンターを実装。WeChat・Douyin・電話番号OTPのIDを統一アカウントに集約。205 APIルート、51データモデル、2,100件以上の自動テストを整備（本システム単体）。",
      },
      {
        title: "プロダクト・インタラクション設計：",
        body: "プロダクトデザインを独立して担当し、PRDを作成。情報アーキテクチャ、インタラクション、UI/UXデザインを独立して行い、コードで直接実装。Framer Motion + View Transitionsによる多段階スキンケアガイドと没入型ブランドストーリーを構築し、商品ドロワーと詳細ページを連携。完全レスポンシブレイアウトを実装。",
      },
      {
        title: "管理画面・セキュリティガバナンス：",
        body: "商品・カテゴリー・会員・ポイント交換・購入履歴の後付け登録・求人情報・メッセージ・OAuthクライアント（Tiptapリッチテキスト）を管理する管理画面を構築。TOTP二要素認証、重要操作の再認証、操作監査ログと日次整合性チェックポイント、定期ジョブ、データベースに永続化するレート制限、Webhook失敗時リトライを実装。",
      },
      {
        title: "検索・AI 可発見性（SEO / GEO / AEO）：",
        body: "SEO / GEO / AEO（生成エンジン・回答エンジン最適化；動的 sitemap、AI クローラー許可リストと Content-Signal、Organization / Product / FAQ / HowTo の JSON-LD、llms.txt / llms-full.txt、製品別 GEO FAQ（最大20件、管理画面で編集可能・ルールベースのフォールバック付き）、Baidu プッシュ / IndexNow）に対応。",
      },
    ],
  },
  {
    slug: "nihplod-sso",
    id: "project-sso",
    name: "NIHPLOD 統合認証プラットフォーム（SSO / OIDC）",
    displayName: "統合認証プラットフォーム（SSO / OIDC）",
    date: "2026年7月 – 現在",
    owner: "プロダクト・フルスタック開発・デプロイ・運用：独立担当",
    logo: "/images/NIHPLOD-logo.svg",
    summary:
      "大中華圏向け統一ID基盤。独自開発のOAuth 2.0 / OIDCシングルサインオンで、5つのシステム——WeChatミニプログラム2種、公式サイト（ユーザー／管理）、肌診断サブサイト（ユーザー／管理）、BA認証検証プラットフォーム（管理）——を接続。システム間シングルサインオンとグローバルログアウトを実現し、管理画面はTOTP二要素認証で保護。再利用可能なnpm SDKとして提供。",
    details: [
      {
        title: "プロトコル実装：",
        body: "セルフホスト型OAuth 2.0 / OIDC SSOを構築し、公式メインサイトと同一ドメインにデプロイ。認可サーバーとしてRS256 JWTを発行し、authorize / token / userinfo / introspect / revoke / end-sessionの各プロトコルエンドポイントを完全実装。PKCEとDPoPに対応し、管理画面はTOTP二要素認証で保護。",
      },
      {
        title: "SDK・システム連携：",
        body: "npm SDK（@nihplod/sso-sdk / @nihplod/sso-verify）をパッケージ化して公開し、各サブプロジェクトへ数分で導入可能に。Token Introspection + Backchannel Logoutによるシステム間SSOとグローバルログアウトを実現し、WeChatミニプログラム2種、公式サイト（ユーザー／管理）、肌診断サブサイト（ユーザー／管理）、BA認証検証プラットフォーム（管理）の統一ログインをサポート。",
      },
      {
        title: "セキュリティ強化：",
        body: "シークレットのローテーション、トークン失効（RFC 7009）、複数インスタンス間のブラックリスト共有に対応し、保守・監査しやすい認証基盤を実現。",
      },
    ],
  },
  {
    slug: "ai-skincare-advisor",
    id: "project-ai-advisor",
    name: "NIHPLOD AIスキンケアアドバイザーシステム",
    displayName: "AIスキンケアアドバイザーシステム",
    date: "2026年1月 – 現在",
    owner: "プロダクト・インタラクション・フルスタック開発・デプロイ・運用：独立担当、UIビジュアルデザインは協働",
    logo: "/images/NIHPLOD-logo.svg",
    link: { href: "https://smart.nihplod.cn", label: "smart.nihplod.cn" },
    summary:
      "消費者向けAIスキンケアアドバイザー。アンケートと顔画像による2チャネルの肌診断、肌質・季節・地域に基づくパーソナライズ商品提案を提供。レポートと肌プロフィールをWeComアドバイザーへ連携し、診断からスキンケア提案、フォローアップ、リピート購入までの循環を実現。93 APIルート / 531テスト。",
    details: [
      {
        title: "AI肌診断・パーソナライズ提案：",
        body: "Tongyi Qianwen VL / DeepSeek LLMを統合し、アンケートと顔画像による2チャネルの肌診断を実現。独自ルールエンジンが8種類の肌タイプと季節・地域の環境要因に基づいて商品を採点・マッチング。ビジュアル管理画面から設定でき、運営担当者がコードなしで調整可能。",
      },
      {
        title: "コンバージョン・アトリビューション：",
        body: "モデル連携とコアAPI開発を主導。外部ECリンク（Tmall / Douyin / Xiaohongshu / WeChat Shop）にUTM / pidトラッキングとクリックイベント計測を実装し、WeComアドバイザーの短縮リンクと組み合わせて、相談から購入までの経路を測定可能に。",
      },
      {
        title: "成長・会員運営：",
        body: "4段階の会員ランクに応じた肌診断回数を統合（Standard：生涯10回、Silver：基本10回 + 1,000元の購入ごとに20回、Gold / Diamond：回数無制限、すべての有料ランク：1日最大10回）。レポートと肌プロフィールをログインアカウントに紐付け、シェアポスター、チャネルrefアトリビューション、登録コンバージョンポップアップを設計。匿名化した集計CSVをエクスポートし、ブランド白書と市場インサイトに活用。",
      },
      {
        title: "AIコスト・信頼性設計：",
        body: "同時実行制御、サーキットブレーカー、日次・月次のトークン及びコスト予算の上限、呼び出しごとの課金記録の永続化、モデルホワイトリストとプロバイダーフォールバックを備えたAIリクエストキューを設計。冪等リトライと利用枠の事前確保・解放により二重課金を防止。肌プロフィールには90日間の有効期限を設けて再診断を促し、完全レポートは365日間保持。ホット・コールドの階層アーカイブにより、最新10件の完全レポートと匿名化したコールド層サマリーを最長3年間保持。",
      },
      {
        title: "データ資産の循環：",
        body: "HMAC署名とIPレート制限を備えたサーバー間APIを設計。肌診断レポートとスキンケアプロフィールをsession_id経由でWeCom AIカスタマーサービスに連携し、単発の肌診断を継続的に運用可能なリピート購入につながるデータ資産へ転換。",
      },
      {
        title: "検索・AI 可発見性（SEO / GEO / AEO）：",
        body: "独立した肌診断サイト向けに Organization / WebApplication / FAQPage / Breadcrumb JSON-LD、AI クローラー許可リスト、sitemap、llms.txt / llms-full.txt、10 件の FAQ 回答を整備し、Google / Baidu のサイト認証を完了。",
      },
    ],
  },
  {
    slug: "wecom-ai-service",
    id: "project-wecom-ai",
    name: "WeCom AIカスタマーサービス",
    date: "2026年8月",
    owner: "プロダクト・フルスタック開発・デプロイ・運用：独立担当",
    link: { href: "https://kf.nihplod.cn", label: "kf.nihplod.cn" },
    summary:
      "FastAPI + Redis + DeepSeekによるWeCom AIカスタマーサービス：WeComカスタマーサービス、WeComアプリ、WeChat公式アカウントの3つのメッセージ入口を統合し、スマートな有人引き継ぎ、肌プロフィールの継承、7×24の伴走型フォローを実現。44KBのブランドFAQナレッジベース、34件のゴールデン回帰ケース、340件以上の自動テスト、PIPL準拠の個人情報エクスポート・削除機能を備える。",
  },
  {
    slug: "authorization-verification",
    id: "project-authorization",
    name: "NIHPLOD 認証検証プラットフォーム",
    date: "2026年4月 – 2026年5月",
    owner: "プロダクト・デザイン・フルスタック開発・デプロイ・運用：独立担当",
    link: { href: "https://ba.nihplod.cn", label: "ba.nihplod.cn" },
    summary:
      "販売店認証管理・偽造防止検証プラットフォーム：Next.js 16 + PostgreSQL基盤で、2段階審査ワークフローと証明書状態マシンを実装。Canvas + jsPDFで電子印鑑と動的QRコード付き認証書をリアルタイム生成。公開検証は3段階フォールバックマッチングとカメラQRスキャンに対応し、偽造通報チケット、JWTブラックリスト、操作監査を備える。",
  },
  {
    slug: "skin-analysis-miniprogram",
    id: "project-skin-miniprogram",
    name: "NIHPLOD AI肌診断ミニプログラム",
    date: "2026年10月 – 現在",
    owner: "プロダクト・デザイン・ミニプログラム開発・デプロイ・運用：独立担当",
    summary:
      "肌診断H5のWeChatミニプログラム版：14ページ、WeChat VisionKitと106キーポイントによる正面 / 右 / 左 / あご上げの4段階姿勢ガイドと自動撮影。非同期分析ポーリング、Canvas 2Dの10次元レーダーチャートと肌トレンド曲線、動的スコアポスター、再診断サブスクリプションメッセージ。",
  },
  {
    slug: "member-center-miniprogram",
    id: "project-member-miniprogram",
    name: "NIHPLOD 会員センター ミニプログラム",
    date: "2026年10月 – 現在",
    owner: "プロダクト・ミニプログラム開発・デプロイ・運用：独立担当",
    summary:
      "ネイティブTypeScriptの会員センターミニプログラム：19ページ、WeChatワンクリックログイン、会員ランクと昇格進捗、ポイント残高と履歴、ポイント交換（requestId冪等）、アドレス帳、SF Express追跡、購入履歴の後付け登録、セキュリティセンター、アカウント削除を搭載。公式サイトのOAuth 2.0と業務APIに直接接続し、独自バックエンドを持たない。",
  },
  {
    slug: "myskin-website",
    id: "project-myskin",
    name: "Myskin.Today ブランドサイト",
    date: "2026年1月 – 2026年2月",
    owner: "プロダクト・デザイン・フルスタック開発・AIGCビジュアル・デプロイ・運用：独立担当",
    link: { href: "https://myskin.today", label: "myskin.today" },
    summary:
      "AI肌診断プラットフォームのB2Bサイト：Next.js 16 + Tailwind CSS v4基盤で、製品機能紹介、API連携 / ホワイトラベル / 戦略提携の3種類のビジネスモデルランディングページ、APIドキュメントを掲載。提携問い合わせフォームはWeComボットへリアルタイム送信され、ブランドデザインシステム、ライト/ダークテーマ、AIGCビジュアル素材を備える。",
  },
];
