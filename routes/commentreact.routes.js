module.exports = app => {
    const commentreacts = require('../controllers/commentreact.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', commentreacts.create);

    router.get('/', commentreacts.findAll);

    app.use('/api/commentreacts', router);
}