const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductSchema = new Schema({
    title : {type:String,required:true},
    description : String,
    price : {type:Number,required:true},
    discountPercentage: {type:Number,min:[0,'Discount 0 ke kum hota hai lodhe!'],max:[50,'50 percentage ke 1 jada nhi dunga discount']},
    rating:{type:Number,min:[0,'Wrong rating'],max:[5,"rating cant be more than 5"]},
    brand : {type:String,required:true},
    category : String,
    thumbnail : String,
    images : [String]
});

const Test = mongoose.model('test',ProductSchema);
module.exports = Test;
