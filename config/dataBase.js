import mongoose from "mongoose";


let url= process.env.URI_MONGO 
console.log(url)

mongoose.connect(url)
.then(() => console.log(" databasa conect") )
.catch(error => console.log(error))

