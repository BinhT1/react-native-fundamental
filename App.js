import React from "react";
import Home from "./screens/home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetail from "./screens/reviewDetail";

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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: "Home Page" }}>
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Review Detail" component={ReviewDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
