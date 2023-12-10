const express = require('express');
const router = express.Router();
const Categ = require('../Models/Categ');

router.post('/addcateg', async (req, res) => {
    try {
        const { uid, category, item, questions } = req.body;


        console.log(req.url)
        // Validate that required data is present
        if (!category || !item) {
            return res.status(400).json({ error: 'Categories and itm are required.' });
        }

        // Create a new instance of your Comp model
        const note = new Categ({
            category,
            item,
            questions,
            uid
        });

        // Save the instance to the database
        const savedNote = await note.save();

        // Respond with a 201 status code and the saved data
        res.status(201).json(savedNote);
        // console.log(savedNote);
    } catch (error) {
        // Log the entire error object for more information
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
