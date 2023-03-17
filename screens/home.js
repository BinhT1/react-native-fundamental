import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";
import Card from "../share/card";
import { MaterialIcons } from "@expo/vector-icons";

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          ></MaterialIcons>
          <Text>Hello from the modal</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      ></MaterialIcons>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStack", {
                screen: "ReviewDetails",
                params: item,
              })
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    alignSelf: "flex-end",
  },
});
