//Import env variables
const env = require('../env')

//Import libraries
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

//Routes

const routes = require('./routes/index');

//Initialize
const app = express();

//Settings

//Starting  parameters
//console.error('Starting app (build,version):',process.env.BUILD_VERSION,process.env.VERSION);
//console.error('Connecting to PostgreSQL using :',process.env.DATABASE_URL);

//Moteur de template
app.set('view engine','ejs');

//Middlewares
if(env.ENV === 'development'){
//  app.use(logger('dev'));
  console.log('Log as developper')
}
app.use('/assets',express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'azzz',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use('/',routes)

//catch 404 error
/*
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

*/
module.exports = app;
