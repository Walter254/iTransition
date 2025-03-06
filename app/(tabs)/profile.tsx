import React from "react";
import { View, Text } from "react-native";

import { user } from "../../mockData/user";
import ProfileInfo from "../../components/ProfileInfo";
import profileStyles from "../../styles/ProfileStyles";

const ProfilePage = () => {
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.title}>User Profile</Text>
      <Text style={profileStyles.subtitle}>
        Manage your account settings here.
      </Text>
      <ProfileInfo user={user} /> {/* Pass user as a prop */}
    </View>
  );
};

export default ProfilePage;
