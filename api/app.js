const express = require('express')
const app = express();


// my modules
const auth = require('./my_modules/auth')
const vendorsInfo = require('./my_modules/vendorInfo')
const listing = require('./my_modules/listing')


app.listen(8000,(err)=>{
    console.log('Server has been started')
})


app.use('/auth',auth)
app.use("/vendorInfo",vendorsInfo)
app.use('/listing',listing)