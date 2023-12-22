const Task = require("../models/taskModel");

const createTask = async (req,res)=>
{   
    try{
        const task = await Task.create(req.body)

        res.status(200).json(task)
       }catch(error){
        res.status(500).json({msg:error.message})
       }
};

const getTasks = async(req,res) =>
{
    try{
        const task = await Task.find();
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createTask,
    getTasks
}