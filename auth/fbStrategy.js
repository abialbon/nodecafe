const passport      = require('passport'),
      fbStrategy    = require('passport-facebook').Strategy,
      User          = require('../models/user'),
      FB_APP_ID     = process.env.FB_APP_ID,
      FB_APP_SECRET = process.env.FB_APP_SECRET;

// facebookStrategy({ authinfo }, callback(accessToken, refreshToken, profile, done))
module.exports = new fbStrategy({
    clientID: FB_APP_ID,
    clientSecret: FB_APP_SECRET,
    callbackURL: "https://pauls-playground-abialbonpaul.c9users.io/auth/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
    // Find if the user is in the database
    User.findOne({ profileID: profile.id }, (err, user) => {
        if (!user) {
           let newuser = new User({
               profileID: profile.id,
               name: profile.displayName,
               profilePic: `https://graph.facebook.com/${profile.id}/picture?type=small`
           });
           newuser.save((err, user) => {
               done(null, user);
           });
        } else {
           done(null, user);
        }
    });
});