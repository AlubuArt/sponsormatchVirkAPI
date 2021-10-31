const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

//setting up routes
const indexRouter = require('./src/routes/index');
const cvrnrRouter = require('./src/routes/cvrnr');
const companynameRouter = require('./src/routes/companyname');
const { dirname } = require('path');

const app = express();
//configure PORT 
const PORT = process.env.PORT || 9000;

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//setup app
app.set(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://sponsormatchbeta.firebaseapp.com ");
    //res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.use('/', indexRouter);
app.use('/cvrnr', cvrnrRouter);
app.use('/companyname', companynameRouter);

//404 forward to errorhandler
app.use(function(req, res, next) {
    next(createError(404));
});

//error handler
app.use(function(err, res, req, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500 );
    res,render('error');
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})

module.exports = app;