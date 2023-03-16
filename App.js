import React from "react";
import Home from "./screens/home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetail from "./screens/reviewDetail";
import { Button } from "react-native";

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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "Home Page",
            headerStyle: { backgroundColor: "pink" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
            headerRight: () => (
              <Button onPress={() => alert("This is a button!")} title="Info" />
            ),
            // headerLeft: () => (
            //   <Button onPress={() => alert("This is a button!")} title="Info" />
            // ),
          }}
        >
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetail}
          options={{ headerBackVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
