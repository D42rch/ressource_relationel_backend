const db = require('../models');
const Reaction = db.reaction;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create reaction 
    return Reaction.create(req.body)
        .then(reaction => res.json(reaction))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Reaction.findByPk(req.params.id)
        .then(reaction => {
            if (!reaction) {
                throw { status: 404, message: 'Requested Reaction not found' };
            }
            req.reaction = reaction;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Reaction.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Reactions."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Reaction.findByPk(req.params.id)
        .then(reaction => {
            if (!reaction) {
                throw { status: 404, message: 'Requested Reaction not found' };
            }
            Object.assign(reaction, req.body);
            return reaction.save();
        })
        .then(reaction => res.json(reaction))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Reaction.findByPk(req.params.reaction)
        .then(reaction => {
            if (!reaction) {
                throw { status: 404, message: 'Requested Reaction not found' };
            }
            return reaction.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

