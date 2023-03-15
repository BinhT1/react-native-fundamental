import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "king", id: "1" },
    { name: "queen", id: "2" },
    { name: "knight", id: "3" },
    { name: "mario", id: "4" },
    { name: "fool", id: "5" },
    { name: "magician", id: "6" },
    { name: "moon", id: "7" },
    { name: "sun", id: "8" },
  ]);
  const pressHandle = (id) => {
    console.log(id);
    setPeople((prevPepple) => {
      // don't know prevPeople argument ?????
      // when pass a arrow function in SetState, random arguments in arrow function is going to be this state itself
      return prevPepple.filter((person) => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />

      <FlatList
        key={({ item }) => {
          return item.id;
        }}
        numColumns={2}
        data={people}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                pressHandle(item.id);
              }}
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
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
    marginHorizontal: 10,
  },
});
