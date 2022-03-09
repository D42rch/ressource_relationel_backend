const db = require('../models');
const Relationshiptype = db.relationshiptype;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Relationshiptype 
    return Relationshiptype.create(req.body)
        .then(relationshiptype => res.json(relationshiptype))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Relationshiptype.findByPk(req.params.id)
        .then(relationshiptype => {
            if (!relationshiptype) {
                throw { status: 404, message: 'Requested relationshiptype not found' };
            }
            req.relationshiptype = relationshiptype;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Relationshiptype.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving relationshiptype."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Relationshiptype.findByPk(req.params.id)
        .then(relationshiptype => {
            if (!relationshiptype) {
                throw { status: 404, message: 'Requested relationshiptype not found' };
            }
            Object.assign(relationshiptype, req.body);
            return relationshiptype.save();
        })
        .then(relationshiptype => res.json(relationshiptype))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Relationshiptype.findByPk(req.params.id)
        .then(relationshiptype => {
            if (!relationshiptype) {
                throw { status: 404, message: 'Requested relationshiptype not found' };
            }
            return relationshiptype.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

