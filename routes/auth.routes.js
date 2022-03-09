module.exports = app => {
    const auth = require('../controllers/auth.controller')
    const authCheck = require('../utils/authenticateToken')

    var router = require('express').Router();

    router.post('/signin', auth.signin);

    router.post('/signup', auth.signup);

    router.post('/disconnect', authCheck, auth.disconnect);

    router.post('/reset_password', authCheck, auth.resetPassword);

    router.post('/refresh_token', auth.refreshToken);

    app.use('/api/auth', router);
}