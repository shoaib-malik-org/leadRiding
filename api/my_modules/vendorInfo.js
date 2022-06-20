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
.get((req,res)=>{
    res.send(JSON.stringify("ok"))
})
.post((req,res)=>{
    req.on("body",(body)=>{
        body = JSON.parse(body);
        console.log(body)
    })
    res.send(JSON.stringify("ok"))
})
.put((req,res)=>{
    res.send(JSON.stringify("ok"))
})


module.exports = Router;