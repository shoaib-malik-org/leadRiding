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

const user = {
    lan: '28.5471',
    lon: '77.3052'
}


Router.get('/', async (req, res) => {
    var arr = []
    const data = await mongodb.find('vendor', { 'category.subcategories.id': { $eq: 'CS1' } })
    data.forEach((element, index) => {
        arr.push(getDistanceFromLatLonInKm(element.latitude, element.longitude, user.lan, user.lon))
        data[index].distance = getDistanceFromLatLonInKm(element.latitude, element.longitude, user.lan, user.lon)
        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1);  // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
            return d;
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180)
        }
    });
    res.send(len(arr, data))
    // res.send(data)
    // res.send(arr.sort(function (a, b) { return a - b }))
})

module.exports = Router;


const finder = (num, data) => data.find(data => data.distance === num)
const len = (arr, data) => {
    arr.sort(function (a, b) { return a - b })
    const sorted = arr.map(num => finder(num, data))
    return sorted;
}