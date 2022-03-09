const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;

let refreshTokens = [];

require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { body, validationResult } = require('express-validator');




exports.signin = async (req, res, next) => {


    var user = await User.findOne({ where: { username: req.body.username } }); // { where: { title: 'My Title' } }

    if (user === null) {

        console.log('Not found!');
        res.status(401).send('Invalid credentials - Bad username')
        return;
    
    } else {
    

        await bcrypt.compare(req.body.password, user.hash_password)
        .then((valid) => {

            if(!valid || valid !== true)  {
                console.log('Unvalid access');
                res.status(401).send('Invalid credentials - Bad password');
                return;
            }

            console.log('auth success');
            var temp_user = user.dataValues;
            delete temp_user.hash_password;

            // Generate Access / Refresh token 
            var access_token = generateAccessToken(temp_user);
            var refresh_token = generateRefreshToken(temp_user);

            req.user = {
                tokens: {
                    access_token,
                    refresh_token,
                }, 
                current_user: temp_user,
            };
            res.send({
                tokens: {
                    access_token,
                    refresh_token,
                }, 
                current_user: temp_user,
            });
            next();
           // console.log(req.user);


        }).catch(err => {
            console.log('Unvalid access');
            res.status(401).send('Invalid credentials - Bad username or password')
            return;
        })

    
    }

}


// TODO 
exports.signup = async (req, res, next) => {

}

// TODO
exports.disconnect = async (req, res, next) => {

}

// TODO
exports.resetPassword = (req, res, next) => {

}

exports.refreshToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        res.status(401).send('Empty Token');
        return;
    }

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if(err) {
            res.status(401).send('Bad Token');
            return;
        }

        // Find this user in database
        var user = await User.findOne({ where: { username: user.username } }); // { where: { title: 'My Title' } }

        var temp_user = user.dataValues;
        delete temp_user.hash_password;
        
        if(temp_user === null) {

            console.log('User not found');
            res.status(401).send('Invalid user - Not found')
            return; 

        } else {

            var refresh_token = generateAccessToken(temp_user);

            req.user = {
                tokens: {
                    access_token: refresh_token,
                    refresh_token: token,
                }, 
                current_user: temp_user,
            }

            console.log(req.user);

            res.send({ 
                access_token: refresh_token,
            })

        }


       
    })

}


function generateAccessToken(data) {

    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

}

function generateRefreshToken(data) {

    return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '8h' })

}