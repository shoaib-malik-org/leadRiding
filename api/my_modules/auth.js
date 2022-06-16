const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const ObjectID = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
const MongoStore = require('connect-mongo');
const fetch = require('node-fetch')
var cookieParser = require('cookie-parser')
const Router = express.Router();
const cors = require('cors');
Router.use(cookieParser())

Router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


Router.use(express.urlencoded({ extended: true }));

const LocalStrategy = require('passport-local').Strategy;
const hour = 63070000000
const date = new Date(Date.now() + hour)
//passport
Router.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://leadriding:Royal12@cluster0.zr8oeac.mongodb.net/?retryWrites=true&w=majority',
        collection: 'session'
    }),
    // cookie: { maxAge: date }
}))
var dbo;
const dbName = 'Login_Blog'
const url = 'mongodb+srv://leadriding:Royal12@cluster0.zr8oeac.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(url, function (err, db) {
    dbo = db.db(dbName);
})
async function validPassword(password, passwordHash) {
    return await new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, function (err, result) {
            if (err) {
                console.log(err)
            }
            resolve(result);
        })
    })

}

passport.use(new LocalStrategy((username, password, callback) => {
    console.log(username, password)
    dbo.collection('vendors').findOne({ username: username }, async (err, result) => {
        if (err) { throw err };
        if (result) {
            const isvalid = validPassword(password, result.hash);
            var chk = await isvalid.then((get) => {
                return get;
            })
            if (chk) {
                callback(null, result)
            } else {
                callback(null, false)
            }
        } else {
            return callback(null, false);
        }
    })
}))



Router.use(passport.initialize());
Router.use(passport.session());
Router.use((req, res, next) => {
    next();
})

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((userId, done) => {
    userId = new ObjectID(userId._id);
    dbo.collection('users').findOne({ '_id': userId }, (err, result) => {
        if (err) throw err;
        if (result) {
            done(null, result);
        } else {
            done(null, false);
        }
    })
})



Router.get("/login", (req, res) => {
    res.redirect('http://localhost:3000/')
})



Router.post('/login', passport.authenticate("local", { failureRedirect: '/login', successRedirect: '/Auth' }));

Router.post('/auth/local', (req, res) => {
    req.on('data', (body) => {
        body = JSON.parse(body)
        bcrypt.hash(body.password, 10, async (err, hash) => {
            const user = {
                username: body.username,
                hash
            }
            dbo.collection('users').insertOne(user, async (err, result) => {
                if (err) res.send(JSON.stringify('register unsuccessful'))
                else res.send(JSON.stringify('register successful'))
            })
        })
    })
})



Router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000')
})

Router.get('/Auth', (req, res) => {
    res.redirect('http://localhost:3000/Auth')
})

Router.get('/check',  (req, res) => {
    console.log(req)

    res.send(JSON.stringify(req.isAuthenticated()));
})

function getCookie(req,res,next){
    req.on('date',(body))
}

Router.get('/', (req, res) => {
    res.send('i have nothing in root but there will be')
})



module.exports = Router