from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models.users import User

class Recipe():
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.thirty_minutes = data['thirty_minutes']
        self.instructions = data['instructions']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.date_made = data['date_made']
        self.creator_id = None
        
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes JOIN users on users.id = recipes.creator_id"
        connection = connectToMySQL('recipes_schema')
        results = connection.query_db(query)
        recipes = []
        for result in results:
            recipe = cls(result)
            user_data = {
                'id' : result['id'],
                'first_name' : result['first_name'],
                'last_name' : result['last_name'],
                'email' : result['email'],
                'created_at' : result['users.created_at'],
                'updated_at' : result['users.updated_at'],
                'password' : result['password']
            }
            recipe.creator_id = user_data
            recipes.append(result)
        print('LOOK AT ME!!!!', recipes)
        return recipes

    @classmethod
    def get_by_name(cls,data):
        query = "SELECT * FROM recipes WHERE name = %(name)s;"
        result = connectToMySQL("recipes_schema").query_db(query,data)[0]
        # Didn't find a matching user
        if len(result) != 1:
            return False
        else:
            recipe = cls(result)
            user_data = {
                'id' : result['id'],
                'first_name' : result['first_name'],
                'last_name' : result['last_name'],
                'email' : result['email'],
                'created_at' : result['users.created_at'],
                'updated_at' : result['users.updated_at'],
                'password' : result['password']
            }
            recipe.creator = User(user_data)
        return recipe

    @classmethod
    def save(cls,data):
        query = "INSERT INTO recipes (name, description, instructions, date_made, thirty_minutes, creator_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(date_made)s, %(thirty_minutes)s, %(creator_id)s);"
        connection = connectToMySQL('recipes_schema')
        return connection.query_db(query, data)

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s"
        connection = connectToMySQL('recipes_schema')
        return cls(connection.query_db(query, data)[0])
    
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        connection = connectToMySQL('recipes_schema')
        results = connection.query_db(query, data)

        return results

    @classmethod
    def update_info_recipe(cls, data):
        query = 'UPDATE recipes SET name = %(name)s, thirty_minutes = %(thirty_minutes)s, instructions= %(instructions)s, description= %(description)s, date_made = %(date_made)s, creator_id = %(creator_id)s WHERE recipes.id = %(id)s;'

        connection = connectToMySQL('recipes_schema')
        results = connection.query_db(query, data)

        return results


    @staticmethod
    def validate_recipe(data):

        is_valid = True

        if len(data['name']) < 3 or len(data['name']) > 255:
            is_valid = False
            flash("Name must  be at least 3 characters and must be 255 characters or less.")

        # if Recipe.get_by_name(data):
        #     flash("Name already in use.")
        #     is_valid = False

        if len(data['description']) < 3 or len(data['description']) > 500:
            is_valid = False
            flash("Description must be at least 3 characters and must be 500 characters or less.")

        if len(data['instructions']) < 3 or len(data['instructions']) > 500:
            is_valid = False
            flash("Instruction must be at least 3 characters and must be 500 characters or less.")

        if 'date_made' not in data:
            is_valid = False
            flash('Please select a date')

        if 'thirty_minutes' not in data :
            is_valid = False
            flash('Please select 30 minutes option')

        print('THIS IS THE VALIDATION !!!!', is_valid)
        return is_valid