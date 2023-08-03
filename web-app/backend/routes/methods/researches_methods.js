const mongoose = require('mongoose')
const {Contributors, Research} = require('../../models/researches_model')

//researches has to be verified first before displaying
exports.getResearches = (req, res) => {
    Research.find({verified: true})
        .then(research => res.json(research))
        .catch(err => res.status(400).json(err))
}


exports.pendingResearches = (req,res) => {
    Research.find({verified: false})
    .then(research => res.json(research))
    .catch(err => res.status(400).json(err))
}

//can only get verified researches
exports.fetchOne = (req,res) =>{
    Research.findOne({title: req.params.title, verified: true})
            .then(research => res.json(research))
            .catch(err=> res.status(400).json(err))
}

exports.addReserach = async (req,res) =>{
    var author = req.body.author
    var title = req.body.title
    var content = req.body.content
    var tags = req.body.tags
    

    if(!title || !content){return res.send({error: "Invalid entry"})}

    const duplicateResearch = await Research.duplicateResearch({author: author,title:title})
    if (duplicateResearch) return res.json({success:false,message: "Duplicate Research found"})

    const research = new Research ({
        author: author,
        title: title,
        content : content,
        tags: tags
    })

    //check if contributor exists
    Contributors.findOne({})
    
}

exports.updateResearch = async(req,res) =>{

}

exports.deleteResearch = (req,res) =>{

}