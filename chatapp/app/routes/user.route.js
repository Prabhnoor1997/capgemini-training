const express = require('express');
var router = express.Router();
const userController = require('../../controllers/userController');

const {check, validationResult} = require('express-validator/check');
// Create a new Note
router.post('/register', [
    check('firstName', 'Name must have more than 5 characters').not().isEmpty(),
    //lastname must be 
    check('lastName', 'Name must have more than 5 characters').not().isEmpty(),
    // username must be an email
    check('email', 'Not a valid email').isEmail(),
    // password must be at least 5 chars long
    check('password').isLength({ min: 5 })
    //
],  function (req, res) {
    const errors = validationResult(req);
    // console.log(req.body);

    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    } 
        
        return userController.registerController(req,res);
        

    
})

router.post('/login',userController.loginController)

module.exports = router;