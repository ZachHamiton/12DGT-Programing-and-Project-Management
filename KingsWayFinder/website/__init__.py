# code from 'from flask import Flask' to 'return app' is from https://www.youtube.com/watch?v=dam0GPOAvVI

from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = '1234567'


    from .views import views
    app.register_blueprint(views, url_prefix = '/')
    return app

