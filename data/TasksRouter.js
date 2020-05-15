const express = require('express');

const Tasks = require('./tasksDB.js');

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.get()
      .then((tasks) => {
        res.json(tasks);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get tasks" });
      });
  });


router.post("/", (req, res) => {
    const newTask= req.body
    Tasks.insert(newTask)  
    .then(task => {
        res.status(201).send();
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
});

module.exports = router;