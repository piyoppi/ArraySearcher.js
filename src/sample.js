import arraySearcher from './array_searcher.js'

var arr = ["hoge", "fuga", "piyo", "from", "pico", "pica"];

var searcher = new arraySearcher();
searcher.setArray(arr);

var arr2 = [
                {hoge: { fuga: { piyo : "hoge" } } },
                {hoge: { fuga: { piyo : "fuga" } } },
                {hoge: { fuga: { piyo : "piyo" } } },
                {hoge: { fuga: { piyo : "from" } } },
                {hoge: { fuga: { piyo : "pico" } } },
                {hoge: { fuga: { piyo : "pica" } } },
                {hoge: { fuga: { piyo : "pic2" } } },
                {hoge: { fuga: { piyo : "pic223" } } },
            ];
var searcher2 = new arraySearcher();
searcher2.setHash(arr2, ["hoge", "fuga", "piyo"]);

console.log(searcher2.search("pic2"));
