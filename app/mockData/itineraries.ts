export interface Itinerary {
  id: string;
  userId: string;
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  details: {
    flightInfo: {
      airline: string;
      flightNumber: string;
      departureTime: string;
    };
    reminders: string[];
  };
}

export const itineraries: Itinerary[] = [
  {
    id: "itinerary-001",
    userId: "user-001",
    tripName: "Tufts University Journey",
    destination: "Boston, MA, USA",
    startDate: "2025-08-15",
    endDate: "2025-12-15",
    details: {
      flightInfo: {
        airline: "Example Air",
        flightNumber: "EX123",
        departureTime: "2025-08-15T08:00:00Z",
      },
      reminders: [
        "Prepare passport and visa documents",
        "Book airport transfer",
        "Pre-order bedding for dorm",
      ],
    },
  },
];

export default Itinerary;
