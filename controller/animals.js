const express = require('express');
const router = express.Router();
const animals = require('../models/animals.js');

// routes {
    // Post Routes
    
    // New

    // Edit

    // Show
    router.get('/', async (req,res) => {
        const Animals = await animals.find({});
        res.render(
            "animals/index.ejs",
            {
                animals:Animals
                
            });
    });

// }
module.exports = router;
