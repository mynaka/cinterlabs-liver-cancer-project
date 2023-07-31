const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (app) =>{
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      if(profile._json.hd === "up.edu.ph"){
        //TODO: allow finding or creating user in database
        userProfile=profile;
        return done(null, userProfile);
      }else{
        // fail        
        done(new Error("Invalid host domain"));
      }
    }
  ));
  
  app.get('/auth/google', 
    passport.authenticate('google', { scope : ['profile', 'email'] }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/error' }),
    function(req, res) {
      // Successful authentication, redirect success.
      res.redirect('/success');
  })
}