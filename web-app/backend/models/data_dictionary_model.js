const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    category: {type: String},
    subcategory: {type:String},
    property: {type: String},
    type: {type: String},
    required: {type: Boolean},
    description: {type: String},
    json :{type:Buffer},
    tsv :{type:Buffer},
})


const subcategorySchema = new mongoose.Schema({
    category: {type: String},
    title : {type: String, required: true},
    description: {type:String},
    properties: [{type: propertySchema}]

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


subcategorySchema.statics.duplicateSubCateg = async function({title:title, category:category}){
    if (!title) throw new Error ("Invalid value for title")
    if(!category) throw new Error("Invalid value for category")

    try{
        const subcateg = await this.findOne({title:title, category:category})
        if (subcateg) return true
    } catch(err){
        console.log("Error in duplicateSubCateg", err.message) 
        return
    }
}


propertySchema.statics.duplicateProperty = async function({category: category, subcategory: subcategory, property : property }){
    if (!property) throw new Error ("Invalid value for Property name")
    if(!category) throw new Error("Invalid value for category")
    if(!subcategory) throw new Error("Invalid value for subcategory")

    try{
        const prop = await this.findOne({category: category, subcategory: subcategory, property : property})
        if(prop) return true
    }catch(err){
        console.log("Error in duplicateProperty", err.message)
        return
    }
}


const Categories = mongoose.model("Categories", categorySchema)
const SubCategories = mongoose.model("SubCategories", subcategorySchema)
const Properties = mongoose.model("Properties", propertySchema)

module.exports = {Categories, SubCategories, Properties}

