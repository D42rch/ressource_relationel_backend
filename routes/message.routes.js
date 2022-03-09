module.exports = app => {
    const messages = require('../controllers/message.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', messages.create);

    router.get('/', messages.findAll);

    app.use('/api/messages', router);
}