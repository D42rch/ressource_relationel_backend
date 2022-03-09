module.exports = (sequelize, Sequelize) => {
    const Reportcomment = sequelize.define('Reportcomment', {
        isTreated : {
            type: Sequelize.BOOLEAN,
        },
        reason : {
            type: Sequelize.STRING,
        }, 
        owner_id : {
            type: Sequelize.INTEGER,
        }, 
        comment_id : {
            type: Sequelize.INTEGER,
        }
    })

    return Reportcomment;
}