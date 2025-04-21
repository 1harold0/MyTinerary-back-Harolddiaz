import { Schema, model } from "mongoose";
import "../models/User.js";
import "../models/City.js";

let collection = "itinerarys";
let schema =Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    hashtags: [{ type: String }], 
    price: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, 
        ref: "users", 
        required: true 
    },
    duration: { type: Number, required: true }, 
    comments: {type:String,requiered :false},
    city: { 
        type: Schema.Types.ObjectId,
        ref: "citys",
        required: true
    }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;