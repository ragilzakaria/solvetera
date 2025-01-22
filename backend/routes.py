from flask import request, jsonify
from app import app, db
from models import IonicLiquid

@app.route('/api/find-ionic-liquid', methods=['POST'])
def find_ionic_liquid():
    # Get user input from JSON body
    data = request.get_json()
    reaction_type = data.get('reaction_type')  # Choice (e.g., addition, elimination)
    reactants = data.get('reactants')  # String
    catalyst = data.get('catalyst')  # Optional string
    reaction_temperature = data.get('reaction_temperature')  # Number
    pressure = data.get('pressure')  # Number
    polarity = data.get('polarity')  # Number

    # Determine water solubility based on polarity
    if 0 <= polarity <= 0.4:
        water_solubility = "hydrophobic"
    elif 0.5 <= polarity <= 1.7:
        water_solubility = "hydrophilic"
    else:
        return jsonify({"error": "Invalid polarity value. Must be between 0 and 1.7."}), 400

    # Query ionic liquids based on melting point and water solubility
    ionic_liquids = IonicLiquid.query.filter(
        IonicLiquid.melting_point < reaction_temperature,
        IonicLiquid.water_solubility == water_solubility
    ).all()

    # Format results
    results = [
        {
            "id": il.id,
            "name": il.name,
            "melting_point": il.melting_point,
            "water_solubility": il.water_solubility
        }
        for il in ionic_liquids
    ]

    return jsonify({
        "reaction_type": reaction_type,
        "reactants": reactants,
        "catalyst": catalyst,
        "reaction_temperature": reaction_temperature,
        "pressure": pressure,
        "polarity": polarity,
        "suitable_ionic_liquids": results
    })