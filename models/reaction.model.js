module.exports = (sequelize, Sequelize) => {
    const Reaction = sequelize.define('Reaction', {
        emote: {
            type: Sequelize.STRING,
        }
    })
    return Reaction;
}