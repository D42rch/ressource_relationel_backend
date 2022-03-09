module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('Comment', {
        owner_id: {
            type: Sequelize.INTEGER,
        },
        content: {
            type: Sequelize.INTEGER,
        }, 
        attachement_URL: {
            type: Sequelize.STRING,
        }, 
        score: {
            type: Sequelize.INTEGER,
        },
        reply_at: {
            type: Sequelize.INTEGER,
        },
        archived: {
            type: Sequelize.BOOLEAN,
        }
    })

    return Comment;
}