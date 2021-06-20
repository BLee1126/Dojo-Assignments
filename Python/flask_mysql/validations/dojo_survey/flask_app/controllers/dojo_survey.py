from flask_app import app
from flask import render_template,redirect,request

# from flask_app.models.ninjas import Ninja
# from flask_app.models.dojos import Dojo


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def results():
    print(request.form)
    data = {
    'name' : request.form['name'],
    'location' : request.form['location'],
    'language' : request.form['language'],
    'comment' : request.form['comment']
    }



    # return render_template("results.html", tname = tname, tloc = tloc, tlang = tlang, tcom=tcom, tprog = tprog, tpet1=tpet1, tpet2=tpet2, tpet3=tpet3)
    return render_template("results.html", data=data)