import React, { useState } from "react";
import Home from "./screens/home";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded, error] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }
  return <Home />;
}
