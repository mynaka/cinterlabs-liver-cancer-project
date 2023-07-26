const news_controller = require("./methods/news_methods")

module.exports = (app) =>{
    app.get("/news", news_controller.getNews)
    app.post("/news/add", news_controller.addNews)
    app.get("/news/:id", news_controller.fetchOne)
    app.post("/news/delete/:id", news_controller.deleteNews)
    app.post("/news/update/:id", news_controller.updateNews)
   
}