const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: String,
    agencies:{
        funding:[String],
        implementing:[String],
        coimplementing:[String],
        collab:[String],
    },
    leader:{
        project:String,
        study:String,
    },
    staff:[String],
    status:String
})

module.exports = mongoose.model("Projects", projectSchema)