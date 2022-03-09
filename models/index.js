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
db.commentreact = require('./commentreact.model')(sequelize, Sequelize);
db.message = require('./message.model')(sequelize, Sequelize);
db.permission = require('./permission.model')(sequelize, Sequelize);
db.reaction = require('./reaction.model')(sequelize, Sequelize);
db.relationshiptype = require('./relationshiptype.model')(sequelize, Sequelize);
db.reportcomment = require('./reportcomment.model')(sequelize, Sequelize);
db.ressourcecomment = require('./ressourcecomment.model')(sequelize, Sequelize);
db.ressourcetype = require('./ressourcetype.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.rolepermission = require('./rolepermission.model')(sequelize, Sequelize);
db.sharetouser = require('./sharetouser.model')(sequelize, Sequelize);
db.visibilitytype = require('./visibilitytype.model')(sequelize, Sequelize);


module.exports = db;