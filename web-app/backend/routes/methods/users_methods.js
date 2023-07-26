const mongoose = require('mongoose')
const User = require('../../models/users_model')

exports.getUsers = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchUser = (req,res) =>{
    User.findOne({username: req.params.username})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}


exports.deleteUser = (req, res) => {    
    User.findOneAndDelete({email:req.params.email})
        .then(()=> res.json('Removed a user account'))
        .catch(err => res.status(400).json(err))
}

exports.signup = async (req,res) => {

    var fname = req.body.fname      
    var lname = req.body.lname
    var mname = req.body.mname
    var bday = req.body.bday
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password

    //required fields
    //note: password validation is done in react
    if(!fname || !lname || !email || !username || !password){
        return res.send({error: "Missing required fields"})
    }

    const duplicateEmail = await User.duplicateUser({email:email})
    const duplicateUsername = await User.duplicateUser({username:username})

    if(duplicateEmail) return res.json({success: false, message: "Duplicate Email"})
    if(duplicateUsername) return res.json({success: false, message: "Duplicate Username"})

    const user = new User({
        fname : fname  ,    
        lname : lname,
        mname : mname,
        bday : bday,
        username :username,
        email : email,
        password : password
    })

    console.log(user)

    user.save()
        .then(()=> res.json('Successfully added user!'))
        .catch(err => res.status(400).json(err))

}

// //update user
exports.updateUser = async (req,res) =>{

    var username = req.body.username
    const duplicateUsername = await User.duplicateUser({username:username})
    if(duplicateUsername) return res.json({success: false, message: "Duplicate Username"})

    
    const origUser = await User.findOne({email: req.body.email})
    
    User.findOne({email: origUser.email})
        .then(user => {
            user.fname = req.body.fname,
            user.lname = req.body.lname,
            user.mname = req.body.mname, 
            //user.bday = req.body.bday,
            user.username = username

            user.save()
                .then(()=> res.json('User profile updated'))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
    
}

exports.updatePassword = async (req,res) =>{
    var newpass = req.body.newpass
    var email = req.body.email
    const origUser = await User.findOne({email: email})
    
    if(newpass == origUser.password) return res.json({success:false, message: "Old password matches new password"})

    User.findOne({email: email})
        .then(user => {
            user.password = newpass

            user.save()
                .then(() => res.json('Successfully changed password'))
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))

}