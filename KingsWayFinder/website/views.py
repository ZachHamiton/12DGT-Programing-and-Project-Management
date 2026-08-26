# code from 'from flask import Blueprint, render_template' to 'return render_template('base.html')' is from https://www.youtube.com/watch?v=dam0GPOAvVI
from flask import Blueprint, render_template

views = Blueprint('views', __name__)


# Sets up the route of the homepage/ default page
# When / is called in the address bar it renders the template defined
@views.route('/')
def home():
    return render_template('map.html')
