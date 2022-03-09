module.exports = app => {
    const relationshiptypes = require('../controllers/relationshiptype.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', relationshiptypes.create);

    router.get('/', relationshiptypes.findAll);

    app.use('/api/relationshiptypes', router);
}