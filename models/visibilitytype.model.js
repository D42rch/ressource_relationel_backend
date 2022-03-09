module.exports = (sequelize, Sequelize) => {
    const Visibilitytype = sequelize.define('Visibilitytype', {
        name: {
            type: Sequelize.STRING,
        }
    })
    return Visibilitytype;
}