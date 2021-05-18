import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import GetStartedScreen from "./src/screens/GetStartedScreen";


const App = () => {
  return(
    <View style={styles.container}>
      <GetStartedScreen />
      <StatusBar  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    // paddingHorizontal: 16,
    paddingBottom: 0,
    backgroundColor: "linear-gradient(0deg, rgba(6, 29, 62, 0.65), rgba(6, 29, 62, 0.65))"
  }
})

export default App;
