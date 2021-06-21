from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    def add_email(data):
        query = 'INSERT INTO emails (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW())'

        return connectToMySQL('email_validation_schema').query_db( query, data )

    def get_all():
        query = "SELECT * FROM emails;"
        connection = connectToMySQL('emails_validation_schema')
        results = connection.query_db(query)
        emails = []
        for result in results:
            emails.append(cls(result))
        return emails

    @staticmethod
    def validate_user( data ):
        is_valid = True
        email = data['email']
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            flash('Emails require proper alphanumerical characters. IE: email@email.com')
            is_valid = False
        return is_valid