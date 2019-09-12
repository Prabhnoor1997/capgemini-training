const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}, {
        timestamps: true
    });

let User = mongoose.model('user', userSchema);
//user.firstName="parry";
//console.log(user.firstName);
// function userModel(){
// }
// userModel.prototype.register = (body , callback) => {
//  user = {
//     user   
//  }
// }
// module.exports = 

class userModel {
    register(req, res) {
        if (!req.body.content) {
            return res.status(400).send({
                message: "User details content can not be empty"
            });
        }
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the user."
                });
            });
    }
}

module.exports = new userModel(); 
