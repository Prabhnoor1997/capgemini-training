const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var nodemailer=require('nodemailer');
var secret = require('../../config/secret.config.js').toString();
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
        unique : true,
        required: true
        
    },
    password: {
        type: String,
        required: true
    },
    loginToken : {
        type : String
    }
}, {
        timestamps: true
    });

let User = mongoose.model('user', userSchema);

class userModel {
    register(body, callback) {

        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(body.password, salt);
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: hash
        });
        user.save((err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })

    }
    login(body, callback) {
        
        User.findOne({ email: body.email }, (err, result) => {
            if (err) {
                callback(err);
            }
            else {
                //console.log("result--",result);

                bcrypt.compare(body.password, result.password, (err, res) => {
                    if (!res) {
                        console.log("login failed");
                        callback(!res);
                    }

                    else {
                        console.log("Login Confirmed")
                        var
                        token = jwt.sign({email : result.email }, secret , { expiresIn : '1h'});
                        User.updateOne({email : body.email},{ loginToken : token  },(err,re) =>{
                            if(err)
                            callback(err);
                        })
                        console.log(token);
                        callback(null,res);

                    }

                });
            }
        })
    }

    forget(userInput, callback) {
        User.findOne({ email: userInput.email }, (err, user) => {
          if (!user) {
            callback({ message: 'Email is not registered' })
          }
          else {
            var forgotToken = jwt.sign({ _id: user._id, name: user.name, email: user.email }, secret, { expiresIn: '10m' });
            User.update({ email: user.email }, { token: forgotToken }, (err, user) => {
              if (err) {
                callback(err);
              } else {
                callback(null, user);
              }
            });
            var smtpTransport = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                user: "babbalrai123@gmail.com",
                pass: "babbalrai123"
              }
            })
            var mailOptions = {
              to: 'prabhnoor.parry@gmail.com',
              from: 'babbalrai123@gmail.com',
              subject: 'Password Reset',
              text: 'Please click on the given link to reset your password http://localhost:3000/reset/' + forgotToken + '\n'
            }
            smtpTransport.sendMail(mailOptions, (err, result) => {
              if (err) {
                callback(err);
              } else {
                callback(null, result);
              }
            })
          }
        })
      }
    }
    

module.exports = new userModel();






        