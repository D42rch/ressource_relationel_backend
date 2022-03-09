module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define('Message', {
        sender_id: {
            type: Sequelize.INTEGER,
        },
        receiver_id: {
            type: Sequelize.INTEGER,
        }, 
        attachement_URL: {
            type: Sequelize.STRING,
        },
        reply_at: {
            type: Sequelize.INTEGER,
        },
        content: {
            type: Sequelize.STRING
        }
    })

    return Message;
}