const express = require('express');
const Router = express.Router();
const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')
const mongodb = require('./mongodb')

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
    .post(fileUploading, (req, res) => {
        console.log(req.body)
        // console.log(req.files)

        res.send(JSON.stringify("ok"))
    })
    .put((req, res) => {
        res.send(JSON.stringify("ok"))
    })

Router.post('/categories', (req, res) => {
    res.send(JSON.stringify("ok"))
})

function fileUploading(req, res, next) {

    if (req.files === null) next();
    else {
        const profile = req.files.profilePhoto;
        if (profile !== undefined) {
            const srcs1 = req.body.name + "_" + getRandomInt() + "_" + profile.name;
            req.body.profileUrl = "http://localhost:8000/vendor/image/" + srcs1;
            profile.mv('uploads/' + srcs1, () => {
                console.log('file ' + srcs1 + ' has been uploaded successfully');
            })
        }

        const adhaar = req.files.adhaarPhoto;
        if (adhaar !== undefined) {
            const srcs2 = req.body.name + "_" + getRandomInt() + "_" + adhaar.name;
            req.body.adhaarUrl = "http://localhost:8000/vendor/image/" + srcs2;
            adhaar.mv('uploads/' + srcs2, () => {
                console.log('file ' + srcs2 + ' has been uploaded successfully');
            })
        }

        const pan = req.files.panPhoto;
        if (pan !== undefined) {
            const srcs3 = req.body.name + "_" + getRandomInt() + "_" + pan.name;
            req.body.panUrl = "http://localhost:8000/vendor/image/" + srcs3;
            pan.mv('uploads/' + srcs3, () => {
                console.log('file ' + srcs3 + ' has been uploaded successfully');
            })
        }
        next();
    }

}

function getRandomInt() {
    return Math.floor(100000 + Math.random() * 900000);
}

module.exports = Router;