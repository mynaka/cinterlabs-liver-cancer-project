const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSession = require('cookie-session')

require ('dotenv').config()
const app = express()

const port = process.env.PORT || 3001

//middleware
app.use(cors({
    origin: "http://localhost:5173",                //change later to client sever
    methods:"GET, POST,PUT,DELETE",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieSession(
    {name:"session",
    keys:["temp"]}
))
app.use(passport.initialize())
app.use(passport.session())

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
require("./models/user_model")
require("./routes/router") (app)
require("./passport")
require("./routes/auth")

app.listen(port, (err) =>{
    if (err){console.log(err)}
    else console.log('Server running on port',port) 
})