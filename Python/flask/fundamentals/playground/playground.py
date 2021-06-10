from flask import Flask, render_template
app = Flask(__name__) 
@app.route('/')  
def boxes1():
    return render_template('index.html', times=3, color='lightskyblue')

@app.route('/play')  
def boxes1():
    return render_template('index.html', times=3, color='lightskyblue')

@app.route('/play/<int:x>') 
def boxes2(x):
    return render_template("index.html", times = x, color='lightskyblue' )

@app.route('/play/<int:x>/<string:color>')
def boxes3(x, color):
    return render_template("index.html", times = x, color=color )

if __name__=="__main__": 
    app.run(debug=True)   