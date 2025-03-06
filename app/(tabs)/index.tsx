import { View, Text } from "react-native";

import indexStyles from "../../styles/IndexStyles";

export default function Home() {
  return (
    <View style={indexStyles.container}>
      <Text style={indexStyles.title}>Welcome to iTransition!</Text>
      <Text style={indexStyles.subtitle}>Your travel companion app.</Text>
    </View>
  );
} 