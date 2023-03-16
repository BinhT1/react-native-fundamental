import { View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetail({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetail Screen</Text>
      <Button title="back to home screen" onPress={pressHandler}></Button>
    </View>
  );
}
