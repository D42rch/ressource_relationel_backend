module.exports = (sequelize, Sequelize) => {
    const Rolepermission = sequelize.define('Rolepermission', {
        role_id: {
            type: Sequelize.STRING,
        },
        permission_id: {
            type: Sequelize.STRING,
        }
    })

    return Rolepermission;
}