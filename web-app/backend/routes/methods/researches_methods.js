const mongoose = require('mongoose')
const {Contributors, Research} = require('../../models/researches_model')

//researches has to be verified first before displaying
exports.getResearches = (req, res) => {
    Research.find({verified: true})
        .then(research => res.json(research))
        .catch(err => res.status(400).json(err))
}


exports.pendingResearches = (req,res) => {
    Research.find({verified : {$ne: true}})
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

    const duplicateResearch = await Research.duplicateResearch({title:title})
    if (duplicateResearch) return res.json({success:false,message: "Duplicate Research title found"})

    const research = new Research ({
        author: author,
        title: title,
        content : content,
        tags: tags
    })

    //check if contributor exists
    Contributors.findOneAndUpdate({author: {fname: author.fname, lname: author.lname}})
        .then(contrib => {
            if (!contrib){       //contributor does not exist
                const contributor = new Contributors({
                   fname : author.fname,
                   mname : author.mname,
                   lname : author.lname  
                })

                contributor.save()
                .then(()=> res.json('Added a Contributor'))
                .catch(err => res.status(400).json(err))

                contributor.contribution.push(research)

            }else{
                contrib.contribution.push(research)

                contrib.save()
                    .then(()=> res.json('Added Research'))
                    .catch(err => res.status(400).json(err))
            }

            research.save()
            .then()
            .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))

    
}


exports.updateResearch = async(req,res) =>{
    var newTitle = req.body.newTitle
    var title = req.params.title
    var tags = req.body.tags
    var content = req.body.content

    if(!title) {return res.send({error: "Invalid title"})}

    const duplicateResearch = await Research.duplicateResearch({title:title})
    if (duplicateResearch) return res.json({success:false,message: "Duplicate Research title found"})

    Research.findOne({title: title})
        .then(research => {
            research.title = newTitle,
            research.tags = tags,           //should be able to push/pull from array
            research.content = content

            research.save()
                    .then(() => res.json('Research updated'))
                    .catch(err=>res.status(400).json (err))
        })

        .catch(err=>res.status(400).json (err))

}

// exports.editAuthors = async (req,res) => {
//     var title = req.params.title
//     var author = req.body.author

// }

//bug fix: remove from array of contributions
exports.deleteResearch = (req,res) =>{
    
    var author = req.body.author
    console.log(author.fname,author.lname,author.mname)
    Research.findOne({ title: req.params.title})
    .then((research)=> {
        Contributors.findOneAndUpdate({fname: author.fname, lname: author.lname, mname: author.mname})
        //Research.findOneAndDelete({ title: req.params.title })
        res.json('Research Deleted')
    })
    .catch(err => res.status(400).json(err))
}

exports.verifyResearch = (req,res) =>{
    Research.findOne({title:req.params.title, verified: false})
        .then(research =>{
            research.verified = true

            research.save()
                .then(() => res.json('Research verified'))
                .catch(err => res.status(400).json(err))

        })

        .catch(err => res.status(400).json(err))
}