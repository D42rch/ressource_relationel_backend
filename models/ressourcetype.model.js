module.exports = (sequelize, Sequelize) => {
    const Ressourcetype = sequelize.define('Ressourcetype', {
        name : {
            type: Sequelize.STRING,
        }
    })

    return Ressourcetype;
}