const express = require('express');

const routes = express.Router();
const Task  = require('../models/taskModel');
const { createTask, getTasks } = require('../controller/taskController');

    routes.post("/api/tasks", createTask)
    routes.get('/api/tasks', getTasks )


    module.exports = routes;