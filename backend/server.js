const dotenv = require('dotenv').config(); 
const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./model/taskModel');


app.get('/', (req,res,next)=>
{
    res.send("Home Page");
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));



const port = process.env.PORT || 3000;

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


    /** Create Task */

    app.post("/api/tasks", async(req,res,next)=>
    {
       try{

        const task = await Task.create(req.body)

        res.status(200).json(task)
       }catch(error){
        res.status(500).json({msg:error.message})
       }
    })

    /**Get/ Read Data */

    app.get("/api/tasks", async (req,res)=>
    {
        try{

            const task = await Task.find();

            res.status(200).json(task)
        }catch(error)
        {
            res.status(500).json({message:error.message})
        }
    }
    )