# モバイルレイアウト実装計画

## 目標

`docs/figma/design/mobile` にあるモバイル版のデザインコンテキストを使用して、既存の Astro コンポーネント (`src/components/*.astro`) および `src/pages/index.astro` にモバイルレスポンシブ対応を追加します。デスクトップのレイアウトを維持しつつ、モバイルデバイスで正しく表示されるようにすることが目標です。

## 参照ドキュメント

以下のドキュメントに記載されているルールとガイドラインを厳守して実装を行います。

- [AGENTS.md](../../AGENTS.md): エージェントの行動指針とルール
- [docs/FIGMA.md](../FIGMA.md): Figma デザインの実装ルール

## デザインルール

- **フォントと色**: フォントウェイトとテキスト色は、モバイル版のデザインよりもデスクトップ版のスタイルを優先して統一します。

## ユーザーレビュー確認事項

- **ハンバーガーメニュー**: ハンバーガーメニューのアイコンが見当たらないため、作成します。
- **レスポンシブブレークポイント**: 特段の指定がない限り、Tailwind の標準ブレークポイント（例: デスクトップ用には `md:`）を使用します。

## 実装手順

以下の順序で、各セクションを 1 つずつ実装します。

### 手順 1: Header

1. `docs/figma/design/mobile/m-01-header.jsx` を元に `src/components/Header.astro` を修正し、モバイルレイアウトを実装します。
   - モバイルではデスクトップナビゲーションとボタンを非表示にします。
   - モバイルでのみ表示されるハンバーガーメニューアイコンを追加します。
   - モバイル用にパディングとレイアウトを調整します。
2. 不足しているハンバーガーメニュー用のシンプルな SVG (`src/images/icon/hamburger.svg`) を作成します。
3. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 2: Hero

1. `docs/figma/design/mobile/m-02-hero.jsx` を元に `src/components/Hero.astro` を修正し、モバイルレイアウトを実装します。
   - モバイルでは要素を垂直に積み重ねます。
   - フォントサイズと間隔を調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 3: ProjectManagement

1. `docs/figma/design/mobile/m-03-project-management.jsx` を元に `src/components/ProjectManagement.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
   - 画像とテキストの配置を調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 4: Extension

1. `docs/figma/design/mobile/m-04-extension.jsx` を元に `src/components/Extension.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 5: Customise

1. `docs/figma/design/mobile/m-05-customise.jsx` を元に `src/components/Customise.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 6: Pricing

1. `docs/figma/design/mobile/m-06-pricing.jsx` を元に `src/components/Pricing.astro` を修正し、モバイルレイアウトを実装します。
   - 料金カードを垂直に積み重ねます。
   - 間隔を調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 7: YourWork

1. `docs/figma/design/mobile/m-07-your-work.jsx` を元に `src/components/YourWork.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 8: YourData

1. `docs/figma/design/mobile/m-08-your-data.jsx` を元に `src/components/YourData.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 9: Sponsors

1. `docs/figma/design/mobile/m-09-sponsors.jsx` を元に `src/components/Sponsors.astro` を修正し、モバイルレイアウトを実装します。
   - スポンサーロゴがモバイルで折り返されるようにグリッド/フレックスレイアウトを調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 10: Apps

1. `docs/figma/design/mobile/m-10-apps.jsx` を元に `src/components/Apps.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
   - アプリアイコンのレイアウトを調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 11: Testimonials

1. `docs/figma/design/mobile/m-11-testimonials.jsx` を元に `src/components/Testimonials.astro` を修正し、モバイルレイアウトを実装します。
   - お客様の声を垂直に積み重ねるか、カルーセルを使用します（積み重ねを基本とします）。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 12: FreeTrial

1. `docs/figma/design/mobile/m-12-free-trial.jsx` を元に `src/components/FreeTrial.astro` を修正し、モバイルレイアウトを実装します。
   - コンテンツを垂直に積み重ねます。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

### 手順 13: Footer

1. `docs/figma/design/mobile/m-13-footer.jsx` を元に `src/components/Footer.astro` を修正し、モバイルレイアウトを実装します。
   - フッターのカラムを垂直に積み重ねます。
   - 配置を調整します。
2. Figma ノード ID を使って `get_screenshot` を実行し、デザインを確認します。

## 検証計画

### 自動テスト

- `npm run dev` でサーバーを起動します。
- ブラウザツールを使用して `http://localhost:4321` にアクセスします。
- ブラウザウィンドウをモバイル幅（例: 375px）にリサイズし、各コンポーネントのレイアウトを確認します。
- デスクトップ幅（例: 1440px）も確認し、回帰がないことを確認します。

### 手動検証

- 各コンポーネントの実装時に `get_screenshot` で取得した画像と、レンダリング結果を視覚的に比較します。
