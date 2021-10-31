const express = require('express');
const router = express.Router();

//Home page
router.get('/', function(req, res) {
    console.log('Home route');
    res.render('index', {message: 'Hallo Homepage'});
})

module.exports = router;