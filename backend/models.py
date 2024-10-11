from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.orm import relationship
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=True)
    questions = db.relationship('Question', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
        }
    
class Question(db.Model):
    __tablename__ = 'question'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), unique=True, nullable=False)
    category = db.Column(db.String(240), nullable=False)
    logo = db.Column(db.String(240), nullable=False)
    answer1 = db.Column(db.String(240), nullable=False)
    option1 = db.Column(db.String(10), nullable=True)
    answer2 = db.Column(db.String(240), nullable=False)
    option2 = db.Column(db.String(10), nullable=True)
    answer3 = db.Column(db.String(240), nullable=False)
    option3 = db.Column(db.String(10), nullable=True)
    reason = db.Column(db.String(240), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


    def __repr__(self):
        return f'<User {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "question": self.question,
            "category": self.category,
            "logo": self.logo,
            "answer1": self.answer1,
            "option1": self.option1,
            "answer2": self.answer2,
            "option2": self.option2,
            "answer3": self.answer3,
            "option3": self.option3,
            "reason": self.reason
        }