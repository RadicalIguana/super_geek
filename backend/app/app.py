from datetime import datetime, timedelta
import sys
from fastapi import FastAPI, HTTPException, Depends, status, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, JSONResponse
from jinja2 import Environment, PackageLoader, select_autoescape
from app.auth import authenticate_user, create_access_token, get_password_hash

from model.database import DBSession
from model import models
from model.schemas import UserInput, Token, TokenData
from pydantic import BaseModel, ConfigDict, EmailStr, Extra

#Auth
from typing import Annotated, List
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext

# Email
from fastapi_mail import FastMail, MessageSchema,ConnectionConfig

SECRET_KEY = "change_on_prod_or_we_will_be_hacked"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 800

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Chat test
html = ""
with open('index.html', 'r') as f:
    html = f.read()

@app.get("/")
async def get():
    return HTMLResponse(html)

class ConnectionManager:
    def __init__(self):
        self.connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connections.append(websocket)

    async def broadcast(self, data: str):
        for connection in self.connections:
            await connection.send_text(data)


manager = ConnectionManager()


@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    while True:
        data = await websocket.receive_text()
        await manager.broadcast(f"Client {client_id}: {data}")

# Chat end

@app.get('/users')
async def read_users():
    db = DBSession()
    try:
        users = db.query(models.User).all()
    finally:
        db.close()
    return {'users': users}
        
@app.post('/register')
async def create_user(user: UserInput):
    db = DBSession()
    # try:
    # if len(user.username) == 0 or len(user.password) == 0 or len(user.email) == 0:
    #     raise HTTPException(status_code=400, 
    #             detail={
    #                 "status": "Error 400",
    #                 'msg': 'Some field is empty'
    #             })
        
        
    new_user = models.User(
            # username=user.username,
        first_name=user.first_name,
        second_name=user.second_name,
        third_name=user.third_name,
        email=user.email,
        phone=user.phone,
        password=get_password_hash(user.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
        
    await send_mail(new_user)
    # finally:
    db.close()
        
    return JSONResponse(status_code=200, content={'message': 'User create successfully'})

# @app.post('/login', response_model=Token)
# async def login_for_access_token(
#     form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
# ):
#     user = authenticate_user(form_data.username, form_data.password)
#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail='Incorrect username or password',
#             headers={'WWW-Authenticate': 'Bearer'},
#         )
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={'sub': user.username}, expires_delta=access_token_expires)
#     return {'access_token': access_token, 'token_type': 'bearer'}


# Email

class EmailSchema(BaseModel):
    model_config = ConfigDict(extra='forbid')
    email: List[EmailStr]
   
   
conf = ConnectionConfig(
    MAIL_USERNAME ="d.lapsar16@gmail.com",
    MAIL_PASSWORD = "mrfh hcrf ojgh qcom",
    MAIL_FROM = "d.lapsar16@gmail.com",
    MAIL_PORT = 465,        
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS = False,
    MAIL_SSL_TLS = True,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True,
)

env = Environment(
    loader=PackageLoader('app', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
)   


async def send_mail(user):

    template_user = env.get_template('email_user.html', globals={'user': user})
    html_user = template_user.render()
    
    template_owner = env.get_template('email_owner.html', globals={'user': user})
    html_owner = template_owner.render()

    message_to_user = MessageSchema(
		subject="Регистрация прошла успешно",
		recipients=[user.email], 
		body=html_user,
		subtype="html"
		)
    
    message_to_owner = MessageSchema(
		subject="Пользователь зарегестрировался",
		recipients=[user.email], 
		body=html_owner,
		subtype="html"
		)

    fm = FastMail(conf)
    await fm.send_message(message_to_user)
    await fm.send_message(message_to_owner)
