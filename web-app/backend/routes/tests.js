/*testing API endpoint 
POST only
GET methods can be directly tested on browser

*/
const needle = require("needle")

//add news
needle.post("http://localhost:3001/news/add", 
{author: "Regina Mae C. Ongkiko",
title : "Can we predict the future of computational research?",
content: "Modern jargons like ‘robotics,’ ‘drones,’ ‘bioinformatics,’ or ‘computational research’ are normally associated with floor-to-ceiling computers, advanced optical wirings, boards of complicated mathematical equations, and vast containers of servers. When hearing these, the University of the Philippines Los Baños (UPLB) hardly comes to mind. But of course, times are changing and UPLB continues to break barriers. Modest interdisciplinary research initiatives are now bearing results, one of which is the CINTERLabs. Interdisciplinary collaboration gives birth to computational advances.  The Physical Sciences Building at UPLB is home to the Institute of Chemistry, Institute of Computer Science, Institute of Statistics, and the Institute of Mathematical Sciences and Physics. Though teaching very different disciplines, these institutions have found common ground in their pursuit of knowledge. Building on their individual strengths and expertise, these academic units envisioned an interdisciplinary studies laboratory which could facilitate information free flow, collaboration and networking where students with an ongoing thesis could team up with a researcher from another unit. For example, a biology student working closely with a computer science major. Thus, the idea of the Computational Interdisciplinary Research Laboratories (CINTERLabs) was born. The management structure and operational details were formed through a series of brainstorming sessions which resulted to a number of research opportunities. “While the physical infrastructure was only turned over very recently, we have already been meeting and working together,” says Prof. Jaime M. Samaniego, CINTERLabs chair. Today, an actual laboratory is situated at the fourth floor of the Physical Sciences Building as a think tank where students, faculty, and researchers come together to find creative computational solutions for existing and emerging problems. Computational research as a tool for all industries  CINTERLabs provides services to facilitate innovations and real-life solutions by bringing together five core areas. The first core area uses clusters of networked computers, which researchers can use to implement high-performance parallel and distributed computing to solve highly complicated problems. Without the right tools and expertise, solving these problems can take weeks and even months. Another core area focuses on machine vision, image-processing, and video-processing which was demonstrated during the SyenSaya 2014. Back then, CINTERLabs showcased a 3D avatarbased virtual environment of the UPLB campus. Aside from its visual elements, participants experienced walking through the campus and even interacting with each other’s avatars. It was straight out of the digital transformation handbook.The third core area is cloud computing which is vital for access and management of large chunks of data. Meanwhile, combination of algorithms and heuristics, another core area of artificial intelligence can help solve complicated optimization problems. Computer modeling and simulation, the last core area, along with computer graphics and scientific data visualization, is useful for creating real or proposed models based on algorithms. These core areas have various applications across a range of subdisciplines of arts, natural and social sciences including computational physics, materials science, ecoinformatics, IT support for biodiversity research, social sciences computing, computer animation, educational game development, and web and mobile application development. Currently, CINTERLabs is busy with a number of projects. The “Digital Laguna” is a digital mapping project that brings together computational research and social sciences. Prof. Jaderick P. Pabico of the Institute of Computer Science recalled that after the Bohol earthquake in 2013, a lot of heritage sites were ruined.It was then that researchers realized that the majority of the cultural elements had not been recorded and thus Digital Laguna was conceived to map cultural heritage so that they may be preserved in the event of natural disasters.Specifically, Digital Laguna aims to “preserve” the Rizal Shrine by using visual information to simulate experience.This means creating fully-detailed 3D Web View of Rizal Shrine similar to Google Street View but is more advanced since it includes sound rendering simulations. “Even if you are not in Laguna, you will feel as if you were actually there, walking inside Rizal’s Shrine and looking around,” Prof. Jade explains.“You can also learn more about the furniture and accessories in the Shrine because the project aims for it to be interactive and educational. For example, when you click on a lamp, you will learn about its history, materials, and other small details. You can even hear sounds like people walking up and down the staircase.”Currently, CINTERLabs is also busy with various projects that can contribute to fields such as health, ecotourism, and animal science.One could potentially lead to a better understanding of mosquitoes’ feeding behavior and can provide solutions to the country’s current dengue problem.Computational research in ecotourism can also give much needed data on modeling and carrying capacity of certain destinations.In agriculture, there are also more opportunities for animal breeders to have easier access to resources for artificial insemination. With computational research, they are informed of the best time and conditions for conducting breeding so that they can maximize their business. Having already conducted this project for carabaos and pigs, CINTERLabs is now developing a similar system for breeding of other ruminants.Collaboration breeds innovationWhat CINTERLabs is now, has been a truly been an impressive achievement. This group’s uniqueness lies in its strong foundation of a collaborative mindset.The men and women of CINTERLabs did not need any formal and written appointments to start weaving their magic. Everything flowed naturally, from communication, to brainstorming, to actual research and implementation.More than being part of a formal committee, these individuals have learned how to channel their curiosity and inquisitiveness into actual problem-solving.They did not let their respective disciplines hinder what they can accomplish as a team. Indeed, they are a great example of what an interdisciplinary studies center is. At the CINTERLabs, the researcher you just casually talked to this morning could very well be your future partner in discovering a new solution for a problem. You could just be brainstorming with your labmates today, and spearheading the next big scientific discovery a few years from now. Undoubtedly, CINTERLabs has shown us what different disciplines can achieve when they let down their walls.",
tags : ["Computational Research ", "Computational  Advancement", "UPLB"]},
(err, res) => {
    console.log(res.body)
}
)

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
// needle.post("http://localhost:3001/Clinical/Another one/property/add",
// {property:"todel",
// type: "string",
// required: true,
// description:"No Description"},
// (err,res) => {console.log(res.body)})


//delete property
// needle.post("http://localhost:3001/Clinical/Another one/hele/delete",
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
// needle.post("http://localhost:3001/Toupdate/delete",
// {author: {
//    fname: "Yanna",
//    mname: "D.",
//    lname: "Hilario" 
// }}, (err,res) => {console.log(res.body)})
