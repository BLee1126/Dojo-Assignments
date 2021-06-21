from types import MethodDescriptorType
from flask_app import app
from flask import render_template,redirect,request

from flask_app.models.users import User

@app.route("/")
def index():

    return render_template('index.html')

@app.route('/users/add', methods = ['POST', 'GET'])
def adding():
    data = {
        'email': request.form['email']
    }

    results = User.validate_user(data)

    if results:
        User.add_email(data)
        return render_template('success.html', data=data)

    else:
        return redirect('/')

