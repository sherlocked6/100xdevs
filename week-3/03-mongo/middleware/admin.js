const {Admin} = require('../db')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const adminUsername = req.headers.username;
    const adminPassword = req.headers.password;

    await Admin.findOne({
        username: adminUsername,
        password: adminPassword
    })
    .then((value) => {
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    })
}

module.exports = adminMiddleware;