const Task = require("../models/taskModel");

/**Create Task */
const createTask = async (req,res)=>
{   
    try{
        const task = await Task.create(req.body)

        res.status(200).json(task)
       }catch(error){
        res.status(500).json({msg:error.message})
       }
};

/**Get Tasks */
const getTasks = async(req,res) =>
{
    try{
        const task = await Task.find();
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

/**Get a Single Task */
const getTask = async (req,res) =>
{
   
   
   try
   {
    const {id} = req.params;
    const task = await Task.findById(id);

    if(!task)
    {
        return res.status(404).json("No Task with id" + id)
    }

    res.status(200).json(task)
   }catch(error)
   {
    res.send({message:error.message})
   }
}
/**Delete Task */
const deleteTask = async (req,res)=>
{
    try{
        const {id} =req.params;
        const task = await Task.findByIdAndDelete(id)

        if(!task)
        {
           return res.status(404).json("Task couldn't be found")
        }

        res.status(200).json("Task Deleted")
    }catch(error)
    {
        res.send(500).json({msg:error.message})
    }
}


const updateTask = async(req,res) =>
{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body, {
                new: true,
                runValidators:true}
        );

        if(!task)
        {
            return res.status(404).json("No task with id: "+ id)
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}