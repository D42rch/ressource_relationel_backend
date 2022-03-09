module.exports = app => {
    const roles = require('../controllers/role.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', roles.create);

    router.get('/', roles.findAll);

    app.use('/api/roles', router);
}