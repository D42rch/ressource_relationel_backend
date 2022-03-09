const db = require('../models');
const Visibilitytype = db.visibilitytype;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Visibilitytype 
    return Visibilitytype.create(req.body)
        .then(visibilitytype => res.json(visibilitytype))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Visibilitytype.findByPk(req.params.id)
        .then(visibilitytype => {
            if (!visibilitytype) {
                throw { status: 404, message: 'Requested visibilitytype not found' };
            }
            req.visibilitytype = visibilitytype;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Visibilitytype.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || "Some error occurred while retrieving visibilitytype."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Visibilitytype.findByPk(req.params.id)
        .then(visibilitytype => {
            if (!visibilitytype) {
                throw { status: 404, message: 'Requested visibilitytype not found' };
            }
            Object.assign(visibilitytype, req.body);
            return visibilitytype.save();
        })
        .then(visibilitytype => res.json(visibilitytype))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Visibilitytype.findByPk(req.params.visibilitytype)
        .then(visibilitytype => {
            if (!visibilitytype) {
                throw { status: 404, message: 'Requested visibilitytype not found' };
            }
            return visibilitytype.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

