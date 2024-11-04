const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());




app.get('/',(req,res)=>{
    res.send("hello from node API");
});

app.post('/api/products', async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

mongoose.connect("mongodb+srv://HN824:BUs7LBbxXgcUFpf7@booking-backend.d2qlw.mongodb.net/Ariane-Booking?retryWrites=true&w=majority&appName=booking-backend")
.then(()=>{
    console.log("connected to the database");
    
app.listen(3002,()=>{
    console.log('Server is running on port 3002');
});
})

.catch(()=>{
    console.log("connection failed");
})