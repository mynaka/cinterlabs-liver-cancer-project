const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile,cb ){
    User.findOrCreate({googleID: profile.id}, fuction(err,user) {
        return (err,user)
    })
}

))