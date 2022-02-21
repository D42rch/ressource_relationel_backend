const db = require('../models');
const Category = db.category;
const Op = db.Sequelize.Op;

exports.create = async (req, res, next) => {
    // create category 
    return Category.create(req.body)
        .then(category => res.json(category))
        .catch(next);
},

exports.findOne = (req, res, next) => {
    return Category.findByPk(req.params.id)
        .then(category => {
            if (!category) {
                throw { status: 404, message: 'Requested Category not found' };
            }
            req.category = category;
            return next();
        })
        .catch(next);
},

exports.findAll = (req, res, next) => {
    Category.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Category."
            })
        })
},

exports.update_by_id = (req, res, next) => {
    return Category.findByPk(req.params.id)
        .then(category => {
            if (!category) {
                throw { status: 404, message: 'Requested Category not found' };
            }
            Object.assign(category, req.body);
            return category.save();
        })
        .then(category => res.json(category))
        .catch(next);
}

exports.delete_by_id = (req, res, next) => {
    return Category.findByPk(req.params.id)
        .then(category => {
            if (!category) {
                throw { status: 404, message: 'Requested Category not found' };
            }
            return category.destroy();
        })
        .then(() => res.status(200).end())
        .catch(next);
}

