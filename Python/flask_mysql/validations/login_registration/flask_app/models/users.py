from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


import re	# the regex module
# create a regular expression object that we'll use later   



class User():
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.birthday = data['birthday']
        self.pet_name = data['pet_name']
        self.password = data['password']
        self.program = data['program']
        self.pets = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        connection = connectToMySQL('login_schema')
        results = connection.query_db(query)
        users = []
        for result in results:
            users.append(cls(result))
        print('LOOK AT ME!!!!', users)
        return users
    
    @classmethod
    def check_in_db(cls, data):
        query = 'SELECT * FROM users WHERE email = %(email)s'
        connection = connectToMySQL('login_schema')
        results = connection.query_db(query, data)
        return results

    @staticmethod
    def validate_register(data):
        is_valid = True
        email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        password_regex = re.compile(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")

        if len(data['first_name']) < 2 or len(data['first_name']) > 45:
            is_valid = False
            flash("First name must  be at least 2 characters and must be 45 characters or less.")

        if len(data['last_name']) < 2 or len(data ['last_name']) > 45:
            is_valid = False
            flash("Last name must  be at least 2 characters and must be 45 characters or less..")

        if not email_regex.match(data['email']): 
            flash('Emails require proper alphanumerical characters. IE: email@email.com')
            is_valid = False

        if  len(User.check_in_db(data)) != 0:
            flash("Email already used!")
            is_valid = False

        if not password_regex.match(data['password']):
            flash('Passwords require at least one uppercase letter and a number.')
            is_valid = False

        if len(data['password']) < 8 or len(data['password']) > 50:
            is_valid = False
            flash("Password needs to be at least 8 characters but not more than 50")

        if data['password'] != data['confirm_password']:
            is_valid = False
            flash("The password and confirmation do not match!")

        return is_valid

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password, birthday, pet_name, pets, program, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(birthday)s, %(pet_name)s, %(pets)s, %(program)s, NOW(), NOW());"
        connection = connectToMySQL('login_schema')
        connection.query_db(query, data)


    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("login_schema").query_db(query,data)
        # Didn't find a matching user
        if len(result) != 1:
            return False
        return cls(result[0])