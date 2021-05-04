const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    _id: { type: String },
    title: { type: String },
    year: { type: Number },
    image: { type: String }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;