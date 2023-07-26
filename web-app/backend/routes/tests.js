//testing API endpoint

const needle = require("needle")

//add news
needle.post("http://localhost:3000/news/add", 
{author: "Delete",
title : "Me later",
content: "shes better known for the things that she does",
date_add : "June 13, 2023",
tags : ["Music, Revenge"]},
(err, res) => {
    console.log(res.body)
}
)


//update news
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
//     fname: "Test User"
// })
