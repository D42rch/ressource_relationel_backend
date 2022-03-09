module.exports = (sequelize, Sequelize) => {
    const Sharetouser = sequelize.define('Sharetouser', {
        ressource_id: {
            type: Sequelize.INTEGER,
        },
        user_id: {
            type: Sequelize.INTEGER,
        }
    })

    return Sharetouser;
}