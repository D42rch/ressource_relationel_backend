module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        surname: {
            type: Sequelize.STRING,
        },
        forname: {
            type: Sequelize.STRING,
        }, 
        username: {
            type: Sequelize.STRING,
        },
        hash_password: {
            type: Sequelize.STRING,
        },
        date_of_birth: {
            type: Sequelize.DATE,
        },
        mail: {
            type: Sequelize.STRING,
        },
        isConfirmed: {
            type: Sequelize.BOOLEAN,
        },
        civility: {
            type: Sequelize.STRING,
        },
        picture_url: {
            type: Sequelize.STRING,
        },
        role_id: {
            type: Sequelize.INTEGER,
        }
    })

    return User;
}