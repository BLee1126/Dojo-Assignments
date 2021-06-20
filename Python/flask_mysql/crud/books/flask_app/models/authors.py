from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.books import Book

class Author():

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        connection = connectToMySQL('books')
        results = connection.query_db(query)
        authors = []
        for result in results:
            authors.append(cls(result))
        return authors

    @classmethod
    def create_author(cls, data ):
        query = 'INSERT INTO authors(name, created_at, updated_at) VALUES(%(name)s, NOW(), NOW());'
        
        return connectToMySQL('books').query_db( query, data )

    @classmethod
    def get_favorites(cls, data):
        query = 'SELECT books.id AS book_id, title, num_of_pages from authors JOIN favorites ON authors.id = favorites.author_id  JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s'

        connection = connectToMySQL('books')
        results = connection.query_db(query, data)
        books = []
        for result in results:
            books.append((result))

        return books

    @classmethod
    def get_one(cls, data):
        query = 'SELECT * FROM authors WHERE id = %(id)s'

        connection = connectToMySQL('books')
        results = connection.query_db(query, data)[0]

        return results

    @classmethod
    def add_one(cls, data):
        query = "INSERT INTO favorites(author_id, book_id) VALUES(%(author_id)s, %(book_id)s);"

        return connectToMySQL('books').query_db( query, data )
