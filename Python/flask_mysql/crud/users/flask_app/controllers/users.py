from flask_app import app
from flask import render_template,redirect,request

from flask_app.models.users import User


@app.route("/")
def index():
    users = User.get_all()

    return render_template('index.html', users = users)

@app.route("/create", methods= ['POST', 'GET'])
def create():

    return render_template('create.html' )

@app.route("/add", methods= ['POST', 'GET'])
def add():
    User.save(request.form)
    return redirect('/')


@app.route('/users/<int:user_id>/destroy', methods = ['GET', 'POST'])
def destroy(user_id):
    # user_id = user_id
    # print('this is user_id!!!!' , user_id)
    data = {
        'user_id': user_id
    }
    print('This is data!!!', data)
    User.delete(data)
    return redirect('/')

@app.route('/show_user/<int:user_id>')
def show(user_id):
    data = {
        "id": user_id
    }
    user = User.get_user(data)
    return render_template('show.html', user=user)

@app.route('/users/<int:user_id>/edit', methods=['Get', 'POST'])
def edit(user_id):
    data = {
        "id": user_id,
    }
    user = User.get_user(data)
    return render_template('/edit.html', user=user)

@app.route('/users/updating/<int:user_id>', methods=['POST'])
def update(user_id):
    data = {
        "id": user_id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
    }
    User.update_user(data)

    return redirect(f'/show_user/{user_id}')
