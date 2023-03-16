import { View, StyleSheet, Text, Button } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  // const [reviews, setReviews] = useState([
  //   {
  //     key: 1,
  //     title: "Fuzhou Changle International Airport",
  //     rating: 5,
  //     body: "Picoides pubescens",
  //   },
  //   {
  //     key: 2,
  //     title: "Carlos Rovirosa Pérez International Airport",
  //     rating: 3,
  //     body: "Tetracerus quadricornis",
  //   },
  //   {
  //     key: 3,
  //     title: "Villa Reynolds Airport",
  //     rating: 4,
  //     body: "Erethizon dorsatum",
  //   },
  // ]);

  const pressHandler = () => {
    navigation.push("Review Detail");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go to review details" onPress={pressHandler}></Button>
    </View>
  );
}
