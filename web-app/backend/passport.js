var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)

    //edit code to add it to database if signup
  }
));


passport.serializeUser((user,done) => done(null,user))

passport.deserializeUser((user,done) => done(null,user))