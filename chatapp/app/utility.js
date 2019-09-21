
const secret=require('../config/secret.config').toString();
var jwt = require('jsonwebtoken');

exports.authUser = (req,res,next) => {
    var token=req.headers["token"];
    //console.log(token,req);
    if(!token) return res.status(401).send("Acess denied Token Not Found")
    try{
        const decoded = jwt.verify(token,secret);
        req.user=decoded;
        next();
    }
    catch(err){
        console.log("Token Verification error"+err);
        res.status(400).send("Invalis token");
    }
}
