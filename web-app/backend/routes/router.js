const controller = require("./controller")

module.exports = (app) =>{
    app.get("/news", controller.getNews)
    app.post("/news/add", controller.addNews)
    app.post("/news/delete", controller.deleteNews)
    app.get("/news/:id", controller.fetchOne)
}