from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def results():
    print(request.form)
    tname = request.form['name']
    tloc = request.form['location']
    tlang = request.form['language']
    tcom = request.form['comment']
    tprog = request.form['program']
    if 'pet1' in request.form:
        tpet1 = request.form['pet1']
    elif 'pet1' not in request.form:
        tpet1 = ''
    if 'pet2' in request.form:
        tpet2 = request.form['pet2']
    elif 'pet2' not in request.form:
        tpet2 = ''    
    if 'pet3' in request.form:
        tpet3 = request.form['pet3']
    elif 'pet3' not in request.form:
        tpet3 = ''

    return render_template("results.html", tname = tname, tloc = tloc, tlang = tlang, tcom=tcom, tprog = tprog, tpet1=tpet1, tpet2=tpet2, tpet3=tpet3)









if __name__ == "__main__":
    app.run(debug=True)
