# ランディングページ実装計画

## 目標

`docs/figma` にある 13 個の JSX デザインファイルを使用して、`src/pages/index.astro` にランディングページを実装します。

**注記**: 今回の実装ではレスポンシブデザインへの対応は不要です。デスクトップ版のデザインのみを実装します。

## 参照ドキュメント

以下のドキュメントに記載されているルールとガイドラインを厳守して実装を行います。

- [AGENTS.md](file:///c:/Users/yuich/Documents/git/yuichiroharai-studies/antigravity-figma-mcp-study-02/AGENTS.md): エージェントの行動指針とルール
- [docs/FIGMA.md](file:///c:/Users/yuich/Documents/git/yuichiroharai-studies/antigravity-figma-mcp-study-02/docs/FIGMA.md): Figma デザインの実装ルール（MCP ツールの使用、テキスト、画像、Web フォントなど）

## 実装手順

以下の順序で、各セクションを 1 つずつ実装し、直ちに `index.astro` に組み込みます。

### 手順 1: Header

1.  `docs/figma/design-01-header.jsx` を元に `src/components/Header.astro` を作成します。
    - **注記**: `get_metadata` と `get_design_context` の実行結果は既に `docs/figma` に保存されています。これらのツールは、情報が不足している場合や再取得が必要な場合にのみ使用してください。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Header` コンポーネントをインポートして追加します。

### 手順 2: Hero

1.  `docs/figma/design-02-hero.jsx` を元に `src/components/Hero.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Hero` コンポーネントをインポートして追加します。

### 手順 3: ProjectManagement

1.  `docs/figma/design-03-project-management.jsx` を元に `src/components/ProjectManagement.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `ProjectManagement` コンポーネントをインポートして追加します。

### 手順 4: Extension

1.  `docs/figma/design-04-extension.jsx` を元に `src/components/Extension.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Extension` コンポーネントをインポートして追加します。

### 手順 5: Customise

1.  `docs/figma/design-05-customise.jsx` を元に `src/components/Customise.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Customise` コンポーネントをインポートして追加します。

### 手順 6: Pricing

1.  `docs/figma/design-06-pricing.jsx` を元に `src/components/Pricing.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Pricing` コンポーネントをインポートして追加します。

### 手順 7: YourWork

1.  `docs/figma/design-07-your-work.jsx` を元に `src/components/YourWork.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `YourWork` コンポーネントをインポートして追加します。

### 手順 8: YourData

1.  `docs/figma/design-08-your-data.jsx` を元に `src/components/YourData.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `YourData` コンポーネントをインポートして追加します。

### 手順 9: Sponsors

1.  `docs/figma/design-09-sponsors.jsx` を元に `src/components/Sponsors.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Sponsors` コンポーネントをインポートして追加します。

### 手順 10: Apps

1.  `docs/figma/design-10-apps.jsx` を元に `src/components/Apps.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Apps` コンポーネントをインポートして追加します。

### 手順 11: Testimonials

1.  `docs/figma/design-11-testimonials.jsx` を元に `src/components/Testimonials.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Testimonials` コンポーネントをインポートして追加します。

### 手順 12: FreeTrial

1.  `docs/figma/design-12-free-trial.jsx` を元に `src/components/FreeTrial.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `FreeTrial` コンポーネントをインポートして追加します。

### 手順 13: Footer

1.  `docs/figma/design-13-footer.jsx` を元に `src/components/Footer.astro` を作成します。
2.  Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。
3.  `src/pages/index.astro` に `Footer` コンポーネントをインポートして追加します。

## 検証計画

### 自動テスト

- なし。

### 手動検証

- `npm run dev` を実行して開発サーバーを起動します。
- ページがエラーなく読み込まれることを確認します。
- (暗黙的) 実装中に `get_screenshot` を使用してデザインを相互参照します。
