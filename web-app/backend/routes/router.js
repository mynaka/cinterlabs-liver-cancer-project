const controller = require("./controller")

module.exports = (app) =>{
    app.get("/news", controller.getNews)
    app.post("/news/add", controller.addNews)
    app.get("/news/:id", controller.fetchOne)
    app.post("/news/delete/:id", controller.deleteNews)
    app.post("/news/update/:id", controller.updateNews)
    app.post("/login", controller.login)
    app.post("/signup", controller.signup)
}