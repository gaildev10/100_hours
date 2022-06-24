const express = require('express');
const app = express();  //some use server as the variable
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db
dbConnectionString = process.env.DB_STRING,
dbName = 'Recipes',
collection

MongoClient.connect( dbConnectionString )
.then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection = db.collection('recipes')
})