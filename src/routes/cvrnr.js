const express = require('express');
const router = express.Router();

//GET cvrnr
router.get('/', function(req, res) {
    console.log('CVRnr route');
    res.render('index', {message: 'Hallo Cvrnr route'})
})

module.exports = router;