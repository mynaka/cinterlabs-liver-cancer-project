const mongoose = require('mongoose')


const subcategorySchema = new mongoose.Schema({
    title : {type: String, required: true},
    description: {type:String}
    //properties: [{type}]

})


const categorySchema = new mongoose.Schema({
    title: {type: String, required:true},
    subcategory : [{type: subcategorySchema}]
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


const Categories = mongoose.model("Categories", categorySchema)
const SubCategories = mongoose.model("SubCategories", subcategorySchema)

module.exports = {Categories, SubCategories}

