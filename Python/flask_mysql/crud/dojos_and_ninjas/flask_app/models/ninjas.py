# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Ninja:
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
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('ninjas_and_dojos').query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append( cls(ninja) )
        return ninjas

    @classmethod
    def create(cls, data ):
        query = "INSERT INTO ninjas(first_name, last_name, age, created_at, updated_at, dojo_id ) VALUES(%(first_name)s, %(last_name)s, %(age)s, NOW(), NOW(), %(dojo_id)s)"

        return connectToMySQL('dojos_and_ninjas').query_db( query, data )






    
            
