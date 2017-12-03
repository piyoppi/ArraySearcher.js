# Javascriptでリアルタイム検索のサンプルプログラム
Javascriptでテキストボックス入力とともに絞り込み検索を行うためのサンプルプログラムです。

## ビルド

```
$ npm install
$ npm run build
```
`sample/sample.html` でデモをすることができます。

## ファイル
```
.
├── README.md
├── dist
│   └── js                      --- ビルド後のjs(npm run buildで生成される)
│       ├── sample.bundle.js
│       └── script.bundle.js
├── package.json
├── sample
│   └── sample.html             --- サンプル
├── src
│   ├── array_searcher.js       --- 検索スクリプト
│   └── sample.js               --- sample.html用のスクリプト
└── webpack.config.js

```

## 使い方
（くわしくは`src/sample.js` を見てみてください。）

たとえば、オブジェクトの配列から絞り込み検索をしたいときには、次のようにします。

```js
import arraySearcher from './array_searcher.js'
var searcher = new arraySearcher();                 //検索オブジェクト

//検索対象データ
var listData = [
    {data: { name: "ひよこ" } },
    {data: { name: "ひよこまめ" } },
    {data: { name: "あひる" } },
];

//検索用の辞書を作る
//data内のnameが検索対象であることを教える
searcher.setHash(listData, ["data", "name"]);

...

//検索部分（たとえばoninputなどを捕捉して以下の処理を呼び出す）
var query = "検索対象"
this.findResults = searcher.search(query);
```

配列の値が検索対象の時は以下のようにします

```js
var arrayData = ["ひよこ", "ひよこまめ", "あひる"];
searcher.setArray(arrayData);

...

//検索部分（たとえばoninputなどを捕捉して以下の処理を呼び出す）
var query = "検索対象"
this.findResults = searcher.search(query);
```

## License
MIT license（ https://opensource.org/licenses/mit-license.php ）
