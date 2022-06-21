const express = require('express');
const Router = express.Router();
const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')
const mongodb = require('./mongodb')
const passport = require('passport');
const ObjectID = require('mongodb').ObjectId;
const session = require('express-session');
const MongoStore = require('connect-mongo');



// for add the passport functions in my request
Router.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://leadriding:Royal12@cluster0.zr8oeac.mongodb.net/Login_Blog_Session?retryWrites=true&w=majority',
        collection: 'session'
    }),
    // cookie: { maxAge: date }
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
    dbo.collection('vendors_login').findOne({ '_id': userId }, (err, result) => {
        if (err) throw err;
        if (result) {
            done(null, result);
        } else {
            done(null, false);
        }
    })
})


const fileUpload = require("express-fileupload");
Router.use(fileUpload({
    createParentPath: true
}));

const cors = require('cors');
Router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

Router.use(express.urlencoded({ extended: true }));

Router.route('/')
    .get((req, res) => {
        res.send(JSON.stringify("ok"))
    })
    .post(fileUploading, async (req, res) => {
        req.body.id = req.headers.id;
        const [data] = await mongodb.find('vendors', { id: req.headers.id })
        if (data) {
            const p = await mongodb.upd('vendors', { id: req.headers.id }, req.body)
            console.log(p)
            res.send(JSON.stringify("data updated successful"))
        } else {
            res.send(JSON.stringify('you dont have key please contact developers'))
        }

    })
    .put((req, res) => {
        res.send(JSON.stringify("ok"))
    })

Router.post('/categories', (req, res) => {
    req.on('data', async (body) => {
        body = JSON.parse(body);
        const [data] = await mongodb.find('vendors', { id: req.headers.id })
        if (data) {
            const p = await mongodb.upd('vendors', { id: req.headers.id }, { category: body })
            console.log(p)
            res.send(JSON.stringify("data updated successful"))
        } else {
            res.send(JSON.stringify('you dont have key please contact developers'))
        }
    })
})

Router.get('/single', async (req, res) => {
    if (req.isAuthenticated()) {
        const [data] = await mongodb.find('vendors', { id: req.user.id })
        res.send(JSON.stringify(data))
    } else {
        res.send(JSON.stringify('ok'))
    }
})

function fileUploading(req, res, next) {

    if (req.files === null) next();
    else {
        const profile = req.files.profilePhoto;
        if (profile !== undefined) {
            const srcs1 = req.body.name + "_" + profile.name;
            req.body.profileUrl = "http://localhost:8000/vendor/image/" + srcs1;
            profile.mv('uploads/' + srcs1, () => {
                console.log('file ' + srcs1 + ' has been uploaded successfully');
            })
        }

        const adhaar = req.files.adhaarPhoto;
        if (adhaar !== undefined) {
            const srcs2 = req.body.name + "_" + adhaar.name;
            req.body.adhaarUrl = "http://localhost:8000/vendor/image/" + srcs2;
            adhaar.mv('uploads/' + srcs2, () => {
                console.log('file ' + srcs2 + ' has been uploaded successfully');
            })
        }

        const pan = req.files.panPhoto;
        if (pan !== undefined) {
            const srcs3 = req.body.name + "_" + pan.name;
            req.body.panUrl = "http://localhost:8000/vendor/image/" + srcs3;
            pan.mv('uploads/' + srcs3, () => {
                console.log('file ' + srcs3 + ' has been uploaded successfully');
            })
        }
        next();
    }

}

module.exports = Router;