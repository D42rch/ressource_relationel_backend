const { body, validationResult } = require('express-validator');

exports.registrationSchema = [
    body('surname')
        .not().isEmpty()
        .withMessage('surname can not be empty'),
    body('forname')
        .not().isEmpty()
        .withMessage('surname can not be empty'),
    body('username')
        .not().isEmpty()
        .withMessage('username can not be empty'),
    body('hash_password')
        .isLength({ min: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1 })
        .withMessage('password must be at least 8 characters long, 1 lower character, 1 upper character and 1 number'),
    body('date_of_birth')
        .custom((value) => {
            return value = new Date(value);
            })
        .withMessage('this is not a date')
        .not().isEmpty()
        .withMessage('date of birth can not be empty')
        .isBefore(Date())
        .withMessage('date must be a valid date'),
    body('mail')
        .not().isEmpty()
        .withMessage('mail can not be empty')
        .isEmail()
        .withMessage('not valid mail'),
    body('civility')
        .isLength({min: 1, max: 1})
        .withMessage('civility must have a length of 1 and not empty')
        .custom((value) => {
            if (value !== 'M' && value !== 'F') {
              throw new Error('civility take the values F or M');
            }
            return true;
          }),
    ]

    exports.registerValidation = (req, res, next) => {
        const result = validationResult(req).array();
        if (!result.length) return next();
      
        const error = result[0].msg;
        res.json({ success: false, message: error });
      };