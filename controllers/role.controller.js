const db = require('../models');
const Role = db.role;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Role 
    return Role.create(req.body)
        .then(role => res.json(role))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Role.findByPk(req.params.id)
        .then(role => {
            if (!role) {
                throw { status: 404, message: 'Requested role not found' };
            }
            req.role = role;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Role.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving role."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Role.findByPk(req.params.id)
        .then(role => {
            if (!role) {
                throw { status: 404, message: 'Requested role not found' };
            }
            Object.assign(role, req.body);
            return role.save();
        })
        .then(role => res.json(role))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Role.findByPk(req.params.id)
        .then(role => {
            if (!role) {
                throw { status: 404, message: 'Requested role not found' };
            }
            return role.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

