from flask_app import app
from flask import render_template,redirect,request
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.authors import Author
from flask_app.models.books import Book


@app.route("/")
def index():

    return redirect('/authors')

@app.route('/authors')