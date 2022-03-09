module.exports = app => {
    const ressources = require('../controllers/ressource.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', ressources.create);

    router.get('/', ressources.findAll);

    app.use('/api/ressources', router);
}