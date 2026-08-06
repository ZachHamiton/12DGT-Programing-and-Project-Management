# code from 'from flask import Flask' to 'return app' is from https://www.youtube.com/watch?v=dam0GPOAvVI

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()

DB_NAME = "database.db" #MIGHT NEED TO CHANGE





# this function runs in the main.py and sets up the flask app
def create_app():
    app = Flask(__name__)
    # for encription
    app.config['SECRET_KEY'] = '1234567'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)

    # importing the blueprints from views which make the route work
    from .views import views
    app.register_blueprint(views, url_prefix = '/')

    # makes the models file run and defines the classes before it initializes the database
    from .models import Classes
    create_database(app)

    return app


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        with app.app_context():
            db.create_all()
