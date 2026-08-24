# code from 'from flask import Flask' to 'return app' is from https://www.youtube.com/watch?v=dam0GPOAvVI

from flask import Flask
# from os import path



# This function runs in main.py and sets up the Flask app.
def create_app():
    app = Flask(__name__)
    # for encryption
    app.config['SECRET_KEY'] = '07509182374'

    # Importing the blueprints from views, which makes the routes work.
    from .views import views
    app.register_blueprint(views, url_prefix='/')

    return app


