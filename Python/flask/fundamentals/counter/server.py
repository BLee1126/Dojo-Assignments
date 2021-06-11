from flask import Flask, render_template, redirect, session, request

app = Flask(__name__)
app.secret_key = 'lol a secret'

@app.route('/')
def index():
    if not 'ticker' in session:
        session['ticker'] = 0
    if not 'counter' in session:
        session['counter'] = 0
    session['counter'] += 1
    session['ticker'] += 1
    return render_template('index.html', count=session['counter'], ticker = session['ticker'])

@app.route('/add_counter', methods=['POST'])
def add():
    session['counter'] += int(request.form['num'])-1
    return redirect('/')

@app.route('/add_2', methods=['POST'])
def add2():
    session['counter'] += 1
    return redirect('/')

@app.route('/destroy_session', methods=['POST'])
def reset_counter():
    session.clear()
    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)

# import base64
# base.64.urlsafe_b64decode('cookie name===')