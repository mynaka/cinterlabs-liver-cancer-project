from fastapi import FastAPI

def setRoutes(app: FastAPI):
    import routers.home as homePage
    import routers.login as loginPage
    import routers.signup as signupPage

    app.include_router(homePage.router)
    app.include_router(loginPage.router)
    app.include_router(signupPage.router)