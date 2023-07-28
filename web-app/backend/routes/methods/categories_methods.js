const mongoose = require('mongoose')
var { Categories, SubCategories, Properties } = require("../../models/data_dictionary_model")

exports.getCateg = (req, res) => {
    Categories.find()
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchOne = (req,res) =>{
    Categories.findOne({title: req.params.title})
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err))
}

exports.getSubCateg = async (req,res) => {
    let foundCateg = await Categories.find({title: req.params.title}).populate("subcategory")
    res.json(foundCateg)
}

exports.deleteCategory = (req, res) => {    
    Categories.findOneAndDelete({title: req.params.title})
        .then(()=> res.json('Removed a Category'))
        .catch(err => res.status(400).json(err))
}

exports.addCategory = async (req,res) =>{
    var title = req.body.title
    var subcategory = req.body.subcategory

    if(!title){return res.send({error: "Category has no title"})}

    const duplicateTitle = await Categories.duplicateCateg({title:title})
    if(duplicateTitle) return res.json({success: false, message: "Category already exists"})
   
    const categ = new Categories ({
        title :title, 
        subcategory : subcategory
    })

    categ.save()
        .then(()=> res.json('Successfully added category!'))
        .catch(err => res.status(400).json(err))
}

exports.updateCateg = async (req,res) => {

    const duplcicateCateg = await Categories.duplicateCateg({title:req.body.title})
    if(duplcicateCateg) return res.json({success: false, message: "Category already exists"})


    Categories.findOne({title: req.params.title})
        .then(categ => {
            categ.title = req.body.title

            categ.save()
                .then(()=> res.json('Category Title updated'))
                .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))
}