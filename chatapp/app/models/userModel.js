const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required : true
    }
}, {
        timestamps: true
    });

let User = mongoose.model('user', userSchema);

class userModel {
    register(body, callback) {

        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(body.password, salt);
        ;//console.log(newEncrpyted);
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password : hash
        });
        // user.password=newEncrypted;
        user.save((err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })

    };
    login(body , callback){
        var user=User.find({username : body.username}, function (err,res) {
            if(err)
            callback(err)
            else
            callback(null,res)
        })
        var authStatus=bcrypt.compareSync(body.password, user.passwrod); // true
        if(authStatus)
            console.log("loged in")
        else
            console.log("sorry galat glbaat");

    }

}

module.exports = new userModel();






        // if (!req.body.content) {
        //     return res.status(400).send({
        //         message: "User content can not be empty"
        //     });
        // }

        // user.save().then(err => { console.log(err)},res => {console.log("connected ")}

        // };


            // .then(data => {
            //     res.send(data);
            // }).catch(err => {
            //     res.status(500).send({
            //         message: err.message || "Some error occurred while creating the user."
            //     });
            // });



