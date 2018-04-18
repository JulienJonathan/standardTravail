//Import libraries
const express = require('express')


//Initialize variables
const router = express.Router()


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// define the home page route

router.get('/',(request,response,next)=>{
  response.send('Hello world')
})

module.exports = router
