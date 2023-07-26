const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    _id : {type: mongoose.Schema.Types.ObjectId},
    category: {type: String, required:true},
    subcategory : [{type: Schema.Types.ObjectId, ref: 'SubCategories'}]
})


module.exports = mongoose.model("Categories", categorySchema)