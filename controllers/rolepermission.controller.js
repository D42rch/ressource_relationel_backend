const db = require('../models');
const Rolepermission = db.rolepermission;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Rolepermission 
    return Rolepermission.create(req.body)
        .then(rolepermission => res.json(rolepermission))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Rolepermission.findByPk(req.params.id)
        .then(rolepermission => {
            if (!rolepermission) {
                throw { status: 404, message: 'Requested rolepermission not found' };
            }
            req.rolepermission = rolepermission;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Rolepermission.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving rolepermission."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Rolepermission.findByPk(req.params.id)
        .then(rolepermission => {
            if (!rolepermission) {
                throw { status: 404, message: 'Requested rolepermission not found' };
            }
            Object.assign(rolepermission, req.body);
            return rolepermission.save();
        })
        .then(rolepermission => res.json(rolepermission))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Rolepermission.findByPk(req.params.id)
        .then(rolepermission => {
            if (!rolepermission) {
                throw { status: 404, message: 'Requested rolepermission not found' };
            }
            return rolepermission.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

