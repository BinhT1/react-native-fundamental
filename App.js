import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          Lorem ipsum <Text>TEST TEXT</Text> dolor sit amet
          {/* <Text> is inherit <Text> parent styles */}
        </Text>
        <Text>Lorem ipsum dolor sit amet</Text>
        <Text>Lorem ipsum dolor sit amet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20, // <Text> is not inherit <View> parent styles
    fontWeight: "bold",
  },
});
