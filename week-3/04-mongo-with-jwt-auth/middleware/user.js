const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.Authentication
    const words = token.split(" ")
    const jwtToken = words[1]

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET)

    try{
        if(decodedValue.username){
            req.username = decodedValue.username
            next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.status(404).json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = userMiddleware;