//Import env variables
require('dotenv').config()

//Import libraries
let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')

//Initialize
let app = express()

//Settings


//Starting  parameters
console.error('Starting app (build,version):',process.env.BUILD_VERSION,process.env.VERSION)
console.error('Connecting to PostgreSQL using :',process.env.DATABASE_URL)

//Moteur de template
app.set('view engine','ejs');


//Middlewares
app.use('/assets',express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


//Routes
app.get('/',(request,response)=>{
      response.send('Hello World!')
   });

//Listen

app.listen(8080);
