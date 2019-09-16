const userService = require('../services/userServices');
//const { check, validationResult } = require('express-validator');
exports.loginController = (req , res ) => {
    console.log("in login controller")
    let responseResult={};
    userService.loginService(req.body , (err , result ) => {
        if(err){
            responseResult.success=false;
            responseResult.message="login Failed";
            return res.status(404).send(responseResult);
        }
        else{
            responseResult.success = true;
            responseResult.message = "login Succesfull";
            return res.status(200).send(responseResult);
        }
    })
}


exports.registerController = (req, res) => {

    let responseResult={};
    
    userService.registerService(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            return res.status(200).send(responseResult);
        }
    })
}

exports.forgetPasswordController = (req, res) => {
    
    let responseResult={};
    
    userService.forgetService(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.errors = err;
            return res.status(400).send(responseResult);
        } else {
            responseResult.success = true;
            responseResult.result = result;
            return res.status(200).send(responseResult);
        }
    })
}


