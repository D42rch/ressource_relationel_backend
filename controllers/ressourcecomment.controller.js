const db = require('../models');
const Ressourcecomment = db.ressourcecomment;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Ressourcecomment 
    return Ressourcecomment.create(req.body)
        .then(ressourcecomment => res.json(ressourcecomment))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Ressourcecomment.findByPk(req.params.id)
        .then(ressourcecomment => {
            if (!ressourcecomment) {
                throw { status: 404, message: 'Requested ressourcecomment not found' };
            }
            req.ressourcecomment = ressourcecomment;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Ressourcecomment.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ressourcecomment."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Ressourcecomment.findByPk(req.params.id)
        .then(ressourcecomment => {
            if (!ressourcecomment) {
                throw { status: 404, message: 'Requested ressourcecomment not found' };
            }
            Object.assign(ressourcecomment, req.body);
            return ressourcecomment.save();
        })
        .then(ressourcecomment => res.json(ressourcecomment))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Ressourcecomment.findByPk(req.params.id)
        .then(ressourcecomment => {
            if (!ressourcecomment) {
                throw { status: 404, message: 'Requested ressourcecomment not found' };
            }
            return ressourcecomment.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

