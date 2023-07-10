const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    author: {type : Array, "default" : [],  required: true},
    title: {type: String, required: true},
    date_add:{type: String, required: true},
    content: {type: String, required: true},
    tags: {type: Array, "default": [], required: true},

},{timestamps: true})

module.exports = mongoose.model("News", newsSchema)