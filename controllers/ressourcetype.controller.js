const db = require('../models');
const Ressourcetype = db.ressourcetype;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Ressourcetype 
    return Ressourcetype.create(req.body)
        .then(ressourcetype => res.json(ressourcetype))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Ressourcetype.findByPk(req.params.id)
        .then(ressourcetype => {
            if (!ressourcetype) {
                throw { status: 404, message: 'Requested ressourcetype not found' };
            }
            req.ressourcetype = ressourcetype;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Ressourcetype.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ressourcetype."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Ressourcetype.findByPk(req.params.id)
        .then(ressourcetype => {
            if (!ressourcetype) {
                throw { status: 404, message: 'Requested ressourcetype not found' };
            }
            Object.assign(ressourcetype, req.body);
            return ressourcetype.save();
        })
        .then(ressourcetype => res.json(ressourcetype))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Ressourcetype.findByPk(req.params.id)
        .then(ressourcetype => {
            if (!ressourcetype) {
                throw { status: 404, message: 'Requested ressourcetype not found' };
            }
            return ressourcetype.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

