const dotenv = require('dotenv')
dotenv.config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://leadriding:" + process.env.MONGOD_PASSWORD + "@cluster0.zr8oeac.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var dbo;
client.connect(err => {
    if (err) console.log(err)
    else console.log('database connected successfull')
    dbo = client.db("LeadRiding")
});

async function insertMany(coll, obj) {
    await dbo.collection(coll).insertMany(obj, (err, res) => {
        if (err) console.log(err)
    })
}


async function insert(coll, obj) {
    await dbo.collection(coll).insertOne(obj, (err, res) => {
        if (err) console.log(err)
    })
}

async function find(coll, filter) {
    return await new Promise((resolve, reject) => {
        dbo.collection(coll).find(filter).toArray((err, result) => {
            if (err) console.log(err)
            resolve(result)
        })
    })
}

async function dlt(coll, where) {
    await dbo.collection(coll).deleteOne(where, {}, (err, result) => {
        if (err) console.log(err)
        console.log(result)
    })
}

async function upd(coll, where, obj) {
    await dbo.collection(coll).updateMany(where, { $set: { ...obj } }, (err, res) => {
        if (err) console.log(err)
        console.log(res)
    })
}




module.exports = {
    insert,
    find,
    dlt,
    upd,
    insertMany
}