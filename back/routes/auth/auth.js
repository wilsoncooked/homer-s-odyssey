const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');
const passport = require('passport');

router.post('/signup', function(req, res, next) {
  const {flash, open, passwordbis, ...newUser} = req.body;
  connection.query('INSERT INTO users SET ?', newUser, function(
    error,
    result,
    field,
  ) {
    if (error) res.status(500).json({flash: error.message});
    else res.status(200).json({flash: 'User has been signed up!'});
  });
});

router.post('/signin', function(req, res) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({message: info.message});
    return res.json({user});
  })(req, res);
});


passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, cb) {
        //Your code here
    }
));


function(email, password, cb){
// if an error is obtained
return cb(err)
// if login/password are incorrect
return cb(null, false, { message: 'Incorrect email or password.' })
// if the user agrees we return the user object
return cb(null, user)
}


module.exports = router;
