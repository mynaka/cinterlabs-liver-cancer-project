const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    mname: {type: String, required: false},
    bday: {type: Date, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

//data validation
UserSchema.statics.duplicateUser = async function(val){
    if(!val) throw new Error("Invalid value")

    try{
        const user = await this.findOne({val})
        if(user) return true
    }catch(err){
        console.log("Error in duplicateEmail", err.message)
        return
    }
}

module.exports = mongoose.model("User", UserSchema)