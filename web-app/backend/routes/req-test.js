//testing API endpoint

const needle = require("needle")


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


needle.post("http://localhost:3001/news/delete", 
{author: "Delete",
title : "Me later",
id: "64accad1864463e8f175139b",
content: "shes better known for the things that she does",
date_add : "June 13, 2023",
tags : ["Music, Revenge"]},
(err, res) => {
    console.log(res.body)
}
)
