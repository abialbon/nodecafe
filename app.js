const express   = require('express'),
      app       = express(),
      path      = require('path'),
      routes    = require('./routes/index'),
      session   = require('express-session'),
      mongoose  = require('mongoose'),
      MongoStore= require('connect-mongo')(session),
      // Environment variables
      ENV       = process.env.NODE_env || 'development',
      SECRET    = process.env.SESSION_secret,
      DB_URL    = process.env.DB_url,
      PORT      = process.env.PORT,
      IP        = process.env.IP;
      
// Database connection
mongoose.connect(DB_URL);

// App variables
app.locals.title = 'NodeCafe'

// Session
// Switching stores based on environment
if (ENV == 'development') 
{
   app.use(session({
      secret: SECRET,
      resave: false,
      saveUninitialized: true
   }));
} 
else if (ENV == 'production') 
{
   app.use(session({
      secret: SECRET,
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({
         mongooseConnection: mongoose.connection
      })
   }));
}

// View settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
     
// Use routes
app.use(routes);

app.listen(PORT, IP, () => {
   console.log('Your app is running!'); 
});