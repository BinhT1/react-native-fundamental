import "react-native-gesture-handler";
import React from "react";
import Home from "./screens/home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./screens/about";
import Header from "./share/header";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, error] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar hidden={false}></StatusBar>
      <Drawer.Navigator screenOptions={{}}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            header: (props) => <Header {...props} title={"Home"} />,
          }}
        ></Drawer.Screen>
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
