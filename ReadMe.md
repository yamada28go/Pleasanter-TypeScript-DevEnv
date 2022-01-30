# Pleasanter クライアントスクリプト開発環境 for TypeScrypt

## 概要

Pleasanter クライアントスクリプトをTypeScryptに対応されたものです。
[Oooooomin2/Pleasanter_ECMAScript](https://github.com/Oooooomin2/Pleasanter_ECMAScript)をベースに、
TypeScryptに対応させたものとなります。

## コマンド

以下コマンドが定義されています。

### コードのビルド

コードをビルドします。
waitchが有効になっているので、コードの変更に合わせて、
ビルドが実行されます。

```
npm run build
```

### リリースビルド

リリースビルドです。
コードが最適化されます。

```
npm run release
```

### コードのフォーマット

コードのフォーマットが行われます。

```
npm run format
```