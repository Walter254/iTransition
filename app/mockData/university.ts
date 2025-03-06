
interface OrientationEvent {
  date: string;
  event: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface University {
  id: string;
  name: string;
  location: string;
  orientationSchedule: OrientationEvent[];
  contact: Contact;
  campusMapURL: string;
  timezone: string; 
  season: string;   
  packingList: string[]; 
}

export const university: University = {
  id: "univ-001",
  name: "Tufts University",
  location: "Boston, MA",
  orientationSchedule: [
    { date: "2025-08-20", event: "Orientation Day" },
    { date: "2025-08-21", event: "Campus Tour" }
  ],
  contact: {
    email: "info@tufts.edu",
    phone: "+1-617-627-3000"
  },
  campusMapURL: "https://campusmaps.tufts.edu/medford/",
  timezone: "America/New_York",
  season: "Fall",
  packingList: ["Passport", "Visa", "Travel Insurance", "Electrical Adapter", "Comfortable Walking Shoes", "Rain Jacket", "Umbrella", "Travel Pillow", "Earplugs", "Sleeping Bag", "Camping Tent", "First Aid Kit", "Sunscreen", "Insect Repellent", "Water Bottle", "Snacks", "Travel Journal", "Camera", "Charging Station", "Power Bank", "Headphones", "Laptop", "Tablet", "Phone Charger", "Travel Adapter", "Travel Pillow", "Earplugs", "Sleeping Bag", "Camping Tent", "First Aid Kit", "Sunscreen", "Insect Repellent", "Water Bottle", "Snacks", "Travel Journal", "Camera", "Charging Station", "Power Bank", "Headphones", "Laptop", "Tablet", "Phone Charger", "Travel Adapter"]
};

export default University;
