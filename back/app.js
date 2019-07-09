const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require('./routes/auth/auth');
const connection = require('./helpers/db.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    function(email, password, cb) {
      // if an error is obtained
      return cb(err);
      // if login/password are incorrect
      return cb(null, false, {message: 'Incorrect email or password.'});
      // if the user agrees we return the user object
      return cb(null, user);
    },
  ),
);

app.get('/', (req, res) => {
  res.send('youhou');
});

app.use('/auth', authRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log('Listening on port ' + server.address().port);
});
