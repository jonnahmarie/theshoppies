const mongoose = require('mongoose');
const db = require('../models');

// File empties the Movie nomination collection and inserts the movies below

mongoose.connect(
    process.env.MONGOD_URI ||
    'mongod://localhost/omdb'
);

const movieSeed = [
    {
        image: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
        title: 'Parasite',
        year: '2019'
    },
    {
        image: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        title: 'Spirited Away',
        year: '2001'
    }
]

db.Movie
    .remove({})
    .then(() => db.Movie.collection.insertMany(movieSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted.');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });