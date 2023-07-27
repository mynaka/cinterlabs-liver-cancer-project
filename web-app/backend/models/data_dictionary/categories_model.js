const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    title: {type: String, required:true},
    subcategory : [{type: mongoose.Schema.Types.ObjectId, ref: 'SubCategories'}]
})


//check duplicates
categorySchema.statics.duplicateCateg = async function({title:title}){
    if (!title) throw new Error ("Invalid value for title")

    try{
        const categ = await this.findOne({title:title})
        if (categ) return true
    } catch(err){
        console.log("Error in duplicateCateg", err.message) 
        return
    }
}


module.exports = mongoose.model("Categories", categorySchema)