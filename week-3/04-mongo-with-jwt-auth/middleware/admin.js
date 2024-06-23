// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {jwtsecret} = require("../config.js")

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodedvalue = jwt.verify(jwtToken, jwtsecret);

        if(decodedvalue.username){
            next()
        }else{
            res.status(403).json({
                msg: "You are not autheticated"
            })
        }
    }
    catch(e){
        res.json({
            msg: "Incorrect Inputs"
        })
    }


}

module.exports = adminMiddleware;