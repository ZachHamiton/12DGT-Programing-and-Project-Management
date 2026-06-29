# code from 'from flask import Blueprint, render_template' to '' is from https://www.youtube.com/watch?v=dam0GPOAvVI


from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/')
def home():
    return "<h1>testing<h1>"
