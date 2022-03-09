const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res, next) => {

    console.log(req.body);
    return User.create(req.body)
        .then(user => res.json(user))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return User.findByPk(req.params.user_id)
        .then(user => {
            if (!user) {
                throw { status: 404, message: 'Requested User not found' };
            }
            req.user = user;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return User.findByPk(req.params.user_id)
        .then(user => {
            if (!user) {
                throw { status: 404, message: 'Requested User not found' };
            }
            Object.assign(user, req.body);
            return user.save();
        })
        .then(user => res.json(user))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return User.findByPk(req.params.user_id)
        .then(user => {
            if (!user) {
                throw { status: 404, message: 'Requested User not found' };
            }
            return user.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}