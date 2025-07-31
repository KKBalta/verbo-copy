from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from datetime import datetime, timedelta
import os

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

DB_FILE = '/Users/korkutkaanbalta/Documents/verbo-copy/vrbo/db.json'
BOOKINGS_FILE = '/Users/korkutkaanbalta/Documents/verbo-copy/vrbo/backend/bookings.json'

properties = []

# Helper to load properties from db.json
def load_properties():
    global properties
    with open(DB_FILE, 'r') as f:
        properties = json.load(f)['properties']

# Helper to load bookings from bookings.json
def load_bookings():
    if not os.path.exists(BOOKINGS_FILE):
        return []
    with open(BOOKINGS_FILE, 'r') as f:
        return json.load(f)

# Helper to save bookings to bookings.json
def save_bookings(bookings_data):
    with open(BOOKINGS_FILE, 'w') as f:
        json.dump(bookings_data, f, indent=4)

# Helper to check property availability
def is_property_available(property_id, check_in, check_out, existing_bookings):
    for booking in existing_bookings:
        if booking['property_id'] == property_id:
            booked_check_in = datetime.strptime(booking['check_in'], '%Y-%m-%d')
            booked_check_out = datetime.strptime(booking['check_out'], '%Y-%m-%d')

            # Check for overlap
            if not (check_out <= booked_check_in or check_in >= booked_check_out):
                return False # Overlap found, property is not available
    return True

load_properties()

@app.route('/api/properties', methods=['GET'])
def get_properties():
    location_query = request.args.get('location', '').lower()
    check_in_str = request.args.get('check_in')
    check_out_str = request.args.get('check_out')

    filtered_properties = properties

    # Filter by location
    if location_query:
        filtered_properties = [p for p in filtered_properties if location_query in p['location'].lower()]

    # Filter by availability if dates are provided
    if check_in_str and check_out_str:
        try:
            check_in = datetime.strptime(check_in_str, '%Y-%m-%d')
            check_out = datetime.strptime(check_out_str, '%Y-%m-%d')
        except ValueError:
            return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD.'}), 400

        if check_in >= check_out:
            return jsonify({'error': 'Check-out date must be after check-in date.'}), 400

        current_bookings = load_bookings()
        available_properties = []
        for prop in filtered_properties:
            if is_property_available(prop['id'], check_in, check_out, current_bookings):
                available_properties.append(prop)
        filtered_properties = available_properties

    return jsonify(filtered_properties)

@app.route('/api/book', methods=['POST'])
def book_property():
    data = request.get_json()
    property_id = data.get('property_id')
    check_in_str = data.get('check_in')
    check_out_str = data.get('check_out')
    guests = data.get('guests')

    if not all([property_id, check_in_str, check_out_str, guests]):
        return jsonify({'error': 'Missing booking information'}), 400

    property_found = next((p for p in properties if p['id'] == property_id), None)
    if not property_found:
        return jsonify({'error': 'Property not found'}), 404

    try:
        check_in = datetime.strptime(check_in_str, '%Y-%m-%d')
        check_out = datetime.strptime(check_out_str, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Invalid date format. Use YYYY-MM-DD.'}), 400

    if check_in >= check_out:
        return jsonify({'error': 'Check-out date must be after check-in date.'}), 400

    current_bookings = load_bookings()
    if not is_property_available(property_id, check_in, check_out, current_bookings):
        return jsonify({'error': 'Property is not available for the selected dates.'}), 409 # Conflict

    nights = (check_out - check_in).days
    total_price = property_found['price'] * nights

    # Generate a unique booking ID
    new_booking_id = 1
    if current_bookings:
        new_booking_id = max([b['booking_id'] for b in current_bookings]) + 1

    booking = {
        'booking_id': new_booking_id,
        'property_id': property_id,
        'property_title': property_found['title'],
        'location': property_found['location'],
        'check_in': check_in_str,
        'check_out': check_out_str,
        'guests': guests,
        'nights': nights,
        'total_price': total_price,
        'booking_date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    current_bookings.append(booking)
    save_bookings(current_bookings)

    return jsonify({
        'message': 'Booking successful!',
        'booking_details': booking
    }), 200

@app.route('/api/bookings', methods=['GET'])
def get_all_bookings():
    return jsonify(load_bookings())

if __name__ == '__main__':
    app.run(debug=True, port=5000)
