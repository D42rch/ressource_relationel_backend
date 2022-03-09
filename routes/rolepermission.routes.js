module.exports = app => {
    const rolepermissions = require('../controllers/rolepermission.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', rolepermissions.create);

    router.get('/', rolepermissions.findAll);

    app.use('/api/rolepermissions', router);
}