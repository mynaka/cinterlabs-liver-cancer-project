const mongoose = require('mongoose')
const Category = require('../../models/data_dictionary/categories_model')

exports.getCateg = (req, res) => {
    Category.find()
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchOne = (req,res) =>{
    Category.findOne({title: req.params.title})
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err))
}


exports.deleteCategory = (req, res) => {    
    Category.findOneAndDelete({title: req.params.title})
        .then(()=> res.json('Removed a Category'))
        .catch(err => res.status(400).json(err))
}

exports.addCategory = async (req,res) =>{
    var title = req.body.title
    var subcategory = req.body.subcategory

    if(!title){return res.send({error: "Category has no title"})}

    const duplicateTitle = await Category.duplicateCateg(title)
    if(duplicateTitle) return res.json({success: false, message: "Category already exists"})
   
    const categ = new Category ({
        title :title, 
        subcategory : subcategory
    })

    categ.save()
        .then(()=> res.json('Successfully added category!'))
        .catch(err => res.status(400).json(err))
}

exports.updateCateg = async (req,res) => {

    const duplcicateCateg = await Category.duplicateCateg({title:req.body.title})
    if(duplcicateCateg) return res.json({success: false, message: "Category already exists"})


    Category.findOne({title: req.params.title})
        .then(categ => {
            categ.title = req.body.title

            categ.save()
                .then(()=> res.json('Category Title updated'))
                .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))
}