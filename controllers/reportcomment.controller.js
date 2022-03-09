const db = require('../models');
const Reportcomment = db.reportcomment;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create Reportcomment 
    return Reportcomment.create(req.body)
        .then(reportcomment => res.json(reportcomment))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Reportcomment.findByPk(req.params.id)
        .then(reportcomment => {
            if (!reportcomment) {
                throw { status: 404, message: 'Requested reportcomment not found' };
            }
            req.reportcomment = reportcomment;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Reportcomment.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reportcomment."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Reportcomment.findByPk(req.params.id)
        .then(reportcomment => {
            if (!reportcomment) {
                throw { status: 404, message: 'Requested reportcomment not found' };
            }
            Object.assign(reportcomment, req.body);
            return reportcomment.save();
        })
        .then(reportcomment => res.json(reportcomment))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Reportcomment.findByPk(req.params.id)
        .then(reportcomment => {
            if (!reportcomment) {
                throw { status: 404, message: 'Requested reportcomment not found' };
            }
            return reportcomment.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

