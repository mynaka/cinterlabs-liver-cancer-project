from fastapi import FastAPI
import sys
sys.path.append(r'./app')

import routers.login as loginPage
import routers.signup as signupPage

app = FastAPI()
app.include_router(loginPage.router)
app.include_router(signupPage.router)


@app.get("/")
async def home():
    data = {
        "text": "hi"
    }
    return {"data": data["text"]+" user"}