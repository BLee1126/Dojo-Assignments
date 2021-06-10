from flask import Flask 
app = Flask(__name__) 
@app.route('/')   
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<name>')
def hi_name(name):
    return("Hi " + str(name))

@app.route('/repeat/<num>/<word>/')

def repeat_hi(word, num):
    return f'{str(word)}\n'*int(num)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):

    return 'No responses! Please try again.\n'


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
# import statements, maybe some other routes
# app.run(debug=True) should be the very last statement! 


    app.run(debug=True)   