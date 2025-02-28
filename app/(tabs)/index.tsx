import { View, Text } from "react-native";
import styles from "../../styles/IndexStyles"; // Import the styles

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to iTransition!</Text>
      <Text style={styles.subtitle}>Your travel companion app.</Text>
    </View>
  );
} 