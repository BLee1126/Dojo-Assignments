from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)  
app.secret_key = '4984we654asdf65a4s4gt86agdsafa' 



@app.route('/', methods = ['GET'])         
def index():
    if 'strawberry'not in session:
        session['strawberry'] = 0
    else:
        pass
    if 'raspberry'not in session:
        session['raspberry'] = 0
    else:
        pass
    if 'apple' not in session:
        session['apple'] = 0
    else:
        pass
    if 'blackberry' not in session:
        session['blackberry'] = 0
    else:
        pass
    if 'first_name' not in session:
        session['first_name'] = ''
    else:
        pass
    if 'last_name' not in session:
        session['last_name'] = ''
    else:
        pass
    if 'student_id' not in session:
        session['student_id'] = ''
    else:
        pass
    return render_template("index.html", first_name=session['first_name'], last_name = session['last_name'], student_id = session['student_id'])

@app.route('/checkout', methods=['POST'])         
def checkout():

    for key in request.form:
        if key in ['strawberry','raspberry','blackberry','apple']:
            session[key] += int(request.form[key])
        elif key in ['first_name','last_name','student_id']:
            session[key] = request.form[key]

    for key in request.form:
        session['sum'] = 0
        if key in ['strawberry','raspberry','blackberry','apple']:
            session['sum'] += int(request.form[key])
        elif key in ['first_name','last_name','student_id']:
            pass

    print(f'Charging {session["first_name"]} for {session["sum"]} fruits')

    return render_template("checkout.html", first_name=session['first_name'], last_name = session['last_name'], student_id = session['student_id'], strawberry = session['strawberry'], raspberry = session['raspberry'], blackberry = session['blackberry'], apple = session['apple'] )

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    