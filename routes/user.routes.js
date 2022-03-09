module.exports = app => {
  const users = require('../controllers/user.controller');
  const checkAuth = require('../utils/authenticateToken');

  const {
    registrationSchema,
    registerValidation,
  } = require('../utils/registerShema');

  var router = require('express').Router();

  router.post('/', registrationSchema, registerValidation, users.create);

  router.get('/', users.findAll);

  router.get('/me', checkAuth, users.me);

  app.use('/api/users', router);
}