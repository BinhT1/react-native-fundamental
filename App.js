import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("King");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Queen"
        placeholderTextColor={"gray"}
        onChangeText={(value) => {
          setName(value);
        }}
      ></TextInput>
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 40"
        placeholderTextColor={"gray"}
        onChangeText={(value) => {
          setAge(value);
        }}
      ></TextInput>
      <Text>
        Name: {name}, age: {age}
      </Text>
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
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
