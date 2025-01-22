from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///solvetera.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

db = SQLAlchemy(app)

# Register routes
from routes import bp
app.register_blueprint(bp)

if __name__ == '__main__':
    app.run(debug=True)