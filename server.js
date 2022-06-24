const express = require('express');
const app = express();  //some use server as the variable
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()