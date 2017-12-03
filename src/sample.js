import arraySearcher from './array_searcher.js'

var searcher = new arraySearcher();

window.onload = function(){

    new Vue({
        el: "#app",
        data: function(){
            return {
                listData: [
                    {data: { name: "ひよこ" } },
                    {data: { name: "ひよこまめ" } },
                    {data: { name: "あひる" } },
                    {data: { name: "piyo" } },
                    {data: { name: "pico" } },
                    {data: { name: "pica" } },
                    {data: { name: "pick" } },
                ],
                findResults: [],
                query: "",
            }
        },
        created: function(){
            searcher.setHash(this.listData, ["data", "name"]);
        },
        methods:{
            find: function(){
                this.findResults = searcher.search(this.query);
            }
        }
    });
}
