const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Movie
        .find({
            title: { $regex: new RegExp(req.query.q, 'i') }
        })
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.error(err)
            res.status(422).json(err)
        });
    },
    findById: (req, res) => {
        db.Movie
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    create: (req, res) => {
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.error(err)
                res.status(422).json(err)
            });
    },
    update: (req, res) => {
        db.Movie
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
            console.error(err)
            res.status(422).json(err)
            });
    },
    remove: (req, res) => {
        db.Movie
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
            console.error(err)
            res.status(422).json(err)
            });
    }
};