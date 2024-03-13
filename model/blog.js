const mongoose = require('mongoose');
const {Schema} = mongoose;
const blogschema = new Schema({
    productname:String,
    productnumber:String,
    productid:String
})
const blog = mongoose.model('blog',blogschema)
module.exports = blog;