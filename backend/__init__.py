from flask import Flask
from config import Config
from models import db
from routes import api
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.config["JWT_SECRET_KEY"] = "super-secret"
    jwt = JWTManager(app)
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.register_blueprint(api, url_prefix='/api')
    return app