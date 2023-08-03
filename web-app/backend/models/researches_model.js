const mongoose = require('mongoose')

const contributorsSchema = new mongoose.Schema({
    fname: {type: String, required : true},
    mname: {type: String, required: true},
    lname: {type: String, required: true},
    designation: {type: String, requied: true},
    contribution: [{type: researchSchema}]
})

const researchSchema = new mongoose.Schema({
    author: [{type: contributorsSchema}],
    title: {type: String, required: true},
    date_add:{type: String, required: true, default: Date.now},
    content: {type: String, required: true},
    tags: {type: Array, "default": [], required: true},
    photo: {type: String}
})

//check duplicates
contributorsSchema.statics.duplicateContributor = async function({fname: fname, lname: lname}){
    if(!fname || !lname) throw new Error ("Invalid name")

    try{
        const contributor = await this.findOne({fname:fname, lname: lname})
        if (contributor) return true
    }catch(err){
        console.log("Error in duplicateContributor", err.message)
        return
    }
}


researchSchema.statics.duplcateResearch = async function({author: author, title: title}){
    if(!title) throw new Error ("Invalid title")

    try{
        const research = await this.findOne({author: author, title:title})
        if(research) return true
    }catch(err){
        console.log("Error in duplcateResearch", err.message)
        return
    }
}

const Contributors = mongoose.model("Contributors", contributorsSchema)
const Research = mongoose.model("Research", researchSchema)


module.exports = {Contributors, Research}