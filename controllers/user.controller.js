const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {

    // hash password
    const pwd = await bcrypt.hash(req.body.hash_password, 10)
    req.body.hash_password = pwd;
    // create user 
    return User.create(req.body)
        .then(user => res.json(user))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return User.findByPk(req.params.id)
        .then(user => {
            if (!user) {
                throw { status: 404, message: 'Requested User not found' };
            }
            req.user = user;
            return next();
        })
        .catch(next);
},

exports.me = (req, res, next) => {
    

    if(req.user !== undefined) {

        return User.findByPk(req.user.id)
        .then(user => {
            if (!user) {
                res.status(401);
                return;
            }

            res.send(user);

        })
        .catch((err) => {
            console.log(err.message);
            res.status(401);
            return;
        });
    }

    res.status(401);
    return;


}

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

