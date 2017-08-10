
export default class arraySearcher{
    constructor(maxHashLength = 1){
        this._index = {};
        this._arr = {};
        this._relation = null;
        this.maxHashLength = maxHashLength;
    }

    setArray(arr){
        this._relation = null;
        this._index = {};
        this._arr = arr;
        this._makeHash();
    }

    setHash(objArray, valueKeys){
        this._relation = {};
        this._arr = [];
        objArray.forEach( item => {
            let value = item;
            valueKeys.forEach( valueKey => { value = value[valueKey] });
            this._relation[value] = { item: item, value: value };
            this._arr.push(value);
        });
        this._makeHash();
    }

    _makeHash(){
        this._arr.forEach( item => {
            for( var i=1; i<=this.maxHashLength; i++){
                let hashstr = item.substr(0, i);
                if( hashstr === "" ) break;
                if( this._index[hashstr] ){
                    this._index[hashstr].push(item);
                }
                else{
                    this._index[hashstr] = [item];
                }
            }
        });
        console.log(this._index);
    }

    _getObj(arrItems){
        if( !arrItems ) return [];
        if( this._relation ){
            return arrItems.map( arrItem => this._relation[arrItem] );
        }
        else{
            return arrItems;
        }
    }

    search(keyword){
        if( keyword.length <= this.maxHashLength ){
            return this._getObj(this._index[keyword]);
        }
        else{
            let keywordHash = keyword.substr(0, this.maxHashLength);
            let objs = this._getObj(this._index[keywordHash]);

            let results = [];
            objs.forEach( obj => {
                let val = (typeof obj !== "string") ? obj.value : obj;
                if( val.includes(keyword) ) results.push(obj)
            } );
            return results.map( obj => obj.item );
        }
    }
}
