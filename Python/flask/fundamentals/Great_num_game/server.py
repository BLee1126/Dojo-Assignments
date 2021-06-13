from flask import Flask, render_template, redirect, request, session 
import random
app = Flask(__name__)
app.secret_key = '4984we654asdf65a4s4gt86agdsafa' 

@app.route('/', methods=['POST', 'GET'])
def start():
    if 'color' not in session:
        session['color'] = 'blue'
    else: 
        pass    
    if 'counter' not in session:
        session['counter'] = 0
    elif session['counter'] == 5:
        session['response'] = 'You Lose'
    elif 'counter' in session:
        session['counter'] += 1
    else:
        pass
    if 'answer' not in session:
        session['answer'] = random.randint(1,100)
    else: 
        pass    
    if 'response' not in session:
        session['response'] = 'Make a Guess!'
    else:
        pass
    print(session['answer'])
    return render_template('/index.html', response=session['response'], counter = session['counter'], color = session['color'])

@app.route('/calculate', methods=['POST'])
def calculate():

    session['guess_num'] = request.form['guess_num']

    if int(session['guess_num']) == session['answer']:
        session['response']='You got it right!'
        session['color'] = 'green'
        return redirect('/')

    elif int(session['guess_num']) < session['answer']:
        session['response']='Guess Higher!'
        session['color'] = 'red'
        return redirect('/', )
        
    elif int(session['guess_num']) > session['answer']:
        session['response']='Guess Lower!'
        session['color'] = 'red'
        return redirect('/', )

    return redirect('/', response='Logic Broken')

@app.route('/reset', methods = ['POST'])
def reset():
    session.clear()

    return redirect('/')




















if __name__ =="__main__":
    app.run(debug=True)