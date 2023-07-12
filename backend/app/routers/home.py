from fastapi import APIRouter

router = APIRouter(
    prefix = '/home',
    tags = ['Homepage']
)

@router.get('')
async def init():
    data = {
        "text": "hi"
    }
    return {"data": data["text"]+" user"}