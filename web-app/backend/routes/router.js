const news_controller = require("./methods/news_methods")
const user_controller = require("./methods/users_methods")
const categ_controller = require("./methods/categories_methods")
const subcateg_controller = require("./methods/subcategories_methods")
const property_controller = require("./methods/properties_methods")
const research_controller = require("./methods/researches_methods")

module.exports = (app) =>{
    app.get("/news", news_controller.getNews)
    app.post("/news/add", news_controller.addNews)
    app.get("/news/:id", news_controller.fetchOne)
    app.post("/news/delete/:id", news_controller.deleteNews)
    app.post("/news/update/:id", news_controller.updateNews)
    app.get("/users",user_controller.getUsers)
    app.get("/user/:username", user_controller.fetchUser)
    app.post("/signup/success", user_controller.signup)
    app.post("/user/edit/profile/:username",user_controller.updateUser)
    app.post("/user/edit/password/:username",user_controller.updatePassword)
    app.post("/user/delete/:email", user_controller.deleteUser)
    app.get("/categories", categ_controller.getCateg)
    app.get("/categories/:title", categ_controller.fetchOne)
    app.get("/categories/:title/subcategory", categ_controller.getSubCateg)
    app.post("/categories/delete/:title", categ_controller.deleteCategory)
    app.post("/categories/add", categ_controller.addCategory)
    app.post("/categories/edit/:title", categ_controller.updateCateg)
    app.post("/:categ/subcategory/add", subcateg_controller.addSubCategory)
    app.get("/:categ/subcategories", subcateg_controller.getSubCateg)
    app.get("/:categ/:subcateg", subcateg_controller.fetchOne)
    app.post("/:categ/:subcateg/delete", subcateg_controller.deleteSubCategory)
    app.post("/:categ/:subcateg/edit", subcateg_controller.updateSubCateg)
    app.get("/:categ/:subcateg/property", property_controller.getProperty)
    app.post("/:categ/:subcateg/property/add", property_controller.addProperty)
    app.post("/:categ/:subcateg/property/addMany", property_controller.addPropertyMany)
    app.post("/:categ/:subcateg/:prop/delete", property_controller.deleteProperty)
    app.post("/:categ/:subcateg/:prop/edit", property_controller.updateProperty)
    app.get("/research", research_controller.getResearches )
    app.get("/pending", research_controller.pendingResearches)
    app.get("/:title", research_controller.fetchOne)
    app.post("/research/submit", research_controller.addReserach)
    //app.post("/research/edit", research_controller.updateResearch)
    app.post("/:title/delete", research_controller.deleteResearch)
    app.post("/research/:title/verify", research_controller.verifyResearch)

}