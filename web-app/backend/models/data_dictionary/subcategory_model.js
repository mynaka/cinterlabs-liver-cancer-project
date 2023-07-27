const mongoose = require('mongoose')

const subcategorySchema = new mongoose.Schema({
    _category : {type: mongoose.Schema.Types.ObjectId, ref: 'Categories'},
    name : {type: String, required: true},
    description: {type:String}
    //properties: [{type}]

})

module.exports = mongoose.model("SubCategories", subcategorySchema)