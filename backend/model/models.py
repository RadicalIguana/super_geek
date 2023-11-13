from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


Base = declarative_base()

SQLALCHEMY_DB_URL = "sqlite:///./db.sql"

engine = create_engine(SQLALCHEMY_DB_URL, echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(300), unique=True)
    email = Column(String(300), unique=True)
    password = Column(String)

    @classmethod
    def get_by_username(cls, username: str):
        session = SessionLocal()
        instance = session.query(cls).filter_by(username=username).first()
        session.close()
        return instance
    
    @classmethod
    def create_user(cls, username: str, email: str, password: str):
        session = SessionLocal()
        