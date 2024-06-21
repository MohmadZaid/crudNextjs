const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    company: String,
    color: String,
})


export const Product = mongoose.models.products || mongoose.model('products', productSchema)