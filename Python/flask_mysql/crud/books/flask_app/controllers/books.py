from flask_app import app
from flask import render_template,redirect,request
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.authors import Author
from flask_app.models.books import Book


@app.route("/")
def index():

    return redirect('/authors')

@app.route('/authors', methods = ['GET','POST'])
def authors_page():
    authors = Author.get_all()
    return render_template('authors.html', authors=authors)

@app.route('/authors/create', methods = ['POST'])
def add_author():
    data = {
        'name' : request.form['name']
    }
    Author.create_author(data)

    return redirect('/')

@app.route('/books/add')
def books_page():
    books = Book.get_all()
    return render_template('books.html', books=books)

@app.route('/books/add/new', methods=['POST'])
def add_book():
    data = {
        'title': request.form['title'],
        'num_of_pages': request.form['num_of_pages']
    }

    Book.create_book(data)

    return redirect('/books/add')

@app.route('/authors/<int:author_id>/favorites', methods=['GET','POST'])
def authors_favorites(author_id):
    data = {
        'id': author_id
    }
    author = Author.get_one(data)
    books = Book.get_all()
    favorites = Author.get_favorites(data)
    return(render_template('authors_favorite.html', books=books, favorites=favorites, author=author))

@app.route('/authors/<int:author_id>/add_book', methods=['POST', 'GET'])
def authors_add(author_id):
    data = {
        'author_id': author_id,
        'book_id': request.form['book_id']
    }

    Author.add_one(data)

    return redirect(f'/authors/{author_id}/favorites')

@app.route('/books/<int:book_id>/favorites', methods=['GET','POST'])
def books_favorites(book_id):
    data = {
        'book_id': book_id
    }
    authors = Author.get_all()
    favorited = Book.get_favorited_by(data)
    book = Book.get_one(data)

    return render_template('books_favorite.html', authors=authors, favorited = favorited, book=book)

@app.route('/books/<int:book_id>/add_author', methods=['POST'])
def add_author_fave(book_id):
    data = {
        'book_id': book_id,
        'author_id': request.form['author_id']
    }

    Book.add_to_fave(data)

    return redirect(f'/books/{book_id}/favorites')
