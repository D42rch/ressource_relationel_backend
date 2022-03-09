const db = require('../models');
const Ressource = db.ressource;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create ressource 
    return Ressource.create(req.body)
        .then(ressource => res.json(ressource))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Ressource.findByPk(req.params.id)
        .then(ressource => {
            if (!ressource) {
                throw { status: 404, message: 'Requested Ressource not found' };
            }
            req.ressource = ressource;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Ressource.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Ressources."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Ressource.findByPk(req.params.id)
        .then(ressource => {
            if (!ressource) {
                throw { status: 404, message: 'Requested Ressource not found' };
            }
            Object.assign(ressource, req.body);
            return ressource.save();
        })
        .then(ressource => res.json(ressource))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Ressource.findByPk(req.params.ressource)
        .then(ressource => {
            if (!ressource) {
                throw { status: 404, message: 'Requested Ressource not found' };
            }
            return ressource.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

