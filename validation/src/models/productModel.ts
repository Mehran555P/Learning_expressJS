import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    stock: Number,
});

export default mongoose.model('products', productSchema);