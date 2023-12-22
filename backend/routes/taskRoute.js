const express = require('express');

const routes = express.Router();
const Task  = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controller/taskController');

routes.route('/').get(getTasks).post(createTask)
routes.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)




    module.exports = routes;