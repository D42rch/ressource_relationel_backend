const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer Token

    if (!token) {
        console.log(`Can't access authenticate route without Token`);
        return res.status(401).send('No token found');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(`Can't access with expired or invalid Token`);
            res.status(401).send('Invalid Token');
            return;
        }


        // TODO : Récupérer l'utilisateur actuellement en base 
        // Pour s'assurer d'avoir les infos les plus à jours concernant l'utilisateur

        if (user == null) {

            res.status(401).send('Token empty');
            return;

        } else {

            delete user.iat;
            delete user.exp;

            res.send(user);
            next()

        }

    })


}