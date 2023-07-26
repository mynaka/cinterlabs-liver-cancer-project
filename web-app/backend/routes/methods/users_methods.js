const mongoose = require('mongoose')
const Users = require('../../models/users_model')

exports.getUsers = (req, res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err)) 
}

exports.fetchOne = (req,res) =>{
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}


exports.deleteUser = (req, res) => {    
    Users.findByIdAndDelete(req.params.id)
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

    const duplicateEmail = await Users.duplicateUser(email)
    const duplicateUsername = await Users.duplicateUser(username)

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

//update user
exports.signup = (req,res) => {

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