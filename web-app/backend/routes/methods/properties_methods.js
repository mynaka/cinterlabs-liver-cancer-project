const mongoose = require('mongoose')
const {Categories, SubCategories, Properties} = require('../../models/data_dictionary_model')



exports.getProperty = (req,res) => {
    Properties.find({category: req.params.categ, subcategory: req.params.subcateg})
                .then(prop => res.json(prop))
                .catch(err => res.status(400).json(err))
}

//bug: delete from parent array as well
exports.deleteProperty = (req, res) => {
    var categ = req.params.categ
    var subcateg = req.params.subcateg
    var prop = req.body.prop

    Properties.findOne({ category: categ, subcategory: subcateg, property: prop })
        .then((docs)=> {

            SubCategories.findOneAndUpdate({ category: categ, title: subcateg }, { $pull: { properties: { $eq: docs } } })
            Properties.deleteOne(docs)
            res.json('Removed a Subcategory')
        })
        .catch(err => res.status(400).json(err))
}

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

/**
 * CREATE method here for inserting many
 * @param {{categ: String, subcateg: String, prop: propertySchema[]}} req
 * @param {*} res
 */
exports.addPropertyMany = async (req,res) =>{
    var categ = req.params.categ
    var subcateg = req.params.subcateg
    var props = req.body.property

    SubCategories.findOne({category: categ, title: subcateg})
    .then(subcateg => {
        subcateg.properties.push(props)

        subcateg.save()
            .then(()=> res.json('Added Properties'))
            .catch(err => res.status(400).json(err))

        property.save()
        .then()
        .catch(err => res.status(400).json(err))
    })

    .catch(err => res.status(400).json(err))
} 

exports.updateProperty = async (req,res) => {

    var categ = req.params.categ
    var subcateg = req.params.subcateg
    var prop = req.params.prop
    var newProp = req.body.title

    const duplicateProp = await Properties.duplicateProperty({category: categ, subcategory: subcateg, property :newProp })
    if(duplicateProp) return res.json({success: false, message: "Property already exists"})

    
    Properties.findOne({category: categ, subcategory: subcateg, property : prop})
        .then(prop => {
            prop.property = newProp

            prop.save()
                .then(()=> res.json('Property Title updated'))
                .catch(err => res.status(400).json(err))
        })

        .catch(err => res.status(400).json(err))
}