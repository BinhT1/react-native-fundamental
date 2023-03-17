import { View, StyleSheet, Text, Button, Image } from "react-native";
import React from "react";
import { globalStyles, images } from "../styles/global";
import Card from "../share/card";

export default function ReviewDetail({ route, navigation }) {
  const data = route.params;
  console.log(route);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[data.rating]}></Image>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {},
});
