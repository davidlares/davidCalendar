require('dotenv').config
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const port = 3000;

// default view engine
app.set('view engine','pug');
// static file
app.use('/',express.static('static'))

// passport service initialize
app.use(passport.initialize());
app.use(passport.session());

// telling passport that use Google Oauth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: `${process.env.callbackURL}/oauth/google/callback`
}, function(accessToken, refreshToken, profile, cb){
  // user in session, user in DB, etc -> but for this example -> user in RAM memory
  var user = {
    accessToken: accessToken,  // access granted from provider -> expiracy date
    refreshToken: refreshToken, // once its expired, this value is used to nenew or create a new access
    profile: profile // user data
  };
  return cb(null, user);
}));

// serializing passport data -> defining how to save user data on express (session)
passport.serializeUser(function(user,done){
  done(null, user);
});
// find user when is authenticated
passport.deserializeUser(function(user,done){
  done(null, user)
});

// api endpoints
app.get('/', (req,res) => {
  res.render('index');
});

// authenticating with google
app.post('/login', passport.authenticate('google', {
  // user permissions
  scope: ['profile','https://www.googleapis.com/auth/calendar',
         'https://www.googleapis.com/auth/userinfo.email']
}));

app.listen(3000, () => {
  console.log(`Listening on ${port}`);
});
