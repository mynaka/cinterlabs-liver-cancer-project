const mongoose = require('mongoose')

const contributorsSchema = new mongoose.Schema({
    fname: {type: String, required : true},
    mname: {type: String, required: true},
    lname: {type: String, required: true},
    designation: {type: String, requied: true},
    contribution: {type: Array, "default": [], required: false},
}

)

module.exports = mongoose.model("Contributors", contributorsSchema)

