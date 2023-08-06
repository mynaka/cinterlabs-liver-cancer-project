const mongoose = require('mongoose')
const {Contributors, Research} = require('../../models/researches_model')

exports.getContributors = (req,res) => {
    Contributors.find()
        .then(contrib=> res.json(contrib))
        .catch(err => res.status(400).json(err))
}


exports.fetchOne = (req,res) => {
    Contributors.findOne({lname: req.body.lname, fname: req.body.fname, mname: req.body.mname})
                .then(contrib => res.json(contrib))
                .catch(err => res.status(400).json(err))
}


exports.removeContrib = (req,res) => {
    Contributors.findOneAndDelete({lname: req.body.lname, fname: req.body.fname, mname: req.body.mname})
                .then(() => res.json("Removed a Contributor"))
                .catch(err => res.status(400).json(err))
}


exports.editContrib = async (req, res) => {
    var fname = req.body.fname
    var lname = req.body.lname
    var mname = req.body.mname
    var desig = req.body.designation


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