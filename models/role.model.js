module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
        label : {
            type: Sequelize.STRING,
        }
    })
    return Role;
}