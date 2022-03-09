module.exports = (sequelize, Sequelize) => {
    const Ressourcecomment = sequelize.define('Ressourcecomment', {
        ressource_id : {
            type: Sequelize.INTEGER,
        },
        comment_id : {
            type: Sequelize.INTEGER,
        }
    })

    return Ressourcecomment;
}