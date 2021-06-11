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

    return render_template("results.html", tname = tname, tloc = tloc, tlang = tlang, tcom=tcom)









if __name__ == "__main__":
    app.run(debug=True)
