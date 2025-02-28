// app/mockData/user.ts

import { Itinerary } from "./itineraries";
import { itineraries } from "./itineraries";
import { university } from "./university";
interface ScholarshipInfo {
  provider: string;
  amount: string;
}

interface University {
  id: string;
  name: string;
  location: string;
  campusMapURL: string;
}

interface Contact {
  email: string;
  phone: string;
}

export const user: {
  id: string;
  name: string;
  country: string;
  scholarshipInfo: ScholarshipInfo;
  university: University;
  contact: Contact;
  timezone: string;
  season: string;
  packingList: string[];
  itinerary: Itinerary[]; 
} = {
  id: "user-001",
  name: "Walter",
  country: "Kenya",
  scholarshipInfo: {
    provider: "XYZ Scholarship Foundation",
    amount: "Full Tuition"
  },
  university: {
    id: "univ-001",
    name: "Tufts University",
    location: "Boston, MA",
    campusMapURL: "https://campusmaps.tufts.edu/medford/"
  },
  contact: {
    email: "walter@example.com",
    phone: "+254700000000"
  },
  timezone: "Africa/Nairobi",
  season: "Spring",
  packingList: university.packingList,              
  itinerary: itineraries
};