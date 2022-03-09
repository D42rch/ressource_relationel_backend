const db = require('../models');
const Message = db.message;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create message 
    return Message.create(req.body)
        .then(message => res.json(message))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Message.findByPk(req.params.id)
        .then(message => {
            if (!message) {
                throw { status: 404, message: 'Requested Message not found' };
            }
            req.message = message;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Message.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Messages."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Message.findByPk(req.params.id)
        .then(message => {
            if (!message) {
                throw { status: 404, message: 'Requested Message not found' };
            }
            Object.assign(message, req.body);
            return message.save();
        })
        .then(message => res.json(message))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Message.findByPk(req.params.message)
        .then(message => {
            if (!message) {
                throw { status: 404, message: 'Requested Message not found' };
            }
            return message.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

