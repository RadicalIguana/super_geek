from fastapi import Form
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str or None = None

class UserInput(BaseModel):
    id: int
    username: str or None = Form(None)
    email: str or None = Form(None)
    password: str or None = Form(None)
    
