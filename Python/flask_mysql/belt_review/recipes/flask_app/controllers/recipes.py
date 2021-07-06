from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 
from flask_app.models.users import User
from flask_app.models.recipe import Recipe

@app.route('/recipes/new')
def new_recipe():
    if 'user_id' not in session:
        flash('Please Log in first')
        return redirect('/')
    print(session)
    return render_template('new_recipe.html')

@app.route('/recipes/create', methods=['POST'])
def save_recipe():
    
    if Recipe.validate_recipe(request.form):
        data = {
            'name': request.form['name'],
            'description': request.form['description'],
            'instructions': request.form['instructions'],
            'thirty_minutes': request.form['thirty_minutes'],
            'date_made': request.form['date_made'],
            'creator_id': session['user_id']
        }
        print('WE GOT PAST VALIDATION!!!!', data)
        Recipe.save(data)
    return redirect('/recipes/new')

@app.route('/recipes/<int:recipe_id>')
def show_recipe(recipe_id):
    if 'user_id' not in session:
        flash('Please Log in first')
        return redirect('/')
    data = {
        'id': recipe_id
    }

    recipe = Recipe.get_by_id(data)


    return render_template('show.html', recipe=recipe)

@app.route('/recipes/delete/<int:recipe_id>')
def delete_recipe(recipe_id):
    
    data = {
        'id': recipe_id
    }
    recipe = Recipe.get_by_id(data)
    if session['user_id'] == recipe.creator_id:
        Recipe.destroy(data)
    return redirect('/dashboard')

@app.route('/recipes/edit/<int:recipe_id>')
def edit_recipe(recipe_id):
    if 'user_id' not in session:
        flash('Please Log in first')
        return redirect('/')
    data = {
        'id': recipe_id
    }
    recipe = Recipe.get_by_id(data)
    return render_template('edit.html', recipe=recipe)

@app.route('/recipes/update/<int:recipe_id>', methods = ['POST'])
def update_recipe(recipe_id):
    if 'user_id' not in session:
        flash('Please Log in first')
        return redirect('/')
    if Recipe.validate_recipe(request.form):
        data = {
            'name': request.form['name'],
            'description': request.form['description'],
            'instructions': request.form['instructions'],
            'thirty_minutes': request.form['thirty_minutes'],
            'date_made': request.form['date_made'],
            'creator_id': session['user_id'],
            'id': recipe_id
        }
        Recipe.update_info_recipe(data)
        return redirect(f'/recipes/{recipe_id}')

    return redirect(f'/recipes/update/{recipe_id}')
    

