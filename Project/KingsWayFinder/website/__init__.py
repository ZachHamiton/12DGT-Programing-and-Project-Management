# code from 'from flask import Flask' to 'return app' is from https://www.youtube.com/watch?v=dam0GPOAvVI

from flask import Flask



# this function runs in the main.py and sets up the flask app
def create_app():
    app = Flask(__name__)
    # for encription
    app.config['SECRET_KEY'] = '1234567'

    # importing the blueprints from views which make the route work
    from .views import views
    app.register_blueprint(views, url_prefix = '/')
    return app

