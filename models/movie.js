import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const movieSchema = new Schema({
    _id: { type: String },
    title: { type: String, required: true },
    year: { type: String, required: true },
    image: { type: String, required: true, default: "" }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;