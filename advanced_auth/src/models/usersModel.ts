import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: {
        type: Number,
        required: false    }
});


export default mongoose.model('users', userSchema);