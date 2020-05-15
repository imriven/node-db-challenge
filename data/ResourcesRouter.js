const express = require('express');

const Resources = require('./resourcesDB.js');

const router = express.Router();

router.get("/", (req, res) => {
    Resources.get()
      .then((resources) => {
        res.json(resources);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to get resources" });
      });
  });


  router.post("/", (req, res) => {
    const newResource = req.body
    Resources.insert(newResource)  
    .then(resource => {
        res.status(201).send();
      })
      .catch (err => {
        res.status(500).json({ message: "Failed to create new resource" });
      });
});




module.exports = router;