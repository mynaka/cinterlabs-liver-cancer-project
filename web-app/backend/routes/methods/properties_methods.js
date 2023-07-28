const mongoose = require('mongoose')
const {Categories, SubCategories, Properties} = require('../../models/data_dictionary_model')



exports.getProperty = (req,res) => {
    Properties.find({category: req.params.categ, subcategory: req.params.subcateg})
                .then(prop => res.json(prop))
                .catch(err => res.status(400).json(err))
}

//bug: delete from parent array as well
exports.deleteProperty = (req,res) => {
    Properties.findOneAndDelete({category: req.params.categ, subcategory: req.params.subcateg, property: req.params.prop })
            .then(prop => res.json(prop))
            .catch(err => res.status(400).json(err))
}

//feat: create method here for inserting many



exports.addProperty = async (req,res) =>{
    var categ = req.params.categ
    var subcateg = req.params.subcateg
    var prop = req.body.property

    if(!categ || !subcateg) {return res.send({error: "Invalid input"})}

    const duplicateProp = await Properties.duplicateProperty({category: categ, subcategory: subcateg, property : prop })
    if(duplicateProp) return res.json({success: false, message: "Property already exists"})

    const property = new Properties ({
        category : categ,
        subcategory : subcateg,
        property: prop,
        type: req.body.type,
        required: req.body.required,
        description: req.body.description,
        json: req.body.json,
        tsv : req.body.tsv
    })

    SubCategories.findOne({category: categ, title: subcateg})
            .then(subcateg => {
                subcateg.properties.push(property)

                subcateg.save()
                    .then(()=> res.json('Added Property'))
                    .catch(err => res.status(400).json(err))

                property.save()
                .then()
                .catch(err => res.status(400).json(err))
            })

            .catch(err => res.status(400).json(err))


}

exports.updateProperty = async (req,res) => {
    const duplicateProp = await Properties.duplicateProperty({category: categ, subcategory: subcateg, property : prop })
    if(duplicateProp) return res.json({success: false, message: "Property already exists"})
}