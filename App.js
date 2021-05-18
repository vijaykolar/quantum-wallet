import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";

const App = () => {
  return(
    <View style={styles.container}>
      <SplashScreen />
      <StatusBar  />
    </View>
  )
}

const styles = StyleSheet.create({
  // image: {
  //   // flex: 1,
  //   resizeMode: "cover",
  //   // justifyContent: "center"
  // },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: "linear-gradient(0deg, rgba(6, 29, 62, 0.65), rgba(6, 29, 62, 0.65))"
    // backgroundImage: bgImage,
  }
})

export default App;
