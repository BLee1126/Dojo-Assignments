from flask_app import app
from flask_app.controllers import login
from flask_app.controllers import recipes

# app = Flask(__name__)
# app.secret_key = 'lol a secret'



if __name__ == "__main__":
    app.run(debug=True)