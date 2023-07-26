const mongoose = require('mongoose')
const Category = require('../../models/data_dictionary/categories_model')

exports.getCateg = (req, res) => {
    Category.find()
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchOne = (req,res) =>{
    Category.findById(req.params.id)
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err))
}


exports.deleteCategory = (req, res) => {    
    Category.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Removed a Category'))
        .catch(err => res.status(400).json(err))
}

exports.addCategory = (req,res) =>{
    var title = req.body.title
    var subcategory = req.body.subcategory

    if(!title){return res.send({error: "Category has no title"})}

    const categ = new Category ({
        title :title, 
        subcategory : subcategory
    })

    console.log(categ)

    categ.save()
        .then(()=> res.json('Successfully added category!'))
        .catch(err => res.status(400).json(err))
}