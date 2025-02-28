# Itinerary Schema

**Fields:**
- **id**: Unique itinerary identifier (string)
- **userId**: Reference to the user (string)
- **tripName**: Name of the trip (string)
- **destination**: Destination location (string)
- **startDate**: Start date of the trip (date/string)
- **endDate**: End date of the trip (date/string)
- **details**: (Optional) Additional itinerary details:
  - **flightInfo**: Object with flight details (e.g., airline, flight number)
  - **reminders**: Array of reminder strings
