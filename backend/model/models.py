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
    first_name = Column(String(300))
    second_name = Column(String(300))
    third_name = Column(String(300))
    email = Column(String(300), unique=True)
    phone = Column(String(300), unique=True)
    # password = Column(String(300))

    # @classmethod
    # def get_by_username(cls, username: str):
    #     session = SessionLocal()
    #     instance = session.query(cls).filter_by(username=username).first()
    #     session.close()
    #     return instance
        