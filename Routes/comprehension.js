const express = require('express');
const router = express.Router();
const Components = require('../Models/Comp');

router.post('/addcomp', async (req, res) => {
    try {
        const { psg, ques, uid } = req.body;

        // Check if user ID is available in the request
        // if (!req.user || !req.user.userId) {
        //     return res.status(401).json({ message: 'Unauthorized. User ID not available.' });
        // }

        // If errors are encountered, return bad request and the errors
       

        const note = new Components({
            psg, 
            ques,
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
