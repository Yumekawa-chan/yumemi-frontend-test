# ゆめみ🧡フロントエンドコーディング試験

## 【課題】

**都道府県別の総人口推移グラフを表示するSPA(Single Page Application)を構築せよ**

課題URL：https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d

## 開発環境

- Node.js: 18.x 以上
- Next.js: 15.1.2
- TypeScript: 5.x
- TailwindCSS: 3.x

## Linter&Formatter環境

- ESLint
- Prittier

## テスト環境

- Jest
- Storybook

## 開発方法🔧

1. 本リポジトリをクローンしてください。

   ```bash
   git clone https://github.com/Yumekawa-chan/yumemi-frontend-test.git
   cd yumemi-frontend-test
   ```

2. 依存関係をインストールしてください。

   ```bash
   npm install
   ```

3. `.env`ファイルをプロジェクトルートに配置します。共同開発者から共有してもらってください。

4. 開発サーバーを起動します。
   ```bash
   yarn dev
   ```
   ローカルでアプリケーションが起動します。`http://localhost:3000` をブラウザで開いてください。

## 注意点

### プッシュ前に行うべきこと

1. ESLintのチェック✅

   ```bash
   yarn lint
   ```

2. テストの実行🧪
   ```bash
   yarn test
   ```

## Storybook📚

Storybookを起動するには以下を実行してください。

```bash
yarn storybook
```

起動後、`http://localhost:6006` で確認できます。

## デプロイ🚀

本アプリケーションはVercelを用いてデプロイしています。

デプロイ先: https://yumemi-frontend-test-six.vercel.app/
