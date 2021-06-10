from flask import Flask, render_template
app = Flask(__name__) 
@app.route('/')  
def boxes1():
    return render_template('index.html')

@app.route('/play/<int:num>') 
def boxes2():
    



if __name__=="__main__": 
    app.run(debug=True)   