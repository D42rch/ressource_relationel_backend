const db = require('../models');
const Comment = db.comment;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create comment 
    return Comment.create(req.body)
        .then(comment => res.json(comment))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Comment.findByPk(req.params.id)
        .then(comment => {
            if (!comment) {
                throw { status: 404, message: 'Requested Comment not found' };
            }
            req.comment = comment;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Comment.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Comment."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Comment.findByPk(req.params.id)
        .then(comment => {
            if (!comment) {
                throw { status: 404, message: 'Requested Comment not found' };
            }
            Object.assign(comment, req.body);
            return comment.save();
        })
        .then(comment => res.json(comment))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Comment.findByPk(req.params.id)
        .then(comment => {
            if (!comment) {
                throw { status: 404, message: 'Requested Comment not found' };
            }
            return comment.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

