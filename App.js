import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "king", key: "1" },
    { name: "queen", key: "2" },
    { name: "knight", key: "3" },
    { name: "mario", key: "4" },
    { name: "fool", key: "5" },
    { name: "magician", key: "6" },
    { name: "moon", key: "7" },
    { name: "sun", key: "8" },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
