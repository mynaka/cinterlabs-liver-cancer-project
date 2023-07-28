const mongoose = require('mongoose')
const {Categories, SubCategories, Properties} = require('../../models/data_dictionary_model')



exports.getSubCateg = (req, res) => {
    SubCategories.find({category: req.params.categ})
        .then(subcateg => res.json(subcateg))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchOne = (req,res) =>{
    SubCategories.findOne({title: req.params.subcateg, category: req.params.categ})
        .then(categ => res.json(categ))
        .catch(err => res.status(400).json(err))
}

//bug: delete from parent array as well
exports.deleteSubCategory = (req, res) => {    
    SubCategories.findOneAndDelete({title: req.params.subcateg, category: req.params.categ})
        .then(()=> res.json('Removed a Subcategory'))
        .catch(err => res.status(400).json(err))
}

exports.addSubCategory = async (req,res) =>{
    var categ = req.params.categ
    var title = req.body.title
    var desc = req.body.desc

    if(!title || !categ){return res.send({error: "Invalid input"})}

    const duplicateTitle = await SubCategories.duplicateSubCateg({title:title, category: categ})
    if(duplicateTitle) return res.json({success: false, message: "Subcategory already exists"})
   
    const subcateg = new SubCategories ({
        category: categ,
        title: title,
        description: desc
    })

    Categories.findOne({title:categ})
            .then(category => {
                category.subcategory.push(subcateg)

                category.save()
                    .then(()=> res.json('Added Subcategory'))
                    .catch(err => res.status(400).json(err))

                subcateg.save()
                .then()
                .catch(err => res.status(400).json(err))
            })

            .catch(err => res.status(400).json(err))



   
}

exports.updateSubCateg = async (req,res) => {

    const duplcicateCateg = await SubCategories.duplicateSubCateg({title:req.body.title, category: req.params.categ})
    if(duplcicateCateg) return res.json({success: false, message: "Subcategory already exists"})


    SubCategories.findOne({title: req.params.subcateg, category: req.params.categ})
        .then(subcateg => {
            subcateg.title = req.body.title

            subcateg.save()
                .then(()=> res.json('Subcategory Title updated'))
                .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))
}