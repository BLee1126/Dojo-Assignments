from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Ninja():

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.location = data['language']
        self.location = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_ninja(data):
        is_valid = True

        if len(data['name']) == 0 or len(data['name']) > 45:
            is_valid = False
            flash("Name must not be empty and must be 45 characters or less.")

        if len(data['location']) == 0 or len(data['location']) > 45:
            is_valid = False
            flash("Location must not be empty and must be 45 characters or less.")

        if len(data['comment']) == 0:
            is_valid = False
            flash("Comment must not be empty.")


        return is_valid