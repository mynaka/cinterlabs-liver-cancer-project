const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require ('dotenv').config()
const app = express()

const port = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

//connect to db
const uri = process.env.ATLAST_URI
mongoose.connect(uri, { useNewUrlParser:true})

const conn = mongoose.connection
conn.once('open', ()=>{
    console.log("Successfully connected to database")
})

//landing page
app.get("/", (req,res)=>{
    res.send("Welcome to the web app")
})

//models and router
require("./models/news_model")
require("./routes/router") (app)


app.listen(port, (err) =>{
    if (err){console.log(err)}
    else console.log('Server running on port',port) 
})