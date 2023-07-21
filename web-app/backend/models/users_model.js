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

UserSchema.pre("save", function(next){
    const user = this;

    if(!user.isModified("password")) return next();

    return bcrypt.genSalt((saltErr, salt) =>{
        if (saltErr) {return next(saltErr)}

        return bcrypt.hash(user.password,salt,(hashErr, hash)=>{
            if (hashErr) {return next(hashErr)}

            user.password = hash;
            return next()
        })
    })
})

//custom method
UserSchema.methods.comparePassword = function(password, callback){
    bcrypt.compare(password,this.password, callback)
}


module.exports = mongoose.model("User", UserSchema)