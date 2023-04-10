const { mongoose } = require('../db/connection');

const animalsSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
}, {timestamps: true})

const Animal = mongoose.model('animals', animalsSchema);

module.exports = Animal