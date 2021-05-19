import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const check_mark = require("../../assets/check_mark.png");
const image = require("../../assets/bgSplash.png");

export default function PhoneVerificationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={check_mark} />
          <Text style={styles.title}>Verification success</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 50,
  },
  logo: {
    marginHorizontal: 24,
    alignSelf: "center",
    marginBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
