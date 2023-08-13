const Projects = require('../../models/projects_model')

exports.getProjects = (req,res) =>{
    Projects.find()
    .then(proj => {res.json(proj)})
    .catch(err => res.status(400).json(err)) 
}


exports.addProject = (req,res) =>{
    
}