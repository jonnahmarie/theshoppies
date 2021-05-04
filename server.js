const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

// API routes
app.use(routes)

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/omdb'), { useNewUrlParser: true };

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
}) 