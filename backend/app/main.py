from fastapi import FastAPI
from fastapi.responses import RedirectResponse

import sys
sys.path.append(r'./app')
from routers._routing import setRoutes

app = FastAPI()
setRoutes(app)

#set /home as default route
@app.get("/")
async def home():
    return RedirectResponse("/home")