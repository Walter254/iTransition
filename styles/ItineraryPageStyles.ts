import { StyleSheet } from "react-native";

const itineraryPageStyles = StyleSheet.create({
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
  itineraryItem: {
    marginBottom: 16,
  },
  tripName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  destination: {
    fontSize: 16,
    marginBottom: 4,
  },
  dates: {
    fontSize: 14,
  },
  flightInfo: {
    fontSize: 14,
    marginBottom: 4,
  },
  remindersTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  reminder: {
    fontSize: 14,
  },
});

export default itineraryPageStyles;
