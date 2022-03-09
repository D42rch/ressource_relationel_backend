module.exports = app => {
    const reactions = require('../controllers/reaction.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', reactions.create);

    router.get('/', reactions.findAll);

    app.use('/api/reactions', router);
}