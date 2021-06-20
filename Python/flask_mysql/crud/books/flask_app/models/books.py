from flask_app.config.mysqlconnection import connectToMySQL
class Book():

    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        connection = connectToMySQL('books')
        results = connection.query_db(query)
        books = []
        for result in results:
            books.append(result)
        return books

    @classmethod
    def create_book(cls, data ):
        query = 'INSERT INTO books(title, num_of_pages, created_at, updated_at) VALUES(%(title)s, %(num_of_pages)s, NOW(), NOW());'
        
        return connectToMySQL('books').query_db( query, data )

    @classmethod
    def get_favorited_by(cls, data):
        query = 'SELECT authors.name FROM favorites JOIN authors ON authors.id = author_id WHERE book_id = %(book_id)s'

        connection = connectToMySQL('books')
        results = connection.query_db(query, data)
        authors = []
        for result in results:
            authors.append(result)

        return authors

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM books WHERE id = %(book_id)s'

        connection = connectToMySQL('books')
        results = connection.query_db(query, data)[0]

        return results


    @classmethod
    def add_to_fave(cls, data):
        query = 'INSERT INTO favorites (book_id, author_id) VALUES (%(book_id)s, %(author_id)s);'
        
        connection = connectToMySQL('books')
        results = connection.query_db(query, data)

        return results