const express = require('express');
const app = express();  //some use server as the variable
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
dbConnectionString = process.env.DB_STRING,
dbName = 'Recipes',
collection

MongoClient.connect( dbConnectionString )
.then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection = db.collection('recipes')
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', async( request, response ) => {
    try {
    response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
        }
    })
    
app.listen(process.env.PORT || PORT, ()=>{
    console.log( `Server is running on port = ${process.env.PORT }`)
})