import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router"; // not used yet

import CreateItinerary from "../../components/CreateItinerary";
import { Itinerary } from "../../mockData/itineraries";
import { user } from "../../mockData/user";
import itineraryPageStyles from "../../styles/ItineraryPageStyles";

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
    <View style={itineraryPageStyles.container}>
      <Text style={itineraryPageStyles.title}>My Itineraries</Text>
      <TouchableOpacity
        style={itineraryPageStyles.createButton}
        onPress={handleCreateToggle}
      >
        <Text style={itineraryPageStyles.buttonText}>
          {isCreating ? "Cancel" : "Create New Itinerary"}
        </Text>
      </TouchableOpacity>

      {isCreating ? (
        <CreateItinerary />
      ) : (
        <View style={itineraryPageStyles.emptyState}>
          {user.itinerary.length > 0 ? (
            user.itinerary.map((itinerary, index) => (
              <View key={index} style={itineraryPageStyles.itineraryItem}>
                <Text style={itineraryPageStyles.tripName}>
                  {itinerary.tripName}
                </Text>
                <Text style={itineraryPageStyles.destination}>
                  {itinerary.destination}
                </Text>
                <Text
                  style={itineraryPageStyles.dates}
                >{`From: ${itinerary.startDate} To: ${itinerary.endDate}`}</Text>
                <Text
                  style={itineraryPageStyles.flightInfo}
                >{`Airline: ${itinerary.details.flightInfo.airline}, Flight Number: ${itinerary.details.flightInfo.flightNumber}`}</Text>
                <Text style={itineraryPageStyles.remindersTitle}>
                  Reminders:
                </Text>
                {itinerary.details.reminders.map((reminder, reminderIndex) => (
                  <Text
                    key={reminderIndex}
                    style={itineraryPageStyles.reminder}
                  >{`- ${reminder}`}</Text>
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
