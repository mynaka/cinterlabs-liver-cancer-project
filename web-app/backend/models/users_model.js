const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    mname: {type: String, required: false},
    bday: {type: Date},             //change to required later
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

//data validation
UserSchema.statics.duplicateUser = async function(val){
    try{
        const user = await this.findOne(val)
        if(user) 
        return true
    }catch(err){
        console.log("Error in duplicateUser", err.message)
        return
    }
}


module.exports = mongoose.model("User", UserSchema)