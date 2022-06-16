const express = require('express')
const app = express();
const auth = require('./my_modules/auth')
const cors = require('cors');

app.listen(8000, (err) => {
    console.log('Server has been started')
})

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use('/auth',auth)