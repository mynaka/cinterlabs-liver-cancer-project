const mongoose = require('mongoose')
const {Contributors, Research} = require('../../models/researches_model')

exports.getResearches = (req, res) => {
    Research.find()
        .then(research => res.json(research))
        .catch(err => res.status(400).json(err))
}

// exports.fetchOne = (req,res) =>{
//     Research.findOne({title: req.params.title})
// }