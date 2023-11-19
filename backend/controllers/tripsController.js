const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Trip = require('../models/trips');

// index
router.get('/', async (req, res) => {
    try {
        res.json(await Trip.find());
    } catch (error) {
        res.status(400).json(error);
    }
});

// create
router.post('/', async (req, res) => {
    try {
        res.json(await Trip.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// delete
router.delete("/:id", async (req, res) => {
    try {
        res.json(
            await Trip.findByIdAndDelete(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});


// update

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

// show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Trip.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;