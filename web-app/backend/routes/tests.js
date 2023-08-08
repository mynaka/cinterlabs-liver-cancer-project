/*testing API endpoint 
POST only
GET methods can be directly tested on browser

*/
const needle = require("needle")

//add news
// needle.post("http://localhost:3001/news/add", 
// {author: "Regina Mae C. Ongkiko",
// title : "Can we predict the future of computational research?",
// content: "Modern jargons like ‘robotics,’ ‘drones,’ ‘bioinformatics,’ or ‘computational research’ are normally associated with floor-to-ceiling computers, advanced optical wirings, boards of complicated mathematical equations, and vast containers of servers. When hearing these, the University of the Philippines Los Baños (UPLB) hardly comes to mind. But of course, times are changing and UPLB continues to break barriers. Modest interdisciplinary research initiatives are now bearing results, one of which is the CINTERLabs. Interdisciplinary collaboration gives birth to computational advances.  The Physical Sciences Building at UPLB is home to the Institute of Chemistry, Institute of Computer Science, Institute of Statistics, and the Institute of Mathematical Sciences and Physics. Though teaching very different disciplines, these institutions have found common ground in their pursuit of knowledge. Building on their individual strengths and expertise, these academic units envisioned an interdisciplinary studies laboratory which could facilitate information free flow, collaboration and networking where students with an ongoing thesis could team up with a researcher from another unit. For example, a biology student working closely with a computer science major. Thus, the idea of the Computational Interdisciplinary Research Laboratories (CINTERLabs) was born. The management structure and operational details were formed through a series of brainstorming sessions which resulted to a number of research opportunities. “While the physical infrastructure was only turned over very recently, we have already been meeting and working together,” says Prof. Jaime M. Samaniego, CINTERLabs chair. Today, an actual laboratory is situated at the fourth floor of the Physical Sciences Building as a think tank where students, faculty, and researchers come together to find creative computational solutions for existing and emerging problems. Computational research as a tool for all industries  CINTERLabs provides services to facilitate innovations and real-life solutions by bringing together five core areas. The first core area uses clusters of networked computers, which researchers can use to implement high-performance parallel and distributed computing to solve highly complicated problems. Without the right tools and expertise, solving these problems can take weeks and even months. Another core area focuses on machine vision, image-processing, and video-processing which was demonstrated during the SyenSaya 2014. Back then, CINTERLabs showcased a 3D avatarbased virtual environment of the UPLB campus. Aside from its visual elements, participants experienced walking through the campus and even interacting with each other’s avatars. It was straight out of the digital transformation handbook.The third core area is cloud computing which is vital for access and management of large chunks of data. Meanwhile, combination of algorithms and heuristics, another core area of artificial intelligence can help solve complicated optimization problems. Computer modeling and simulation, the last core area, along with computer graphics and scientific data visualization, is useful for creating real or proposed models based on algorithms. These core areas have various applications across a range of subdisciplines of arts, natural and social sciences including computational physics, materials science, ecoinformatics, IT support for biodiversity research, social sciences computing, computer animation, educational game development, and web and mobile application development. Currently, CINTERLabs is busy with a number of projects. The “Digital Laguna” is a digital mapping project that brings together computational research and social sciences. Prof. Jaderick P. Pabico of the Institute of Computer Science recalled that after the Bohol earthquake in 2013, a lot of heritage sites were ruined.It was then that researchers realized that the majority of the cultural elements had not been recorded and thus Digital Laguna was conceived to map cultural heritage so that they may be preserved in the event of natural disasters.Specifically, Digital Laguna aims to “preserve” the Rizal Shrine by using visual information to simulate experience.This means creating fully-detailed 3D Web View of Rizal Shrine similar to Google Street View but is more advanced since it includes sound rendering simulations. “Even if you are not in Laguna, you will feel as if you were actually there, walking inside Rizal’s Shrine and looking around,” Prof. Jade explains.“You can also learn more about the furniture and accessories in the Shrine because the project aims for it to be interactive and educational. For example, when you click on a lamp, you will learn about its history, materials, and other small details. You can even hear sounds like people walking up and down the staircase.”Currently, CINTERLabs is also busy with various projects that can contribute to fields such as health, ecotourism, and animal science.One could potentially lead to a better understanding of mosquitoes’ feeding behavior and can provide solutions to the country’s current dengue problem.Computational research in ecotourism can also give much needed data on modeling and carrying capacity of certain destinations.In agriculture, there are also more opportunities for animal breeders to have easier access to resources for artificial insemination. With computational research, they are informed of the best time and conditions for conducting breeding so that they can maximize their business. Having already conducted this project for carabaos and pigs, CINTERLabs is now developing a similar system for breeding of other ruminants.Collaboration breeds innovationWhat CINTERLabs is now, has been a truly been an impressive achievement. This group’s uniqueness lies in its strong foundation of a collaborative mindset.The men and women of CINTERLabs did not need any formal and written appointments to start weaving their magic. Everything flowed naturally, from communication, to brainstorming, to actual research and implementation.More than being part of a formal committee, these individuals have learned how to channel their curiosity and inquisitiveness into actual problem-solving.They did not let their respective disciplines hinder what they can accomplish as a team. Indeed, they are a great example of what an interdisciplinary studies center is. At the CINTERLabs, the researcher you just casually talked to this morning could very well be your future partner in discovering a new solution for a problem. You could just be brainstorming with your labmates today, and spearheading the next big scientific discovery a few years from now. Undoubtedly, CINTERLabs has shown us what different disciplines can achieve when they let down their walls.",
// tags : ["Computational Research ", "Computational  Advancement", "UPLB"]},
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
// {title: "Biospecimen",},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/categories/add",
// {title: "Clinical",},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/categories/add",
// {title: "Data File",},
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
// {title: "Core Metadata Collection",
// desc: "Structured description of a collection of several dataset"},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/subcategory/add",
// {title: "Program",
// desc: "A broad framework of goals to be achieved. (NCIt C52647)"},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/subcategory/add",
// {title: "Project",
// desc: "Any specifically defined piece of work that is undertaken or attempted to meet a single requirement. (NCIt C47885)"},
// (err,res)=> {console.log(res.body)})


// needle.post("http://localhost:3001/Biospecimen/subcategory/add",
// {title: "Discovery",
// desc: "List of genomic variations captured in the sequencing data."},
// (err,res)=> {console.log(res.body)})


// needle.post("http://localhost:3001/Clinical/subcategory/add",
// {title: "Family",
// desc: "Collection of all data related to the family members and their relationships."},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Clinical/subcategory/add",
// {title: "sample",
// desc: "Biospecimen information that links subjects to samples including sample's provider, source, dbgap sample detail and so forth."},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Clinical/subcategory/add",
// {title: "subject",
// desc: "Collection of some of the basics about a subject (e.g., characterization by age, sex, or race)."},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Data File/subcategory/add",
// {title: "Reference File",
// desc: "Data file containing any type of reference required for a data analysis."},
// (err,res)=> {console.log(res.body)})

// needle.post("http://localhost:3001/Data File/subcategory/add",
// {title: "Sequencing",
// desc: "Data file containing sequencing information."},
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
// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"type",
// type: "string",
// required: true,},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"submitter_id",
// type: "string",
// required: true,
// description:"A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"projects",
// type: "array object",
// required: true,},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"contributor",
// type: "string",
// required: false,
// description:"An entity responsible for making contributions to the resource. Examples of a Contributor include a person, an organization, or a service. Typically, the name of a Contributor should be used to indicate the entity."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"coverage",
// type: "string",
// required: false,
// description:"The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant. Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN] (http://www.getty.edu/research/tools/vocabulary/tgn/index.html). Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"creator",
// type: "string",
// required: false,
// description:"An entity primarily responsible for making the resource. Examples of a Creator include a person, an organization, or a service. Typically, the name of a Creator should be used to indicate the entity."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"data_type",
// type: "string",
// required: false,
// description:"The nature or genre of the resource. Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"date",
// type: "string",
// required: false,
// description:"A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]"},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"description",
// type: "string",
// required: false,
// description:"An account of the resource. Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"format",
// type: "string",
// required: false,
// description:"The file format, physical medium, or dimensions of the resource. Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME] (http://www.iana.org/assignments/media-types/)."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"language",
// type: "string",
// required: false,
// description:"A language of the resource. Recommended best practice is to use a controlled vocabulary such as RFC 4646 (http://www.ietf.org/rfc/rfc4646.txt)."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"publisher",
// type: "string",
// required: false,
// description:"An entity responsible for making the resource available. Examples of a Publisher include a person, an organization, or a service. Typically, the name of a Publisher should be used to indicate the entity."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"relation",
// type: "string",
// required: false,
// description:"A related resource. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system. "},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"rights",
// type: "string",
// required: false,
// description:"Information about rights held in and over the resource. Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"source",
// type: "string",
// required: false,
// description:"A related resource from which the described resource is derived. The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"subject",
// type: "string",
// required: false,
// description:"The topic of the resource. Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Core Metadata Collection/property/add",
// {property:"title",
// type: "string",
// required: false,
// description:"A name given to the resource. Typically, a Title will be a name by which the resource is formally known."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Program/property/add",
// {property:"name",
// type: "string",
// required: true,
// description:"Full name/title of the program."},
// (err,res) => {console.log(res.body)})


// needle.post("http://localhost:3001/Administrative/Program/property/add",
// {property:"dbgap_accession_number",
// type: "string",
// required: true,
// description:"The dbgap accession number provided for the program."},
// (err,res) => {console.log(res.body)})

// needle.post("http://localhost:3001/Administrative/Program/property/add",
// {property:"type",
// type: "string",
// required: false,
// },
// (err,res) => {console.log(res.body)})



needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"type",
type: "string",
required: true,},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"submitter_id",
type: "string",
required: true,
description:"A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"projects",
type: "array object",
required: true,},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"contributor",
type: "string",
required: false,
description:"An entity responsible for making contributions to the resource. Examples of a Contributor include a person, an organization, or a service. Typically, the name of a Contributor should be used to indicate the entity."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"coverage",
type: "string",
required: false,
description:"The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant. Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN] (http://www.getty.edu/research/tools/vocabulary/tgn/index.html). Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"creator",
type: "string",
required: false,
description:"An entity primarily responsible for making the resource. Examples of a Creator include a person, an organization, or a service. Typically, the name of a Creator should be used to indicate the entity."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"data_type",
type: "string",
required: false,
description:"The nature or genre of the resource. Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"date",
type: "string",
required: false,
description:"A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]"},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"description",
type: "string",
required: false,
description:"An account of the resource. Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"format",
type: "string",
required: false,
description:"The file format, physical medium, or dimensions of the resource. Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME] (http://www.iana.org/assignments/media-types/)."},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"language",
type: "string",
required: false,
description:"A language of the resource. Recommended best practice is to use a controlled vocabulary such as RFC 4646 (http://www.ietf.org/rfc/rfc4646.txt)."},
(err,res) => {console.log(res.body)})

needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"publisher",
type: "string",
required: false,
description:"An entity responsible for making the resource available. Examples of a Publisher include a person, an organization, or a service. Typically, the name of a Publisher should be used to indicate the entity."},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"relation",
type: "string",
required: false,
description:"A related resource. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system. "},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"rights",
type: "string",
required: false,
description:"Information about rights held in and over the resource. Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights."},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"source",
type: "string",
required: false,
description:"A related resource from which the described resource is derived. The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system."},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"subject",
type: "string",
required: false,
description:"The topic of the resource. Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary."},
(err,res) => {console.log(res.body)})


needle.post("http://localhost:3001/Administrative/Project/property/add",
{property:"title",
type: "string",
required: false,
description:"A name given to the resource. Typically, a Title will be a name by which the resource is formally known."},
(err,res) => {console.log(res.body)})


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
