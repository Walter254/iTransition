import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ItineraryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Itineraries</Text>
      <Link href="/itinerary/create" asChild>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Create New Itinerary</Text>
        </TouchableOpacity>
      </Link>
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