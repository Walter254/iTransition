import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import CreateItinerary from "../components/CreateItinerary";
import { Itinerary } from "../mockData/itineraries";  
import { user } from "../mockData/user";
import styles from "../../styles/ItineraryPageStyles"; // Import the styles

export default function ItineraryPage() {
  const [isCreating, setIsCreating] = useState(false); // State to manage visibility of Create Itinerary
  const [itineraries, setItineraries] = useState<Itinerary[]>([]); // State to manage itineraries

  const handleCreateToggle = () => {
    setIsCreating(!isCreating); // Toggle the create itinerary form
  };

  // Function to handle adding a new itinerary
  const handleAddItinerary = (newItinerary: Itinerary) => {
    setItineraries([...itineraries, newItinerary]); // Update itineraries state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Itineraries</Text>
      <TouchableOpacity style={styles.createButton} onPress={handleCreateToggle}>
        <Text style={styles.buttonText}>{isCreating ? "Cancel" : "Create New Itinerary"}</Text>
      </TouchableOpacity>
      
      {isCreating ? (
        <CreateItinerary />
      ) : (
        <View style={styles.emptyState}>
          {user.itinerary.length > 0 ? (
            user.itinerary.map((itinerary, index) => (
              <View key={index} style={styles.itineraryItem}>
                <Text style={styles.tripName}>{itinerary.tripName}</Text>
                <Text style={styles.destination}>{itinerary.destination}</Text>
                <Text style={styles.dates}>{`From: ${itinerary.startDate} To: ${itinerary.endDate}`}</Text>
                <Text style={styles.flightInfo}>{`Airline: ${itinerary.details.flightInfo.airline}, Flight Number: ${itinerary.details.flightInfo.flightNumber}`}</Text>
                <Text style={styles.remindersTitle}>Reminders:</Text>
                {itinerary.details.reminders.map((reminder, reminderIndex) => (
                  <Text key={reminderIndex} style={styles.reminder}>{`- ${reminder}`}</Text>
                ))}
              </View>
            ))
          ) : (
            <Text>No itineraries yet. Create your first trip plan!</Text>
          )}
        </View>
      )}
    </View>
  );
} 