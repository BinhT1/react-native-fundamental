import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      key: 1,
      title: "Fuzhou Changle International Airport",
      rating: 5,
      body: "Picoides pubescens king of the one",
    },
    {
      key: 2,
      title: "Carlos Rovirosa Pérez",
      rating: 3,
      body: "Tetracerus quadricornis queen of the two",
    },
    {
      key: 3,
      title: "Villa Reynolds Airport",
      rating: 4,
      body: "Erethizon dorsatum knight of the three",
    },
  ]);

  const pressHandler = () => {
    navigation.push("Review Detail");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
