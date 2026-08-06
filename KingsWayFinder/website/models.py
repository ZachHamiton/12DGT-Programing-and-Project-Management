from . import db


from flask_login import UserMixin # PROABLY WON'T NEED


class Classes(db.Model, UserMixin): # MIGHT NOT NEED UserMixin
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(150), unique = True)
    building = db.Column(db.String(150))
    x_pos = db.Column(db.Float)
    y_pos = db.Column(db.Float)



    



