const express = require('express');
const app = express();
const PORT = 4578
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://apfarsan:SrxdUcdJqDd66GRQ@cluster0.kz71uey.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log(err)})


app.get('/',(req,res)=>{
    res.send('server is running')
})

app.get('/about',(req,res)=>{
    res.send('About')
})
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})