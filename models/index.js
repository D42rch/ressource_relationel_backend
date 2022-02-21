const dbConfig = require('../config/db.config');

const Sequelize = require('Sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, 
    dialect: dbConfig.dialect,
    operatorsAlias: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }

})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require('./tutorial.model')(sequelize, Sequelize);
db.user = require('./user.model')(sequelize, Sequelize);
db.ressource = require('./ressource.model')(sequelize, Sequelize);
db.category = require('./category.model')(sequelize, Sequelize);
db.comment = require('./comment.model')(sequelize, Sequelize);


module.exports = db;