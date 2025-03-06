import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

const CreateItinerary = () => {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [transportation, setTransportation] = useState("");
  const [packingList, setPackingList] = useState("");
  const [reminders, setReminders] = useState("");
  const [notes, setNotes] = useState("");

  const router = useRouter();

  const handleCreate = () => {
    const newItinerary = {
      id: `itinerary-${Date.now()}`,
      userId: "user-001",
      tripName,
      destination,
      startDate,
      endDate,
      details: {
        flightInfo: {
          airline,
          flightNumber,
          departureTime,
        },
        accommodation,
        transportation,
        packingList: packingList.split(",").map((item) => item.trim()),
        reminders: reminders.split(",").map((item) => item.trim()),
        notes,
      },
    };

    // TODO: Implement logic to save newItinerary to state or database
    console.log(newItinerary); // For debugging purposes
    router.back();
  };

  return (
    <View>
      <Text>Create Your Itinerary</Text>
      {/* Form Fields */}
      <TextInput
        placeholder="Trip Name"
        value={tripName}
        onChangeText={setTripName}
      />
      <TextInput
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        placeholder="Start Date"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        placeholder="End Date"
        value={endDate}
        onChangeText={setEndDate}
      />
      <TextInput
        placeholder="Airline"
        value={airline}
        onChangeText={setAirline}
      />
      <TextInput
        placeholder="Flight Number"
        value={flightNumber}
        onChangeText={setFlightNumber}
      />
      <TextInput
        placeholder="Departure Time"
        value={departureTime}
        onChangeText={setDepartureTime}
      />
      <TextInput
        placeholder="Accommodation Details"
        value={accommodation}
        onChangeText={setAccommodation}
      />
      <TextInput
        placeholder="Transportation Arrangements"
        value={transportation}
        onChangeText={setTransportation}
      />
      <TextInput
        placeholder="Packing List (comma-separated)"
        value={packingList}
        onChangeText={setPackingList}
      />
      <TextInput
        placeholder="Reminders (comma-separated)"
        value={reminders}
        onChangeText={setReminders}
      />
      <TextInput
        placeholder="Additional Notes"
        value={notes}
        onChangeText={setNotes}
      />
      <Button title="Create Itinerary" onPress={handleCreate} />
      <Button title="Cancel" onPress={() => router.back()} />
    </View>
  );
};

export default CreateItinerary;
