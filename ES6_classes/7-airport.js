export default class Airport{
    constructor(name , code){
        this._name = name ;
        this._code = code ;
    }
    [Symbol.toPrimitive](hint){
        if (hint === "string"){
            return `[object ${this._code}]`
        }
    }

}