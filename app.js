const express   = require('express'),
      app       = express(),
      path      = require('path'),
      routes    = require('./routes/index'),
      session   = require('express-session'),
      PORT      = process.env.PORT,
      IP        = process.env.IP;
      
// App variables
app.locals.title = 'NodeCafe'

// Session
app.use(session({
   secret: process.env.session_SECRET,
   resave: false,
   saveUninitialized: true
}));

// View settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
     
// Use routes
app.use(routes);

app.listen(PORT, IP, () => {
   console.log('Your app is running!'); 
});