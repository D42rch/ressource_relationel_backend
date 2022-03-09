module.exports = app => {
    const ressourcecomments = require('../controllers/ressourcecomment.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', ressourcecomments.create);

    router.get('/', ressourcecomments.findAll);

    app.use('/api/ressourcecomments', router);
}