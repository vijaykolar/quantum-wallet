import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
// import GetStartedScreen from "./src/screens/GetStartedScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import PhoneVerificationScreen from "./src/screens/PhoneVerificationScreen";
// import VerificationSuccessScreen from "./src/screens/VerificationSuccessScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
      {/* <GetStartedScreen /> */}
      {/* <LoginScreen /> */}
      {/* <PhoneVerificationScreen /> */}
      {/* <VerificationSuccessScreen /> */}
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
  },
});

export default App;
