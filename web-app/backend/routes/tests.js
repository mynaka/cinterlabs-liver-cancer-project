/*testing API endpoint 
POST only
GET methods can be directly tested on browser

*/
const needle = require("needle")

//add news
// needle.post("http://localhost:3001/news/add", 
// {author: "Delete",
// title : "Me later",
// content: "shes better known for the things that she does",
// date_add : "June 13, 2023",
// tags : ["Music, Revenge"]},
// (err, res) => {
//     console.log(res.body)
// }
// )

//get news

// needle.get("http://localhost:3001/news",{},
// (err,res)=>{
//     console.log(res.body)
// })

//update news

/*caveat: frontend must be able to fetch details first so what is 
returned to the server is complete 

*/
// needle.post("http://localhost:3001/news/update/64c0ad21345b08bf3ff28176", 
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
// needle.post("http://localhost:3001/news/delete/64c0ad21345b08bf3ff28176", 
// (err, res) => {
//     console.log(res.body)
// }
// )





//add user
// needle.post("http://localhost:3001/signup/success",{
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
// needle.post("http://localhost:3001/user/edit/profile/CannonEvent", 
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
// needle.post("http://localhost:3001/user/edit/password/YasKween", 
// {newpass: "picturetoburn",
// email: "cannonev@gmail.com"} ,
// (err, res) => {
//     console.log(res.body)
// }
// )


//delete user
// needle.post("http://localhost:3001/user/delete/katyPerry@gmail.com",
// {}, (err,res) => {console.log(res.body)})



//categories

//add category
// needle.post("http://localhost:3001/categories/add",
// {title: "Delete",},
// (err,res)=> {console.log(res.body)})

//delete category
// needle.post("http://localhost:3001/categories/delete/Delete",
// {},
// (err,res)=> {console.log(res.body)})


//update category
// needle.post("http://localhost:3001/categories/edit/Clinically",
// {title: "Clinical"},
// (err,res)=> {console.log(res.body)})


//subcategories

//add new subcategory
// needle.post("http://localhost:3001/Administrative/subcategory/add",
// {title: "PropTest",
// desc: "This is a sample category"},
// (err,res)=> {console.log(res.body)})


//delete subcategory
// needle.post("http://localhost:3001/Administrative/Test/delete",
// {},
// (err,res)=> {console.log(res.body)})

//update subcategory
// needle.post("http://localhost:3001/Administrative/Update/edit",
// {title: "Updated Title"},
// (err,res)=> {console.log(res.body)})


//properties

//add property
//needle.post("http://localhost:3001/Clinical/Another one/property/add",
// {property:"delete",
// type: "string",
// required: true,
// description:"No Description"},
// (err,res) => {console.log(res.body)})


//delete property
// needle.post("http://localhost:3001/Administrative/PropTest/delete/delete",
// {},
// (err,res) => {console.log(res.body)})

//update property
// needle.post("http://localhost:3001/Clinical/Another one/delete/edit",
// {title: "Updated Title"},
// (err,res) => {console.log(res.body)})


//researches

//add research
// needle.post("http://localhost:3001/research/submit",
// {author: {
//     fname: "Yanna",
//     mname: "D.",
//     lname:"Hilario"
// },
// title: "MinMax Theory",
// content: "Lorem Ipsum....",
// tags: ["Songs", "Sample"]},
// (err,res)=> {console.log(res.body)})

//verify research
// needle.post("http://localhost:3001/research/Toupdate/verify",
// {}, (err,res) => {console.log(res.body)})

//update research



//delete research
needle.post("http://localhost:3001/Toupdate/delete",
{author: {
   fname: "Yanna",
   mname: "D.",
   lname: "Hilario" 
}}, (err,res) => {console.log(res.body)})
