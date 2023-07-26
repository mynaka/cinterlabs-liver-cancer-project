const news_controller = require("./methods/news_methods")
const user_controller = require("./methods/users_methods")
const categ_controller = require("./methods/categories_methods")


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
    app.get("/categories/:id", categ_controller.fetchOne)
    app.post("/categories/delete/:id", categ_controller.deleteCategory)
    app.post("/categories/add", categ_controller.addCategory)
}