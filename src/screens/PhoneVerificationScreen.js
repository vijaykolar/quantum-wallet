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

export default function PhoneVerificationScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Phone verification</Text>
              <Text style={styles.info}>
                We send verification code to your number:
                <Text style={styles.phoneNumber}> +01 4227 242 6432</Text>
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  maxLength={1}
                  style={styles.passwordInput}
                  // keyboardType=""
                  secureTextEntry={true}
                />
                <TextInput
                  // keyboardType=""
                  secureTextEntry={true}
                  maxLength={1}
                  style={styles.passwordInput}
                />
                <TextInput
                  // keyboardType=""
                  secureTextEntry={true}
                  maxLength={1}
                  style={styles.passwordInput}
                />
                <TextInput
                  // keyboardType=""
                  secureTextEntry={true}
                  maxLength={1}
                  style={styles.passwordInput}
                />
                <TextInput
                  // keyboardType=""
                  secureTextEntry={true}
                  maxLength={1}
                  style={styles.passwordInput}
                />
                <TextInput
                  // keyboardType=""
                  secureTextEntry={true}
                  maxLength={1}
                  style={styles.passwordInput}
                />
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Done</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.resendButton}>
                  <Text style={styles.resendButtonText}>Resend Code</Text>
                </TouchableOpacity>
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
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600",
  },
  info: {
    color: "rgba(255, 255, 255, .7)",
    fontSize: 16,
    marginTop: 16,
    maxWidth: "80%",
    lineHeight: 26,
  },
  phoneNumber: {
    color: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  passwordInput: {
    borderBottomWidth: 1,
    borderColor: "#fff",
    flex: 1,
    marginHorizontal: 6,
    color: "#fff",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: 24,
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  loginContainer: {
    marginTop: 50,
  },
  loginButton: {
    backgroundColor: "#5EA7FF",
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
  resendButton: {
    borderColor: "#5EA7FF",
    borderWidth: 1,
    borderRadius: 12,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  resendButtonText: {
    color: "#5EA7FF",
    fontSize: 16,
    fontWeight: "600",
  },
});
