const express = require("express");
const router = express.Router();
const Item = require("../models/Item");




router.post("/", async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const newItem = new Item({ name, quantity, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});




router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
