const Test = require('../models/Product');

exports.createProduct=async (req,res)=>{
  try{
    const product = new Test(req.body);
    await product.save();
    res.status(201).send(product);
  }  catch(error){
    console.log(error.message);
    res.status(400).json(error);
  } 
};
exports.getAllProducts=async (req,res)=>{
try{
    const products = await Test.find();
    res.status(201).json(products);
}catch(error){
    res.status(400).json(error);
}
};

exports.getProduct = async (req,res)=>{
const id=req.params.id;
const product=await Test.findById(id);
res.send(product);
};

exports.replaceProduct = async (req,res)=>{        //put request]
const id=req.params.id;
const doc=await Test.findOneAndReplace({_id:id},req.body);
res.json(doc);
};

exports.patchProduct = async (req,res)=>{       //patch request
const id=req.params.id;
const doc=await Test.findOneAndUpdate({_id:id},req.body);
res.json(doc);
};

exports.deleteProduct = async  (req,res)=>{
const id=req.params.id;
const doc=await Test.findOneAndDelete({_id:id});
res.json({...doc,"deleted":true});

};