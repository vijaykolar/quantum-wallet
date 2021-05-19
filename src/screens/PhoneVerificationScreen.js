import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const logo = require("../../assets/logo.png");

const PhoneVerificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={logo} />
      </View>
      <View style={styles.highlight}>
        <Text style={styles.highlightMain}>Phone verification</Text>
        <Text style={styles.highlightInfo}>
          We send verification code to your number:{" "}
          <Text style={styles.phoneNumber}>+91-9980175653</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneNumber: {
    color: "#fff",
  },
  highlightInfo: {
    color: "rgba(255,255,255,0.7)",
    lineHeight: 25,
  },
  highlightMain: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  highlight: {
    marginTop: 60,
    marginBottom: 40,
    marginHorizontal: 16,
    // flex: 1,
  },
  logoImage: {
    marginHorizontal: "auto",
  },
  logoContainer: {
    marginTop: 30,
    marginHorizontal: 16,
  },
  container: {
    alignSelf: "center",
  },
});

export default PhoneVerificationScreen;
