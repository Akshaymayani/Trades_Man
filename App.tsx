import React from "react";
import MainNavigator from "./src/Navigator/MainNavigator";
import { Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  )
}
export default App;