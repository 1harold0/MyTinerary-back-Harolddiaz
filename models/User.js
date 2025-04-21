import { Schema,model } from "mongoose";

let collection ="users"
let userSchema = Schema({
    name:{type:String,requierd:true},
    photo:{type:String,required:true},
    email:{type:String,requierd:true},
    paswore:{type:String,required:true},
    rol:{type:String,required:true},
    age:{type:String,required:true},
     
},{
    timestamps:true
}) 

let Users = model(collection,userSchema)
export default Users