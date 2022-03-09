module.exports = app => {
    const permissions = require('../controllers/permission.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', permissions.create);

    router.get('/', permissions.findAll);

    app.use('/api/permissions', router);
}