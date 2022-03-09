module.exports = app => {
    const visibilitytypes = require('../controllers/visibilitytype.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', visibilitytypes.create);

    router.get('/', visibilitytypes.findAll);

    app.use('/api/visibilitytypes', router);
}