from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure the app
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///solvetera.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "default-secret-key")

# Initialize database and migrations
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import routes AFTER app initialization
from routes import *

@app.route('/')
def home():
    return {"message": "Welcome to the Solvetera API!"}

if __name__ == "__main__":
    app.run(debug=True)