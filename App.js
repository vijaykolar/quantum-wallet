import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <StatusBar color="#f1b" currentHeight={40} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    // paddingHorizontal: 16,
    // paddingBottom: 0,
    flex: 1,
    backgroundColor:
      "linear-gradient(0deg, rgba(6, 29, 62, 0.65), rgba(6, 29, 62, 0.65))",
  },
});

export default App;
