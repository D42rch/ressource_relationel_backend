module.exports = app => {
    const reportcomments = require('../controllers/reportcomment.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', reportcomments.create);

    router.get('/', reportcomments.findAll);

    app.use('/api/reportcomments', router);
}