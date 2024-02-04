# Pleasanter クライアントスクリプト開発環境 for TypeScript

## 概要

Pleasanter クライアントスクリプトをTypeScriptで開発するための環境を定義しました。

## 型定義

型定義は、TypeScript公式の@typesから利用できるものを使用しています。
[@types/pleasanter-web-script](https://www.npmjs.com/package/@types/pleasanter-web-script)

## コマンド

以下のコマンドが利用可能です。

### コードビルド

コードをビルドするコマンドです。watchが有効で、コードの変更があるたびに自動でビルドが実行されます。



```
npm run build
```


### リリースビルド

リリース用のビルドコマンドです。コードが最適化されてビルドされます。



```
npm run release
```

### コードフォーマット

コードを整形するコマンドです。

```
npm run format
```


## 感謝

この開発環境は、Oooooomin2様の環境をベースにTypeScriptへ変換したものです。彼らの貢献に深く感謝します。

[Oooooomin2/Pleasanter_ECMAScript](https://github.com/Oooooomin2/Pleasanter_ECMAScript)

