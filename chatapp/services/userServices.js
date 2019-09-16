const userModel = require('../app/models/userModel');

exports.registerService = (body, callback) => {



    userModel.register(body, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
 
}
exports.loginService = (body , callback) => {
    console.log("in login service");
    userModel.login(body, (err,result) => {
        if(err)
            callback(err);
            else
            callback(null,result);
    })
 }

 exports.forgetService = (body , callback) => {
    console.log("in forget service");
    userModel.forget(body, (err,result) => {
        if(err)
            callback(err);
            else
            callback(null,result);
    })
 }