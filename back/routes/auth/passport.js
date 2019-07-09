const passport = require('passport');

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
