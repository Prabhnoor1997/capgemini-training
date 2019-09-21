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
exports.loginService = (body, callback) => {
    console.log("in login service");
    userModel.login(body, (err, result) => {
        if (err)
            callback(err);
        else
            callback(null, result);
    })
}

exports.forgetService = (body, callback) => {
    console.log("in forget service");
    userModel.forget(body, (err, result) => {
        if (err)
            callback(err);
        else
            callback(null, result);
    })
}

exports.resetPassword = (req, callback) => {
    console.log("in reset service");
    userModel.reset(req, (err, result) => {
        if (err)
            callback(err);
        else
            callback(null, result);
    })
}

exports.getUsers = (req, callback) => {
    console.log("in get user service");
    userModel.getUsers(req, (err, result) => {
        if (err)
            callback(err);
        else
            callback(null, result);
    })
}


