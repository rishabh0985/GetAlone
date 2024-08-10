import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Image3 from "../../assets/images/Image3.png";
import Image2 from "../../assets/images/Image2.png";
import CheckBox from "react-native-check-box";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    Alert.alert(
      "Login Button Pressed",
      `Email: ${email}, Password: ${password}, Keep Me Logged In: ${isChecked}`
    );
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#ffffff", flex: 1, overflow: "hidden" }}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image source={Image3} style={{ justifyContent: "center" }} />
        </View>
        <View
          style={{
            overflow: "hidden",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image source={Image2} />
        </View>
        {/* <NameAndAge /> */}
      </View>

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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
              placeholder="**********"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={toggleShowPassword}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              checkBoxColor="#4d7883"
            />
            {/* <TextInput
              // type="checkbox"
              id="scales"
              // name="scales"
              checked
              placeholder="Keep me logged in"
            /> */}
            <Text style={styles.checkboxLabel}> Keep me Logged in </Text>
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
          <Link href="../authtication/SignIn" style={styles.signupText}>
            Sign up
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
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
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    overflow: "hidden",
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    borderColor: "#4d7883",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    padding: 5,
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
