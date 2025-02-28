import React from "react";
import { View, Text, FlatList } from "react-native";
import { user } from "../mockData/user";

const ItineraryList = () => {
  return (
    <View>
      <Text>Your Itineraries:</Text>
      <FlatList
        data={Array.isArray(user.itinerary) ? user.itinerary : []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.tripName}</Text>
            <Text>{item.destination}</Text>
            <Text>{item.startDate} - {item.endDate}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ItineraryList;
