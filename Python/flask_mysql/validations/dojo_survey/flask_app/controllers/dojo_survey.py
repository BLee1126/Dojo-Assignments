from flask_app import app
from flask import render_template,redirect,request

from flask_app.models.ninjas import Ninja
# from flask_app.models.dojos import Dojo


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def results():
    print('look at me!!!!!', request.form)
    data = {
    'name' : request.form['name'],
    'location' : request.form['location'],
    'comment' : request.form['comment']
    }
    results = Ninja.validate_ninja(data)
    if results:
        return render_template("results.html", data=data)
    else:
        return redirect('/')
    return render_template("results.html", data=data)