const mongoose = require('mongoose')

const News =  require('../models/news_model')

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
    var author = req.body.author
    var id = req.body.id
    var title = req.body.title

    News.deleteOne({id: id, author: author, title: title})
        .then(()=> res.json('Deleted a news article'))
        .catch(err => res.status(400).json(err))
}