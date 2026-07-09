export default class HolbertonCourse{
    constructor(name,length,students){
        this._name = name ;
        this._lenght = length ;
        this._students = students ;
    }
    get name(){
        return this._name
    }
    set name(value){
        if(typeof value !== "string" ){
            throw new TypeError( "Name must be a string")
        }
    }
    get length(){
        return this._length
    }
    set length(value){
        if(typeof value !== "number"){
            throw new TypeError("Length musb be a number")
        }
    }
    get students(){
        return this._students
    }
    set students(value){
        if(!Array.isArray("string")){
            throw new TypeError("Array must be a array of Strings")
        }
    }

}