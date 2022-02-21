module.exports = app => {
    const comments = require('../controllers/comment.controller');

    const {
        registrationSchema,
        registerValidation,
      } = require('../utils/registerShema');

    var router = require('express').Router();

    router.post('/', comments.create);

    router.get('/', comments.findAll);

    app.use('/api/comments', router);
}