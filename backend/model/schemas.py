from fastapi import Form
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str or None = None

class UserInput(BaseModel):
    first_name: str 
    second_name: str
    third_name: str
    email: str
    phone: str
    password: str
