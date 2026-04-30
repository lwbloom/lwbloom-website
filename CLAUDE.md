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
- トーン: 静かで誠実、落ち着いた品格
- 事業の姿勢「否定しない。押し付けない。一緒に整える。」を体現するデザイン
- 配色:
  - プライマリ: #1e3a5f（深い紺）
  - セカンダリ: #2c5282（ブルー）
  - アクセント: #c77d3c（温かみのあるゴールドブラウン）
  - 背景: #faf9f7（温かみのあるオフホワイト）
  - テキスト: #2d3748（ダークグレー）
  - サブテキスト: #718096（ミディアムグレー）
- 余白を十分に取り、情報密度を低く保つ
- 装飾を控えめに、言葉の力で伝えるデザイン
- 見出しは Noto Serif JP で品格を出す
- アニメーションは控えめなフェードイン程度

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

