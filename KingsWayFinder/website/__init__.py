# code from 'from flask import Flask' to 'return app' is from https://www.youtube.com/watch?v=dam0GPOAvVI

# flask is a lightweight web framework
from flask import Flask

# This function runs in main.py and sets up the Flask app.
def create_app():
    app = Flask(__name__)
    # for encryption
    app.config['SECRET_KEY'] = 'f98d7210e7b419a43a2989c92b2d075841ef90c9b0e1a12e3f45812e96030c11'

    # Importing the blueprints from views, which makes the routes work.
    from .views import views
    app.register_blueprint(views, url_prefix='/')

    return app


