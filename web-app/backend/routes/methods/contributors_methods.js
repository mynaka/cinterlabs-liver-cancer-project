const mongoose = require('mongoose')
const {Contributors, Research} = require('../../models/researches_model')

exports.getContributors = (req,res) => {
    Contributors.find()
        .then(contrib=> res.json(contrib))
        .catch(err => res.status(400).json(err))
}


exports.fetchOne = (req,res) => {
    Contributors.findOne({lname: req.params.lname, fname: req.params.fname, mname: req.params.mname})
                .then(contrib => res.json(contrib))
                .catch(err => res.status(400).json(err))
}


exports.removeContrib = (req,res) => {
    Contributors.findOneAndDelete({lname: req.params.lname, fname: req.params.fname, mname: req.params.mname})
                .then(() => res.json("Removed a Contributor"))
                .catch(err => res.status(400).json(err))
}


exports.editContrib = async (req, res) => {
    var fname = req.params.fname
    var lname = req.params.lname
    var mname = req.params.mname
    var desig = req.params.designation


    const duplicateContributor = await Contributors.duplicateContributor({fname: fname, lname: lname, mname: mname})
    if (duplicateContributor) {return res.json({success: false, message: "Duplicate contributor detected"})}


    Contributors.findOne({fname: req.params.fname, lname: req.params.lname})
                .then(contrib => {
                    contrib.fname = fname,
                    contrib.lname = lname,
                    contrib.mname = mname,
                    contrib.designation = desig

                    contrib.save()
                            .then(() => res.json("Updated Contributor"))
                            .catch(err => res.status(400).json(err))

                })

                .catch(err => res.status(400).json(err))
}