const dotenv = require('dotenv').config(); 
const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const Taskroutes = require('./routes/taskRoute')




// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/tasks",Taskroutes);


const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>
    {
        app.listen(port,() =>
        {
          console.log('Port has started on' +port)
        })
    }).catch((err) => {
        console.log(err)
    })

