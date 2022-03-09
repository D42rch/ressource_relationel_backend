module.exports = (sequelize, Sequelize) => {
    const Ressource = sequelize.define('Ressource', {
        owner_id: {
            type: Sequelize.INTEGER,
        },
        category_id: {
            type: Sequelize.INTEGER,
        }, 
        ressource_type_id: {
            type: Sequelize.INTEGER,
        },
        relationship_type_id: {
            type: Sequelize.INTEGER,
        },
        visibility_type_id: {
            type: Sequelize.INTEGER,
        },
        score: {
            type: Sequelize.INTEGER,
        },
        isAccept: {
            type: Sequelize.BOOLEAN,
        },
        userAccept: {
            type: Sequelize.INTEGER,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }
    })

    return Ressource;
}