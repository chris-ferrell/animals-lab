// Import Dependencies 
require("dotenv").config(); 
const express = require("express");//Import express
const morgan = require("morgan"); // Import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const startAnimals = require('./db/animalSeedData.js');

const Animal = require('./models/animals.js')

const app = express();

// Middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method"));  // override for put and deletes requests from forms
app.use(express.urlencoded({exteneded: true})); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically 



// Routes   
app.get("/", (req, res) => {
    res.send("default route hit");
});
 

// Routers
const animalsController = require('./controller/animals');
app.use('/animals', animalsController);

app.get("/seed", async (req, res) => {
    await Animal.deleteMany({});
    await Animal.create(startAnimals);
    res.redirect('/');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});