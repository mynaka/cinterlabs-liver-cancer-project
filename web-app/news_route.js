const router = require('express').Router()
let News = require('../models/news_model')


//news page methods and routes
router.route('/').get((req,res) =>{
    News.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json(err))
})

router.route('/add').post((req, res) => {
    var author = req.body.author
    var title = req.body.title
    var date_add = Date.parse(req.body.date_add)
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
        news.save((err)=>{
            if(!err){
                console.log("Saved news article");
                return res.send({success:true})
            }else return res.status(400).json(err)
        })
    }

})

module.exports = router