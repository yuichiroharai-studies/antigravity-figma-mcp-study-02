# antigravity-figma-mcp-study-02

AntigravityとFigma MCPを使って、Webサイトを1ページ丸ごとAIコーディングする流れを記録します。

## デザイン

以下のデザインをお借りしました。

https://www.figma.com/community/file/1156860863353724933

ただし、イラストなどのベクターデータが大量に含まれているため、Figma MCPが返すデータ量が大きくなりすぎる問題があります。

### 画像をプレースホルダー化

そこで、イラストなどの画像部分は空のプレースホルダーフレームに置き換えることにしました。

プレースホルダーフレームに置き換えるプラグインを作って利用しています。  
https://github.com/yuichiroharai-studies/figma-plugin-to-placeholder

## プロジェクト環境・構成

- Windows 11
- Astro
- Tailwind CSS

## AIコーディング環境

- Antigravity
  - モード: Planning
  - モデル:
    - `Gemini 3 Pro(High)`: Figmaデザインを取り込んだ実装を担当
    - `Claude Sonnet 4.5 (Thinking)`: コードの最適化や改善を担当
- Cursor
  - モード: Agent
  - モデル:
    - `Auto`: Antigravityのモデルが利用制限に引っ掛かった場合に使用
- Figma MCP

Figmaデザインを利用してWebデザインを実装する場合は、`Gemini 3 Pro(High)`を必ず使用します。
それ以外のWebデザインの文脈があまり必要ない場合は、`Claude Sonnet 4.5 (Thinking)`やCursorのAIエージェントも併用します。

## 開発履歴

### v0.1.0

https://yuichiroharai-studies.github.io/antigravity-figma-mcp-study-02/0.1.0/

#### 作業内容

- 「[AGENTS.md](AGENTS.md)」と「[FIGMA.md](docs/FIGMA.md)」にルールを追加
- 1ページ丸ごと一気に実装する流れを考える
- Figmaデザインはデスクトップ版、横幅1440pxのものを使用
- Figma MCPからの完全なデータ取得を目指す
  - `get_metadata`と`get_design_context`を使ってメタデータ/デザインコンテキストを取得
  - Figma MCPに何度も大量にアクセスしていると利用制限が掛かってしまうので、ローカルにファイルとして保存
  - データが大きすぎる場合、途中が省略されることがある
    - Figmaのひとつ下の階層のレイヤーをまとめて選択することで、セクションごとに分割したURLを渡せる
    - それでも、一部のセクションはデータが大きすぎて途中が省略されていた
    - 省略された部分は部分的に取得することができるはず
  - AIに完全なデータになるまで粘り強く実行させる
  - 取得したデータは「[docs/figma/](docs/figma/)」に格納
- 実際にAstroサイトとして実装する前に、「React + Tailwind CSS」のデザインコンテキストの中身を確認
  - `whitespace-pre`は邪魔なので一括削除
  - 使われているフォントファミリーとウェイトの種類や使用箇所を一覧化してもらって確認
    - DM_SansやMontserratが使われている箇所はInterに統一しても問題ないと判断
    - `Inter:Medium`のようなウェイトを含むフォントファミリー指定は間違いなので、`Inter`に統一
- 実装計画書を提案してもらう
  - 実装するセクションの順番が分かるように
  - ひとつひとつのセクションの細かい手順が明確になるように
  - `npm run dev`で進捗が分かるように、コンポーネントを作成するたびに`index.astro`に組み込むように
  - 一度にまとめて作業をさせると細かいルールが忘れられやすいので、`AGENTS.md`や`FIGMA.md`を参照するように念押し
- 完成した計画書は「[impl-base-desktop.md](docs/plans/impl-base-desktop.md)」
- 実装開始

#### 結果

- 実装に掛かった時間は12分程度
  - Figma MCPから取得したデータをローカルに保存したおかげで早くなっている
- 初校のモックアップとしてはそこまで悪くない出来栄え
- 画像やアイコンは想定通りにプレースホルダーが使われていた

### v0.1.1

https://yuichiroharai-studies.github.io/antigravity-figma-mcp-study-02/0.1.1/

#### 作業内容

- 文字校正の流れを考える
  - Figma上でセクションごとにエクスポートしたスクリーンショットを保存
  - Gemini APIを使い、スクリーンショットからテキストを抽出する
  - 抽出したテキストと実際のコードのテキストを比較させる
  - 費用的にも無料枠で問題なさそう

#### 結果

- 今回は、テキスト抽出側で`Whitepace`を`Whitespace`に誤認するミスがあったが、それ以外はすべて一致
- 誤植や文法ミス、`Evernote`という関係ない文字列があることなども指摘してくれた

### v0.1.2

https://yuichiroharai-studies.github.io/antigravity-figma-mcp-study-02/0.1.2/

#### 作業内容

冗長なスタイル指定を減らしたい

- 一括で削除したもの
  - `whitespace-pre`
    - 明らかに不要
  - `box-border`
    - Tailwindで初期化済み
  - `content-stretch`, `shrink-0`, `text-nowrap`
    - いったん全削除して、後で必要なものだけ適用しなおす

- AIに判断させて不要なものだけを削除
  - フォントファミリー、フォントウェイト、テキスト色、背景色
    - `global.css`にまとめる
  - 行間
    - Figmaでの初期値は`leading-[normal]`
    - Tailwindでは`1.5`で初期化されているので、`global.css`内で`line-height: normal`で上書き
  - `relative`
    - 子要素で`absolute`や`z-index`の指定がないものを選ぶ

#### 結果

AIに判断させて不要なものを削除させたが、細かいことろで抜けがあったのでレビューは必須

- 広い対象範囲を一気にやっているので、抜けが多くなってそう
- 実行前の判断やアルゴリズムは正しいが、実際の結果がそうなってない場合などもある
  - WindowsなのでPowerShellの使い方がおかしい場合など
- 「親要素」、「先祖要素」などの用語を使い分けないと齟齬が出てくる

AIモデルの進化によっても変わってくると思うので様子見
