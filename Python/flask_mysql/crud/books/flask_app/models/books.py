from flask_app.config.mysqlconnection import connectToMySQL
class Book():

    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.pages = data['pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        connection = connectToMySQL('books')
        results = connection.query_db(query)
        dojos = []
        for result in results:
            dojos.append(cls(result))
        return dojos

    @classmethod
    def create_dojo(cls, data ):
        query = 'INSERT INTO dojos(name, created_at, updated_at) VALUES(%(name)s, NOW(), NOW(),);'
        
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )