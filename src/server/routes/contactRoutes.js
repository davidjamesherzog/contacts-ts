var router = require('express').Router();
var four0four = require('../utils/404')();
var data = require('../data');

var routes = function(Contact) {

    var contactController = require('../controllers/contactController')(Contact);

    router
      .route('/')
      .get(contactController.list)
      .post(contactController.post);

    router.use('/:id', contactController.use);
    router
      .route('/:id')
      .get(contactController.get)
      .delete(contactController.remove)
      .patch(contactController.patch)
      .put(contactController.put);

    router
      .route('/*')
      .get(four0four.notFoundMiddleware);

    return router;
};

module.exports = routes;
