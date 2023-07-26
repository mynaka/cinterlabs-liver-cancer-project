const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    author: {type : Array, "default" : [],  required: true},
    title: {type: String, required: true},
    date_add:{type: String, required: true},
    content: {type: String, required: true},
    tags: {type: Array, "default": [], required: true},
    photo: {type: String}

},{timestamps: true})


//check for duplicates
newsSchema.statics.duplicateTitle = async function(title){
    if(!title) throw new Error ("Invalid value for title")
    try{
        const news = await this.findOne({title})
        if (news) return true
    }catch(err){
        console.log("Error in duplicateTitle", err.messsage)
        return
    }
}

module.exports = mongoose.model("News", newsSchema)