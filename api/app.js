const express = require('express')
const app = express();


// my modules
const auth = require('./my_modules/auth')


app.listen(8000,(err)=>{
    console.log('Server has been started')
})


app.use('/auth',auth)