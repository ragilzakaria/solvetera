from flask import Blueprint, request, jsonify
from app import db
from models import IonicLiquid


bp = Blueprint('routes', __name__)

@bp.route('/')
def home():
    return {"message": "Welcome to the Solvetera API!"}

@bp.route('/api/find-ionic-liquid', methods=['POST'])
def find_ionic_liquid():
    try:
        data = request.get_json()
        reaction_temperature = float(data.get("reaction_temperature"))
        polarity = float(data.get("polarity"))

        # Determine water solubility
        if 0 <= polarity <= 0.4:
            water_solubility = "hydrophobic"
        elif 0.5 <= polarity <= 1.7:
            water_solubility = "hydrophilic"
        else:
            return jsonify({"error": "Invalid polarity value. Must be between 0 and 1.7."}), 400

        # Query database
        matching_ionic_liquids = IonicLiquid.query.filter(
            IonicLiquid.melting_point < reaction_temperature,
            IonicLiquid.water_solubility == water_solubility
        ).all()

        results = [
            {
                "id": il.id,
                "name": il.name,
                "melting_point": il.melting_point,
                "water_solubility": il.water_solubility
            }
            for il in matching_ionic_liquids
        ]

        return jsonify({"suitable_ionic_liquids": results}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500