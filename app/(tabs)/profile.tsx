import React from "react";
import { View, Text } from "react-native";
import { user } from "../mockData/user"; // Import the user data
import ProfileInfo from "../components/ProfileInfo";
import styles from "../../styles/ProfileStyles"; // Import the styles

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.subtitle}>Manage your account settings here.</Text>
      <ProfileInfo user={user} /> {/* Pass user as a prop */}
    </View>
  );
};

export default ProfilePage; 