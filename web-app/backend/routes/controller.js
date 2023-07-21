const mongoose = require('mongoose')

const News =  require('../models/news_model')
const User = require('../models/users_model')

exports.getNews = (req, res) => {
    News.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err)) 
}

exports.addNews = (req,res) =>{
    var author = req.body.author
    var title = req.body.title
    var date_add = req.body.date_add
    var content = req.body.content
    var tags = req.body.tags
    
    if(!author || !title){
        console.log(author , title)
        console.log(req.body)
        return res.send({success: false})
    }else{
        const news = new News({
            author: author,
            title: title,
            date_add: date_add,
            content: content,
            tags: tags
        })

        console.log(news)

        //save object to database
        news.save()
            .then(() => res.json('Submitted a news article'))
            .catch(err => res.status(400).json(err))
    }

}

exports.fetchOne = (req,res) =>{
    News.findById(req.params.id)
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err))
}

exports.deleteNews = (req, res) => {    
    News.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Deleted a news article'))
        .catch(err => res.status(400).json(err))
}

exports.updateNews = (req,res) => {
    News.findById(req.params.id)
        .then(news => {
            news.author = req.body.author
            news.title = req.body.title
            news.content = req.body.content
            news.tags = req.body.tags

            news.save()
                .then(()=> res.json('News Article updated'))
                .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))
}



//users functions

exports.login = (req,res) => {

}


exports.signup = (req,res) => {

    var fname = req.body.fname      
    var lname = req.body.lname
    var mname = req.body.mname
    var bday = req.body.bday
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    //required fields
    //note: password validation is done in react
    if(!fname || !lname || !email || !username || !password){
        return res.send({error: "Missing required fields"})
    }

    const user = new User({
        fname : fname  ,    
        lname : lname,
        mname : mname,
        bday : bday,
        username :username,
        email : email,
        password : password
    })

    console.log(user)

    user.save()
        .then(()=> res.json('Successfully added user!'))
        .catch(err => res.status(400).json(err))

}

