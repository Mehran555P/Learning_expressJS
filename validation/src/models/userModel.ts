import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    userName: String,
    password: String,
});


export default mongoose.model('users', userSchema);