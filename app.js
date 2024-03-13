const express = require('express');
const app = express();
const path =require('path');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
const hbs = require('hbs');
app.set('view engine','hbs');
const port = 3000;
const mongoose = require('mongoose');
app.use("/",require('./routes/blog'));
mongoose.connect('mongodb://127.0.0.1:27017/practiceproduct').then(()=>{
    app.listen(port, () => {
        console.log("https://localhost:"+port);
})
})