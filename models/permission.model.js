module.exports = (sequelize, Sequelize) => {
    const Permission = sequelize.define('Permission', {
        name: {
            type: Sequelize.STRING,
        }
    })

    return Permission;
}