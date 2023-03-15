import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("queen");
  const [person, setPerson] = useState({
    name: "mario",
    age: 40,
  });

  const clickHandle = () => {
    setName("king");
    setPerson({
      name: "maria",
      age: 45,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandle}></Button>
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
  buttonContainer: {
    paddingTop: 20,
  },
});
