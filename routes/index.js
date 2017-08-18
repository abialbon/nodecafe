const express = require('express');
const router  = express.Router();
const passport= require('passport');

router.get('/', (req, res) => {
   res.render('index', { appName: req.app.locals.title });
});

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/chatroom',
    failureRedirect: '/failed'
}));

router.get('/chatroom', secured, (req, res) => {
    res.render('chatroom', { user: req.user });
});

router.get('/logout', (req, res) => {
   req.logout();
   res.redirect('/');
});

function secured(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = router;