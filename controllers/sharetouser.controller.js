const db = require('../models');
const Sharetouser = db.sharetouser;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Sharetouser 
    return Sharetouser.create(req.body)
        .then(sharetouser => res.json(sharetouser))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Sharetouser.findByPk(req.params.id)
        .then(sharetouser => {
            if (!sharetouser) {
                throw { status: 404, message: 'Requested sharetouser not found' };
            }
            req.sharetouser = sharetouser;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Sharetouser.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving sharetouser."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Sharetouser.findByPk(req.params.id)
        .then(sharetouser => {
            if (!sharetouser) {
                throw { status: 404, message: 'Requested sharetouser not found' };
            }
            Object.assign(sharetouser, req.body);
            return sharetouser.save();
        })
        .then(sharetouser => res.json(sharetouser))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Sharetouser.findByPk(req.params.id)
        .then(sharetouser => {
            if (!sharetouser) {
                throw { status: 404, message: 'Requested sharetouser not found' };
            }
            return sharetouser.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

