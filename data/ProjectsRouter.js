const express = require("express");

const Projects = require("./projectsDB.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  Projects.getById(req.params.id)
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.post("/", (req, res) => {
    const newProject = req.body
    Projects.insert(newProject)  
    .then(project => {
        res.status(201).send();
      })
      .catch (err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
});


module.exports = router;
