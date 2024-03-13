const express = require('express');
const router = express.Router();
const{v4:uuidv4} = require('uuid');
const blog = require('../model/blog')
router.post('/showproduct',async(req,res)=>{
    const {productname,productnumber} = req.body;
    const obj={
        productname,
        productnumber,
        productid:uuidv4()
    }
    await blog.create(obj)
    res.redirect('/getproducts')
})
router.get('/getproducts',async(req,res)=>{
    let blogs = await blog.find()
    res.render('productpage',{
        blogs
    })
})
router.get('/delete/:productid',async(req,res)=>{
    let productid = req.params.productid;
    await blog.deleteOne({productid});
    res.redirect('/getproducts')
})
router.get('/update/:productid',async(req,res)=>{
    let productid = req.params.productid;
const updatepage = await blog.findOne({productid})
    res.render('updatepage',{
        updatepage
    })
})
router.post('/updatepage', async (req, res) => {
    const { productname, productnumber, productid } = req.body;
    const newobj = { productname, productnumber }; // Update only the required fields
  
    try {
      await blog.updateOne({ productid }, newobj);
      res.redirect('/getproducts');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  });
module.exports = router;    