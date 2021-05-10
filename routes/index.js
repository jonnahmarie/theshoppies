const movieController = require('../controllers/movieControllers');

const routes = app => {
    app.route('/api')
        .get(movieController.findAll)
        .post(movieController.create)
    app.route('/api/:id')
        .get(movieController.findById)
        .put(movieController.update)
        .delete(movieController.remove);
}

export default routes;