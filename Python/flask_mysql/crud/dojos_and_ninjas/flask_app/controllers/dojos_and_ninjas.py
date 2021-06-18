from flask_app import app
from flask import render_template,redirect,request

from flask_app.models.ninjas import Ninja
from flask_app.models.dojos import Dojo


@app.route("/")
def index():

    return redirect('/dojos')

@app.route("/dojos")
def Dojos():
    dojos = Dojo.get_all()
    return render_template('dojos.html', dojos = dojos)



@app.route("/dojos/create", methods= ['POST', 'GET'])
def create():
    data = {
        'name': request.form['name']
    }
    id = Dojo.create_dojo(data)
    print(id)
    return redirect('/')


@app.route('/ninja/add')
def add_form():
    dojos = Dojo.get_all()
    return render_template('add_ninja.html', dojos=dojos)

@app.route('/ninja/create', methods=['POST', 'GET'])
def create_ninja():

    data = {
        'dojo_id': request.form['dojo_id'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'age': request.form['age']
    }
    Ninja.create(data)
    dojo_id = request.form['dojo_id']
    return redirect(f'/dojos/{dojo_id}/show')

@app.route('/dojos/<int:dojo_id>/show')
def ninjas_in_dojo(dojo_id):
    data = {
        "id": dojo_id
    }
    dojo = Dojo.ninjas_in(data)
    dojo_name = Dojo.get_one(data)

    return render_template('dojo_ninjas.html', dojo=dojo, dojo_name=dojo_name)

