from app import db

class IonicLiquid(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    water_solubility = db.Column(db.String(64), nullable=False)  # hydrophilic or hydrophobic
    melting_point = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<IonicLiquid {self.name}>"