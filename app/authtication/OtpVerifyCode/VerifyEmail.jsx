import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Image3 from "../../../assets/images/Image3.png";
import ImageOtp from "../../../assets/svgtopng/ImageOtp.png";
import { Link } from "expo-router";
// import { useNavigation } from "@react-navigation/native";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const navigation = useNavigation(); // For navigation

  const handleChange = (text) => {
    setEmail(text);
    if (text.trim() !== "") {
      setErrorMessage("");
    }
  };

  const handleVerify = () => {
    if (email.trim() === "") {
      setErrorMessage("Please enter your email");
    } else {
      // Navigate to the next page
      navigation.navigate("../OtpVerifyCode/OtpVerify");
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.imageContainer}>
          <Image source={Image3} />
          <Image source={ImageOtp} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>E-mail Verification</Text>
          <Text style={styles.subtitleText}>
            Enter Your Email ID to receive One Time Password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>E-mail ID</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleChange}
            placeholder="abc@xyz.com"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
          />
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleVerify}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Get OTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  textContainer: {
    alignItems: "center",
    padding: 10,
    gap: 12,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22.44,
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: "400",
    width: 259,
    textAlign: "center",
    color: "#909090",
  },
  inputContainer: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  labelText: {
    fontWeight: "700",
    paddingHorizontal: 15,
    fontSize: 18,
    paddingBottom: 15,
  },
  input: {
    height: 40,
    borderColor: "#85B5BF",
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 218,
    backgroundColor: "#4D7883",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#FEFEFF",
  },
});

export default VerifyEmail;
