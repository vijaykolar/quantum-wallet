import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";

const logo = require("../../assets/logo.png");
const bgSplash = require("../../assets/bgSplash.png");

const GetStartedScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={bgSplash}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={logo} />
          </View>
          <View style={styles.highlight}>
            <Text style={styles.highlightMain}>Welcome to Quantum Wallet</Text>
            <Text style={styles.highlightInfo}>
              Keep your cards in one safe place. We can secure your information
            </Text>
          </View>
          <View style={styles.details}>
            <View style={styles.formItem}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                autoCapitalize="none"
                style={styles.input}
                placeholder="User name"
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                placeholder="Email"
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Phone number</Text>
              <TextInput
                maxLength={10}
                keyboardType="phone-pad"
                autoCapitalize="none"
                style={styles.input}
                placeholder="Mobile no."
              />
            </View>
            <View>
              <TouchableOpacity style={styles.getStarted}>
                <Text style={styles.getStartedText}>Get Started</Text>
              </TouchableOpacity>
              <View style={styles.loginContainer}>
                <Text style={styles.accountText}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  loginText: {
    color: "#5EA7FF",
    fontSize: 14,
  },
  accountText: {
    color: "#A8C3EC",
    fontSize: 14,
  },
  loginContainer: {
    marginTop: 20,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
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
    marginTop: 30,
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    color: "#313F51",
  },
  label: {
    fontSize: 12,
    lineHeight: 14,
    color: "#A8C3EC",
    fontWeight: "400",
  },
  formItem: {
    backgroundColor: "#F4F9FE",
    borderRadius: 12,
    width: "100%",
    padding: 8,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  details: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 30,
    // flex: 1,
  },
  highlightInfo: {
    color: "#fff",
    opacity: 0.7,
    lineHeight: 20,
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
    marginTop: 60,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
    // alignSelf: "center",
  },
});

export default GetStartedScreen;
