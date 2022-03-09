const db = require('../models');
const CommentReact = db.commentreact;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create commentreact 
    return CommentReact.create(req.body)
        .then(commentreact => res.json(commentreact))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return CommentReact.findByPk(req.params.id)
        .then(commentreact => {
            if (!commentreact) {
                throw { status: 404, message: 'Requested Commentreact not found' };
            }
            req.commentreact = commentreact;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    CommentReact.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Commentreact."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return CommentReact.findByPk(req.params.id)
        .then(commentreact => {
            if (!commentreact) {
                throw { status: 404, message: 'Requested Commentreact not found' };
            }
            Object.assign(commentreact, req.body);
            return commentreact.save();
        })
        .then(commentreact => res.json(commentreact))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return CommentReact.findByPk(req.params.id)
        .then(commentreact => {
            if (!commentreact) {
                throw { status: 404, message: 'Requested Commentreact not found' };
            }
            return commentreact.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

