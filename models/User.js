import { Schema, model } from "mongoose";

let collection = "users";

let userSchema = Schema({
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    photo:     { type: String, required: true },
    email:     { type: String, required: true },
    password:  { type: String, required: true },
    rol:       { type: String, default: "user" },
    age:       { type: Number },
    country:   { type: String, required: true }
}, {
    timestamps: true
});

let Users = model(collection, userSchema);
export default Users;
