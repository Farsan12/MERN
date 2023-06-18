const express = require('express');
const app = express();
const PORT = 4578
const mongoose = require('mongoose');
const cors = require("cors")
const PRODUCT = require("./model/products")
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend





mongoose.connect("mongodb+srv://apfarsan:SrxdUcdJqDd66GRQ@cluster0.kz71uey.mongodb.net/MES")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log(err)})


app.post('/addData',async (req, res) => {
    try {

        let item = req.body
        console.log(item)

        const saveData = await PRODUCT(item) //PRODUCT is a model. we cross check the form data with the model we created before saving it
        await saveData.save()  // through this code we save the incoming data from front end to db 
        res.send((saveData))




    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});