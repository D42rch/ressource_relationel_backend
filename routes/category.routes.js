module.exports = app => {
    const categories = require('../controllers/category.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', categories.create);

    router.get('/', categories.findAll);

    app.use('/api/categories', router);
}