from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 
from flask_app.models.users import User

@app.route("/")
def index():

    return render_template('index.html')

@app.route('/user/register', methods=['POST', 'GET'])
def register():
    # validate the form here ...
    if User.validate_register(request.form):
        # create the hash
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        print('LOOK AT ME!!!!', pw_hash)
        pets = []
        
        if 'pet1' in request.form:
            pets.append(request.form['pet1'])
        else:
            pass
        if 'pet2' in request.form:
            pets.append(request.form['pet2'])
        else:
            pass
        if 'pet3' in request.form:
            pets.append(request.form['pet3'])
        else:
            pass
        # put the pw_hash into the data dictionary
        modified_data = {
            "first_name": request.form['first_name'],
            "last_name": request.form['last_name'],
            "email": request.form['email'],
            'birthday': request.form['birthday'],
            'pet_name': request.form['pet_name'],
            "password" : pw_hash,
            'program': request.form['program'],
            'pets': pets

        }
        print (modified_data)
        # Call the save @classmethod on User
        user_id = User.save(modified_data)
        # store user id into session
        session['user_id'] = user_id
        print('YOU ARE NOT A FAILURE')
        return redirect("/")

    print('YOU ARE A FAILURE')
    return redirect('/')

@app.route('/login', methods=['POST', 'GET'])
def login():
    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    user_in_db = User.get_by_email(data)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid Email/Password")
        return redirect('/')
    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    session['first_name'] = user_in_db.first_name
    session['last_name'] = user_in_db.last_name
    session['email'] = user_in_db.email
    session['pet_name'] = user_in_db.pet_name
    session['birthday'] = user_in_db.birthday
    session['pets'] = user_in_db.pets
    session['program'] = user_in_db.program
    # never render on a post!!!
    return redirect("/success")

@app.route ('/success', methods=['GET'])
def dashboard():
    if not 'user_id' in session:
        flash('Log in first!')
        return redirect('/')
    user = session
    print(session['pets'])
    return render_template('success.html', user=user)

@app.route('/reset', methods=['POST'])
def clr_session():
    session.clear()
    return redirect('/')
    # if is_valid
    #     has_password = bcrypt.generate_password_has(request.form['password'])
    #     modified_data= {
    #         'nickname': request.form['nickname'],
    #         'email': request.form['email'],
    #         'password': hashed_password
    #     }
    #     User.create_user(modified_data)
    #     flash('Account has been created, please log in')

    # return redirect