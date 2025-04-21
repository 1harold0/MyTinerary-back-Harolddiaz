import { Schema,model } from "mongoose";


let collection ="citys"
let schema = Schema({
    name:{type:String,requierd:true},
    photo:{type:String,required:true},
    country:{type:String,requierd:true},
    description:{type:String,required:true},
    Continente:{type:String,required:true},
    Descripción:{type:String,required:true},
    population:{type:Number,required:true},
    currency:{type:String,required:true},
    borders:{type:String,required:true},
     
},{
    timestamps:true
}) 

let Citys = model(collection,schema)
export default Citys

