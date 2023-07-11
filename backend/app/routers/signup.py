from fastapi import APIRouter

router = APIRouter(
    prefix = '/signup',
    tags = ['Sign Up']
)

# /signup/
@router.get('/')
async def init():
    data = {
        "text": "Welcome"
    }
    return {"data": data["text"]}