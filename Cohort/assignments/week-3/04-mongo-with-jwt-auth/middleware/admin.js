const jwt = require("jsonwebtoken");
const secretKey = "tecnofyle";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const token  = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken,secretKey);
        if(decodedValue.username){
            next();
        }
        else{
            res.status(403).send("Unauthorized");
        }
    } catch (error) {
        res.status(403).send("Incorrect Inputs");
    }

    

}

module.exports = adminMiddleware;