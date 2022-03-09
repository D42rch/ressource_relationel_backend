module.exports = app => {
    const ressourcetypes = require('../controllers/ressourcetype.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', ressourcetypes.create);

    router.get('/', ressourcetypes.findAll);

    app.use('/api/ressourcetypes', router);
}