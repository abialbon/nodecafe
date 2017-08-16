const express   = require('express'),
      app       = express(),
      path      = require('path'),
      PORT      = process.env.PORT,
      IP        = process.env.IP;
      
// App variables
app.locals.title = 'NodeCafe'

// View settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
     
app.get('/', (req, res) => {
   res.render('index', { appName: req.app.locals.title });
});

app.listen(PORT, IP, () => {
   console.log('Your app is running!'); 
});