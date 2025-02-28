import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProfileInfoProps {
  user: {
    name: string;
    country: string;
    contact: {
      email: string;
      phone: string;
    };
    university: {
      name: string;
      location: string;
    };
    scholarshipInfo: {
      provider: string;
      amount: string;
    };
    timezone: string;
    season: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Information</Text>
      
      <View style={styles.infoSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Country:</Text>
        <Text style={styles.value}>{user.country}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.contact.email}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.contact.phone}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>University:</Text>
        <Text style={styles.value}>{user.university.name}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{user.university.location}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Scholarship Provider:</Text>
        <Text style={styles.value}>{user.scholarshipInfo.provider}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Scholarship Amount:</Text>
        <Text style={styles.value}>{user.scholarshipInfo.amount}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Timezone:</Text>
        <Text style={styles.value}>{user.timezone}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Season:</Text>
        <Text style={styles.value}>{user.season}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  infoSection: {
    marginBottom: 8,
  },
  label: {
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProfileInfo;
