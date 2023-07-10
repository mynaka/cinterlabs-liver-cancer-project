const needle = require("needle")


needle.post("http://localhost:3001/news/add", 
{author: "Niki",
title : "Lowkey",
content: "HELLO WORK",
date_add : "June 12, 2023",
tags : ["Leisure, Gaming"]},
(err, res) => {
    console.log(res.body)
}
)
