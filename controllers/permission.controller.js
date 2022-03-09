const db = require('../models');
const Permission = db.permission;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create permission 
    return Permission.create(req.body)
        .then(permission => res.json(permission))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Permission.findByPk(req.params.id)
        .then(permission => {
            if (!permission) {
                throw { status: 404, message: 'Requested Permission not found' };
            }
            req.permission = permission;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Permission.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Permission."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Permission.findByPk(req.params.id)
        .then(permission => {
            if (!permission) {
                throw { status: 404, message: 'Requested Permission not found' };
            }
            Object.assign(permission, req.body);
            return permission.save();
        })
        .then(permission => res.json(permission))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Permission.findByPk(req.params.id)
        .then(permission => {
            if (!permission) {
                throw { status: 404, message: 'Requested Permission not found' };
            }
            return permission.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

