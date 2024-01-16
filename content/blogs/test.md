---
title: 文化祭でクラス企画のシステムを作った話
date: 2023-12-05
category: コマンド
author: Crysta1221
tags:
    - Vue.js
    - Vuestic UI
---

## はじめに
この記事は、[長野高専 Advent Calendar 2023 5日目](https://qiita.com/advent-calendar/2023/nnct) の記事となります。
今回は、10月に4年ぶりに一般公開となった文化祭のクラス企画のシステムを作った話を備忘録等も混ぜながら書いていきます。

::note{type="warn"}
本記事の内容は長野高専に非公式で公開しているものです。
長野高専 Advent Calendaerの注意にもあるように学校及び学校関係者への問い合わせはご遠慮ください。
::

## :man: 自己紹介
長野高専3年のくりすたです。主にフロントエンド開発をしたり、DiscordのBotを作ったり、ExpressでAPIを作ったりしているよわよわWebエンジニアです。

## :pencil2: 作ろうと思ったきっかけ
はじめにあるように、一般公開は4年ぶりです。2019年の台風19号の影響で文化祭が中止、その後コロナの流行により生徒内のみでの開催でした。しかし、今年は5類移行もあって4年ぶりに一般公開することができました。一般公開できるということはいろいろな人にクラス企画を見てもらえるチャンスです。
自分のクラスでは、レーザーポインタを用いたシューティングゲームを開発していました。ゲーム自体はUnityとC#、ポインタ取得用のPythonが使われていましたが、そのデータを処理・公開する部分(フロントエンド、バックエンド部分)の開発をすることになりました。

## :package: 仕様・技術
雑な図になってしまいましたが大体こんな感じです。
![server.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2467860/d04c8365-e31d-a1b2-4c29-cd41bbf1f1d4.png)
Unityで作成されたゲームがあるパソコンを3台用意し、ゲーム終了後HTTP RequestでスコアとID、日時をAPI サーバーにPOSTします。その後、ホームページでIDを入れると、HTTP RequestでデータをGETし、スコアを返すようにします。
使用している技術・ツールは次の通りです。

- **API Server**
    - Node.js v18
    - Express.js
    - Postman
    - Docker
    - CloudFlare SSL Encrypt
- **Front End**
    - Node.js v18
    - Vue3
    - Vite 3.3.9
    - Vuestic UI v3
    - Tailwind CSS
    - CloudFlare SSL Encrypt

## API Server
API サーバーは、主にExpressで構築されています。dbフォルダにdata.sqlite3を作成し、POST、GET、DELETEが実行された場合はそれぞれSQL文を使用してデータを取得します。最初早く完成したと思いきやSQLインジェクションが発生していたため急遽修正することになりました。時間がなかったので JWT認証を実装できず不本意ながらdata.sqlite3にauthテーブルを作り、ユーザーとパスワードをべた書きして一致するかにしました。その後、Dockerでﾄﾞｯｶｰﾝしました。
また、サーバーをどうするかでExpress APIをデプロイするのに、Vercelではファイル更新等ができなかった気がしたので知り合いのサーバーを借りてそこに実装することにしました。快諾してくれて本当にありがとうございました。

ちなみにですが、APIのテストには、Postmanというツールを用いたのですがとても便利だったのでここで紹介します。

https://postman.com

リポジトリがありますので詳細はそちらをご覧ください。

https://github.com/2023-3Skoreisai/api

一部Github Copilotも使って作成していたためツッコミどころ等あると思いますが...

## Frontend
肝心の部分です。ダッシュボードと一般公開用のホームページ二つを文化祭2週間前で完成させなくてはならず、徹夜をめちゃくちゃ繰り返していました。

やっぱりViteは便利ですね～ Vue.js標準のコンパイラではビルドが遅いうえ、テキストを変更するたびにリコンパイルするため大変でした。しかし、Viteにすることで起動が3秒、変更は一瞬で適用されてしまって今後も使っていきたいです。
Vuestic UIは、ダッシュボードで使いました。UIコンポーネントがどれも美しく見やすいので採用しました。ただ、導入には手こずりました。なぜなら、`npm create vite@latest`でVueプロジェクトを作成した後に普通に `npm i vuesitc-ui`を行うと、レイアウトがずれたり、Tailwind CSSが適用されないといったことがありました。なので、一回`npm create vite@latest`を行った後に、
```sh [console]
vue add vuestic-ui
```
とすることでVuestic UIのセットアップウィザードが出てくるのでここから各種設定をすることが早いことがわかりました。

こうして、まずはダッシュボードのメイン部分が完成です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2467860/f1101f5a-5711-b927-7f10-f7b82fd69140.png)

次にデータベース編集機能です。時間もなかったのでAPIのPOST、GET、DELETEを使って実装することにしました。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2467860/7a2304c9-c89f-19ab-5111-a8842b0d8268.png)

こちらもリポジトリがありますのでぜひご覧ください。

https://github.com/2023-3Skoreisai/FrontEnd

なお、APIエンドポイントは削除されているのでURLにアクセスしても存在しないという表記になると思います。

# :chart_with_downwards_trend: 結果
一日目はゲームクライアントに問題があったうえ、UnityのHTTPRequestがうまくいかず、データが取得できませんでした。二日目は、朝から2時間でUnityから吐き出されるcsvファイルを監視し、変更されたらされた内容をPOSTするNode.js Appを作成しました。
二日目のデータしか取れていませんでしたが **232人**の方にプレイしていただけました!
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2467860/5a7b7b0d-7cc0-aaac-8721-021d61d78431.png)

# :books: 感想
短い時間でしたが開発している時間はめちゃくちゃ勉強にもなったし楽しかったです!(特にLinuxサーバーのセキュリティとかcorsとか)ただ、Unity班との連携がうまくいかず急な仕様変更だったりが多かったので次回は互いに確認し合いたいなと思いました。
最後に、Vue.js + Vite とDockerでﾄﾞｯｶｰﾝするのは最高!!!
