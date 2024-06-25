import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import CheckBox from "react-native-check-box";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    Alert.alert(
      "Login Button Pressed",
      `Email: ${email}, Password: ${password}, Keep Me Logged In: ${isChecked}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail ID</Text>
      <TextInput
        style={styles.input}
        placeholder="abc@xyz.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="**********"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            checkBoxColor="#4d7883"
          />
          <Text style={styles.checkboxLabel}>Keep me logged in</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text>Don't have an account yet? </Text>
        <Link href="/explore" style={styles.signupText}>
          Sign up
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    gap: 5,
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "600",
    paddingHorizontal: 15,
    fontSize: 15,
  },
  input: {
    height: 40,
    borderColor: "#4d7883",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    color: "#4d7883",
    fontWeight: "700",
  },
  forgotPassword: {
    color: "#4d7883",
    fontWeight: "700",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    width: "50%",
    backgroundColor: "#4d7883",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#4d7883",
    fontWeight: "bold",
  },
});

export default App;
