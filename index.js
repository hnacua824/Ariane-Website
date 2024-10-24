const express = require('express')
const mongoose = require('mongoose');
const app = express()




app.get('/',(req,res)=>{
    res.send("hello from node API");
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