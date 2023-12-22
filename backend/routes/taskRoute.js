const express = require('express');

const routes = express.Router();
const Task  = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controller/taskController');

    routes.post("/api/tasks", createTask)
    routes.get('/api/tasks', getTasks )
    routes.get('/api/task/:id',getTask)
    routes.delete("/api/task/:id",deleteTask)
    routes.patch('/api/tasks/:id',updateTask);


    module.exports = routes;