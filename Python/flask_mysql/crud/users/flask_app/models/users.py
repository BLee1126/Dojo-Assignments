# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user;"
        results = connectToMySQL('user').query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return user
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO user ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW() );"
        return connectToMySQL('user').query_db( query, data )

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id = %(user_id)s;"
        results = connectToMySQL('users').query_db(query, data)
        return results

    @classmethod
    def get_user(cls, data):
        query = "SELECT * FROM users WHERE users.id = %(id)s"
        connection = connectToMySQL('users')
        results = connection.query_db(query, data)
        user = results[0]
        print('this is user!!!!', user)
        return user

    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE users.id = %(id)s;"

        results = connectToMySQL('users').query_db(query, data)
        print('THIS IS RESULTS!!! LOOK AT ME !!!', results)
        
        return results




    
            
