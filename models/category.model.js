module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category', {
        name: {
            type: Sequelize.STRING,
        },
        owner_id: {
            type: Sequelize.INTEGER,
        }, 
        isAccept: {
            type: Sequelize.BOOLEAN,
        },
        isArchived: {
            type: Sequelize.BOOLEAN,
        },
        userAccept: {
            type: Sequelize.INTEGER,
        }
    })

    return Category;
}