const {jwtsecret} = require("../config.js")
const jwt = require("jsonwebtoken")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(" ")[1];

    const decodedValue = jwt.verify(jwtToken, jwtsecret)

    if(decodedValue.username){
        req.username = decodedValue.username
        next();
    }
    else{
        res.status(403).json({
            msg: "you are not authenticated"
        })
    }
}

module.exports = userMiddleware;