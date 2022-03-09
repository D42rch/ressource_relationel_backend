module.exports = app => {
    const sharetousers = require('../controllers/sharetouser.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', sharetousers.create);

    router.get('/', sharetousers.findAll);

    app.use('/api/sharetousers', router);
}