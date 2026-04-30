# Life & Work Bloom 公式サイト

## プロジェクト概要
- 50代の分岐点に特化した個別伴走サービス「Life & Work Bloom」の公式サイト
- ドメイン: lwbloom.jp
- 静的サイト（HTML/CSS/JavaScript のみ）
- GitHub Pages でホスティング

## 技術スタック
- HTML5（セマンティック）
- CSS3（カスタムプロパティ使用、フレームワーク不使用）
- Vanilla JavaScript（ライブラリ不使用）
- Google Fonts: Noto Serif JP（見出し）、Noto Sans 
JP（本文）、Inter（英語）

## デザイン方針
- トーン: 清潔・信頼・モダン。50代に安心感を与えつつ新鮮さも感じるデザイン
- 配色:
  - Primary: #0099A8（ティール）
  - Primary Gradient: linear-gradient(135deg, #0099A8, #00C9A7)
  - Accent: #F5911E（オレンジ）
  - Accent Gradient: linear-gradient(135deg, #F5911E, #F7A84B)
  - Background: #ffffff（白）
  - Background Light: #f7fafa / #f4fbfc
  - Background Warm: #fffbf5 / #fffaf5
  - Text: #1a1a1a（見出し）/ #333（本文）/ #666（サブ）/ #888（補足）
  - Border: #eee / #f0f0f0
- 余白: たっぷり（セクション間 100px、要素間 24-48px）
- フォント: Noto Serif JP（見出し）, Noto Sans JP（本文）, Inter（英数字・数値）
- アニメーション: Intersection Observer による控えめなフェードイン（duration 0.8s, translateY 30px）
- 角丸: 16-20px（カード）、10px（ボタン）、100px（バッジ）
- 影: box-shadow: 0 2px 16px rgba(0,0,0,0.04)（通常）、0 12px 40px rgba(0,0,0,0.08)（ホバー）
- グラデーション装飾: 背景に円形のradial-gradient、ドットパターン、リングを控えめに配置
- ナビCTA: オレンジグラデーション
- セクションラベル: 英字大文字、ティール色、前後に線付き

## ページ構成
1. index.html — トップページ（LP構造のハイブリッド型）
2. blog/index.html — ブログ一覧
3. blog/posts/sample.html — ブログ記事テンプレート
4. about.html — 詳細プロフィール
5. services.html — サービス詳細
6. cases.html — 実績・事例
7. contact.html — お問い合わせ（公式LINE誘導）
8. legal.html — 特定商取引法に基づく表記
9. privacy.html — プライバシーポリシー

## レスポンシブ対応
- ブレークポイント: 375px / 768px / 1280px
- モバイルファースト設計

## SEO要件
- 各ページに適切な title / meta description
- OGPメタタグ（og:title, og:description, og:image, og:url）
- 構造化データ（JSON-LD: LocalBusiness）
- canonical タグ
- sitemap.xml / robots.txt

## 品質基準
- Lighthouse 全カテゴリ 90以上を目指す
- すべての img に alt 属性
- セマンティック HTML（header, nav, main, section, article, footer）
- アクセシビリティ（WCAG 2.1 AA準拠を意識）

## やってはいけないこと
- jQuery や外部JSライブラリを使わない
- インラインスタイルを使わない
- 画像がない場合にレイアウトが崩れる実装をしない
- 過度なアニメーションを入れない
- CSSフレームワーク（Bootstrap, Tailwind等）を使わない

