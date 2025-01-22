import csv
from app import app, db
from models import IonicLiquid

# File path to the CSV
csv_file = 'data.csv'

# Use application context for database operations
with app.app_context():
    # Open the CSV file and read it
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)

        # Iterate through rows in the CSV
        for row in reader:
            ionic_liquid = IonicLiquid(
                id=int(row['id']),
                name=row['name'],
                water_solubility=row['water_solubility'],
                melting_point=int(row['melting_point'])
            )
            db.session.add(ionic_liquid)

    # Commit the session to save the data to the database
    db.session.commit()

print("Data successfully added to the database!")