import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import CreateItinerary from "../../components/create";

export default function ItineraryList() {
  const [isCreating, setIsCreating] = useState(false); // State to manage visibility of Create Itinerary

  const handleCreateToggle = () => {
    setIsCreating(!isCreating); // Toggle the create itinerary form
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Itineraries</Text>
      <TouchableOpacity style={styles.createButton} onPress={handleCreateToggle}>
        <Text style={styles.buttonText}>{isCreating ? "Cancel" : "Create New Itinerary"}</Text>
      </TouchableOpacity>
      
      {isCreating && <CreateItinerary />} {/* Conditionally render the Create Itinerary component */}

      {/* Itinerary list will go here */}
      <View style={styles.emptyState}>
        <Text>No itineraries yet. Create your first trip plan!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 