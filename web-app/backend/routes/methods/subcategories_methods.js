const mongoose = require('mongoose')
const {Category, Subcategory} = require('../../models/data_dictionary_model')
//const Category = require('../../models/data_dictionary/categories_model')


exports.getSubCateg = (req, res) => {
    Subcategory.find()
        .then(subcateg => res.json(subcateg))
        .catch(err => res.status(400).json(err)) 
}

// exports.fetchOne = (req,res) =>{
//     Subcategory.findOne({title: req.params.title})
//         .then(categ => res.json(categ))
//         .catch(err => res.status(400).json(err))
// }


// exports.deleteCategory = (req, res) => {    
//     Category.findOneAndDelete({title: req.params.title})
//         .then(()=> res.json('Removed a Category'))
//         .catch(err => res.status(400).json(err))
// }

exports.addSubCategory = async (req,res) =>{
    var categ = req.body.categ
    var title = req.body.title
    var desc = req.body.desc

    if(!title){return res.send({error: "Subcategory has no title"})}

    const duplicateTitle = await Subcategory.duplicateSubCateg({title:title})
    if(duplicateTitle) return res.json({success: false, message: "Category already exists"})
   
    const subcateg = new Subcategory ({
        _category: categ,
        title: title,
        description: desc
    })

    Category.findOne({_id:categ})
            .then(categ => {
                categ.subcategory = subcateg

                categ.save()
                    .then(()=> res.json('Added Subcategory'))
                    .catch(err => res.status(400).json(err))

                subcateg.save()
                .then()
                .catch(err => res.status(400).json(err))
            })

            .catch(err => res.status(400).json(err))



   
}

// exports.updateCateg = async (req,res) => {

//     const duplcicateCateg = await Category.duplicateCateg({title:req.body.title})
//     if(duplcicateCateg) return res.json({success: false, message: "Category already exists"})


//     Category.findOne({title: req.params.title})
//         .then(categ => {
//             categ.title = req.body.title

//             categ.save()
//                 .then(()=> res.json('Category Title updated'))
//                 .catch(err => res.status(400).json(err))
//         })

//         .catch(err => res.status(400).json(err))
// }