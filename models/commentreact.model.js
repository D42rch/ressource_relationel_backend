module.exports = (sequelize, Sequelize) => {
    const Commentreact = sequelize.define('Commentreact', {
        react_id: {
            type: Sequelize.INTEGER,
        },
        comment_id: {
            type: Sequelize.INTEGER,
        }
    })

    return Commentreact;
}