const mongoose = require('mongoose')

const subcategorySchema = new mongoose.Schema({
    _category : {type: mongoose.Schema.Types.ObjectId, ref: 'Categories'},
    title : {type: String, required: true},
    description: {type:String}
    //properties: [{type}]

})



//check duplicates
subcategorySchema.statics.duplicateSubCateg = async function({title:title}){
    if (!title) throw new Error ("Invalid value for title")

    try{
        const subcateg = await this.findOne({title:title})
        if (subcateg) return true
    } catch(err){
        console.log("Error in duplicateSubCateg", err.message) 
        return
    }
}

module.exports = mongoose.model("SubCategories", subcategorySchema)