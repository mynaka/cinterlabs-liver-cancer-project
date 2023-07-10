const controller = require("./controller")

module.exports = (app) =>{
    app.get("/news", controller.getNews)
    app.post("/news/add", controller.addNews)
}