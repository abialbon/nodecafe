const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
   res.render('index', { appName: req.app.locals.title });
});

module.exports = router;