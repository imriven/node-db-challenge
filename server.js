const express = require('express');

const ProjectRouter = require('./data/ProjectsRouter.js');
const TasksRouter = require('./data/TasksRouter.js');
const ResourcesRouter = require('./data/ResourcesRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);

module.exports = server;