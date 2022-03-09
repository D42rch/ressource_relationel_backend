module.exports = (sequelize, Sequelize) => {
    const Relationshiptype  = sequelize.define('Relationshiptype ', {
        name: {
            type: Sequelize.STRING,
        }
    })

    return Relationshiptype;
}