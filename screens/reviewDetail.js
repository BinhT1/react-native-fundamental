import { View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetail({ route, navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  const data = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{data.title}</Text>
      <Text>{data.body}</Text>
      <Text>{data.rating}</Text>
    </View>
  );
}
