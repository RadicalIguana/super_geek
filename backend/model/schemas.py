from fastapi import Form
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str or None = None

class UserInput(BaseModel):
    id: int
    first_name: str or None = None
    second_name: str or None = None
    third_name: str or None = None
    email: str or None = None
    phone: str or None = None
    # password: str or None = None
