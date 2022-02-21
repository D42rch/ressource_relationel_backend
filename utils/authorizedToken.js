module.exports = (req, res, next) => {
    var infos = null;

    // TODO : Utiliser express-sessions 
    if (req.c_user !== undefined) {


        infos = {
            src: {
                path: req.route.path,
                methods: req.route.methods,
            },
            user: req.user.id,
            role: (req.user.admin ? 'admin' : 'user'),
        }


        await checkPermissions(infos.src.path, infos.methods, infos.role)
        .then(() => {
            next();
        }).catch((err) => {
            return;
        })

    }

    return;
}


var checkPermissions = (path, role, method) => {


    // TODO: Checker les permissions relatif au role de l'utilisateur, en BDD
    // TODO: Transmettre la methode

    return new Promise((resolve, reject) => {

        if (path === '/api/admin/') { // GET
            if (role === 'user') {
                console.log(`You don't have permission to access this route ${path}`);
                reject();
            }
        }

        if (path === '/api/admin/set/role/') { // POST
            if (role === 'user') {
                console.log(`You don't have permission to access this route ${path}`);
                reject();
            }
        }



        resolve();

    })




}