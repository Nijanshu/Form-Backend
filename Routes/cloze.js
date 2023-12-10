const express = require('express');
const router = express.Router();
const Cloze = require('../Models/Cloze');

router.post('/addcloze', async (req, res) => {
    try {
        const { uid, preview, sentence } = req.body;
        const selectedword= req.query.words.split(',');
       
        // Check if user ID is available in the request
        // if (!req.user || !req.user.userId) {
        //     return res.status(401).json({ message: 'Unauthorized. User ID not available.' });
        // }

        // If errors are encountered, return bad request and the errors
       

        const note = new Cloze({
            preview, 
            sentence, 
            selectedword,
            uid
        });

        const savedNote = await note.save();
        res.json(savedNote);
        console.log(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
