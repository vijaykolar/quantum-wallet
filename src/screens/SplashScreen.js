import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const logo = require("../../assets/logo.png");
const bgImage = require("../../assets/bgSplash.png");

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={bgImage}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={logo} />
          <Text style={styles.logoText}>Quantum Wallet</Text>
        </View>
        <View style={styles.highlight}>
          <Text style={styles.highlightMain}>Keep your cards in one place</Text>
          <Text style={styles.highlightInfo}>
            Keep your cards in one safe place. We can secure your information
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.getStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  btnContainer: {
    marginBottom: 100,
    marginHorizontal: 24,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  login: {
    backgroundColor: "rgba(255, 255, 255, 0.2);",
    borderRadius: 14,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  getStarted: {
    backgroundColor: "#5EA7FF",
    borderRadius: 14,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  highlightInfo: {
    color: "#fff",
    opacity: 0.7,
    lineHeight: 25,
    marginHorizontal: 20,
    textAlign: "center",
  },
  highlightMain: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 16,
  },
  highlight: {
    marginTop: 160,
    flex: 1,
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: "#fff",
    marginTop: 16,
    alignSelf: "center",
    fontWeight: "700",
    letterSpacing: 1,
  },
  logoImage: {
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  logoContainer: {
    alignSelf: "center",
    marginTop: 100,
  },
  container: {
    flex: 1,
  },
});

export default SplashScreen;
