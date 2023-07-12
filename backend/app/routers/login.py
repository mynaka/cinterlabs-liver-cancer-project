from fastapi import APIRouter

router = APIRouter(
    prefix = '/login',
    tags = ['Login']
)

#/login
@router.get('')
async def init():
    data = {
        "text": "hi"
    }
    return {"data": data["text"]+" amos"}

#/login/*whatever input page you put in*
@router.get('/{page_name}')
async def init(page_name: str):
    data = {
        "text": "Welcome to "
    }
    return {"data": data["text"] + page_name}