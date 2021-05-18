import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const logo = require("../../assets/logo.png")

const SplashScreen = () => {
  return (
    <View style={styles.bgContainer}>
      <View>
        <Text>Logo</Text>
      </View>
      <View>
        <Text>Higlight</Text>
      </View>
      <View>
        <Text>Btns</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {

  }
})


export default SplashScreen;
