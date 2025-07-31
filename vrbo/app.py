from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Load properties from db.json
def load_properties():
    with open('db.json', 'r') as f:
        return json.load(f)['properties']

properties = load_properties()

@app.route('/api/book', methods=['POST'])
def book_property():
    data = request.get_json()
    property_id = data.get('property_id')
    check_in_str = data.get('check_in')
    check_out_str = data.get('check_out')
    guests = data.get('guests')

    if not all([property_id, check_in_str, check_out_str, guests]):
        return jsonify({'error': 'Missing booking details'}), 400

    try:
        check_in = datetime.strptime(check_in_str, '%Y-%m-%d')
        check_out = datetime.strptime(check_out_str, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD'}), 400

    if check_in >= check_out:
        return jsonify({'error': 'Check-out date must be after check-in date'}), 400

    # Find the property
    property_found = next((p for p in properties if p['id'] == property_id), None)
    if not property_found:
        return jsonify({'error': 'Property not found'}), 404

    nights = (check_out - check_in).days
    total_price = property_found['price'] * nights

    booking_details = {
        'property_id': property_id,
        'property_title': property_found['title'],
        'property_location': property_found['location'],
        'check_in': check_in_str,
        'check_out': check_out_str,
        'nights': nights,
        'guests': guests,
        'price_per_night': property_found['price'],
        'total_price': total_price
    }

    return jsonify({'message': 'Booking successful', 'booking_details': booking_details}), 200

if __name__ == '__main__':
    app.run(debug=True)
