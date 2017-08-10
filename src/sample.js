import arraySearcher from './array_searcher.js'

//var arr = ["hoge", "fuga", "piyo", "from", "pico", "pica"];
//var searcher = new arraySearcher();
//searcher.setArray(arr);

var searcher = new arraySearcher();

window.onload = function(){

    new Vue({
        el: "#app",
        data: function(){
            return {
                listData: [
                    {hoge: { fuga: { piyo : "hoge" } } },
                    {hoge: { fuga: { piyo : "fuga" } } },
                    {hoge: { fuga: { piyo : "piyo" } } },
                    {hoge: { fuga: { piyo : "from" } } },
                    {hoge: { fuga: { piyo : "pico" } } },
                    {hoge: { fuga: { piyo : "pica" } } },
                    {hoge: { fuga: { piyo : "pic2" } } },
                    {hoge: { fuga: { piyo : "pic223" } } },
                ],
                findResults: [],
                query: "",
            }
        },
        created: function(){
            searcher.setHash(this.listData, ["hoge", "fuga", "piyo"]);
        },
        methods:{
            find: function(){
                this.findResults = searcher.search(this.query);
            }
        }
    });
}
