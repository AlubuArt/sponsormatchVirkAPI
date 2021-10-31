const express = require('express');
const router = express.Router();

//GET companyname
router.get('/', function(req, res) {
    console.log('Companyname route');
    res.render('index', {message: 'Hallo Companyname route'})
});

module.exports = router;