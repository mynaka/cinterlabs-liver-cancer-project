/*testing API endpoint 
POST only
GET methods can be directly tested on browser

*/
const needle = require("needle")

//add news
// needle.post("http://localhost:3000/news/add", 
// {author: "Delete",
// title : "Me later",
// content: "shes better known for the things that she does",
// date_add : "June 13, 2023",
// tags : ["Music, Revenge"]},
// (err, res) => {
//     console.log(res.body)
// }
// )


//update news

/*caveat: frontend must be able to fetch details first so what is 
returned to the server is complete 

*/
// needle.post("http://localhost:3000/news/update/64c0ad21345b08bf3ff28176", 
// {author: "UPDATED NA",
// title : "Me later hehe",
// content: "shes better known for the things that she does",
// date_add : "June 13, 2023",
// tags : ["Music, Revenge"]},
// (err, res) => {
//     console.log(res.body)
// }
// )

//delete news
// needle.post("http://localhost:3000/news/delete/64c0ad21345b08bf3ff28176", 
// (err, res) => {
//     console.log(res.body)
// }
// )





//add user
// needle.post("http://localhost:3000/signup/success",{
//     fname: "Katyr",
//     lname: "Perry",
//     mname: "M",
//     username: "kittycat",
//     email: "katyPerry@gmail.com",
//     password: "totga123!",
    
// }, (err,res)=>{console.log(res.body)})


//update profile

/*caveat: email must be included in the req body
email cannot be changed once account is created
*/
// needle.post("http://localhost:3000/user/edit/profile/CannonEvent", 
// {fname: "ANDREW",
// lname: "SANTOS",
// mname: "Burgos",
// username: "YasKween",
// email: "cannonev@gmail.com"} ,
// (err, res) => {
//     console.log(res.body)
// }
// )

//update password

/*Note: frontend must validate new password twice*/
// needle.post("http://localhost:3000/user/edit/password/YasKween", 
// {newpass: "picturetoburn",
// email: "cannonev@gmail.com"} ,
// (err, res) => {
//     console.log(res.body)
// }
// )


//delete user
// needle.post("http://localhost:3000/user/delete/katyPerry@gmail.com",
// {}, (err,res) => {console.log(res.body)})



//categories

//add category
// needle.post("http://localhost:3000/categories/add",
// {title: "Sample",},
// (err,res)=> {console.log(res.body)})

//delete category
// needle.post("http://localhost:3000/categories/delete/Clinically",
// {title: "Clinical"},
// (err,res)=> {console.log(res.body)})


//update category
// needle.post("http://localhost:3000/categories/edit/Clinical",
// {title: "Clinically"},
// (err,res)=> {console.log(res.body)})


//subcategories
needle.post("http://localhost:3000/categories/subcategory/add",
{categ:"64c217e8636d2d5135fc1236",
title: "Hello World",
desc: "This is a sample category"},
(err,res)=> {console.log(res.body)})

