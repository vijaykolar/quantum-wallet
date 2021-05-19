import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const logo = require("../../assets/logo.png");
const image = require("../../assets/bgSplash.png");
import Colors from "../../constants/colors";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Wellcome!</Text>
              <Text style={styles.info}>
                Please enter your phone number to continue
              </Text>
            </View>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone number</Text>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputText}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
              <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.register}>
                  <Text style={styles.registerText}>
                    Still have no accout?{" "}
                  </Text>
                  <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },

  logoContainer: {
    marginTop: 50,
    flex: 1,
  },
  logo: {
    marginHorizontal: 24,
  },
  textContainer: {
    // flex: 1,
    marginTop: 100,
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600",
  },
  info: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.7,
    marginTop: 30,
    maxWidth: 200,
    lineHeight: 26,
  },
  form: {
    backgroundColor: "#fff",
    padding: 24,
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  inputContainer: {
    borderRadius: 12,
    backgroundColor: "#F4F9FE",
    // height: 66,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputLabel: {
    color: "#A8C3EC",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 5,
  },
  inputText: {
    fontSize: 16,
    color: "#313F51",
  },
  loginContainer: {
    marginTop: 50,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  register: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  registerText: {
    color: "#A8C3EC",
  },
  registerButtonText: {
    color: "#5EA7FF",
  },
});
