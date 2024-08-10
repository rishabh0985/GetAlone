import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import Image3 from "../../assets/images/Image3.png";
import Image1 from "../../assets/images/Image1.png";
import { Link, useRouter } from "expo-router";

const SignIn = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleNameChange = (text) => {
    if (/^[a-zA-Z\s]*$/.test(text)) {
      setName(text);
    } else {
      Alert.alert(
        "Invalid input",
        "Please enter only alphabetic characters and spaces."
      );
    }
  };

  const listing = ["Select", "Male", "Female", "Other"];

  const handleAgeChange = (text) => {
    if (/^\d*$/.test(text)) {
      setAge(text);
    } else {
      Alert.alert(
        "Invalid input",
        "Please enter only numeric characters for age."
      );
    }
  };

  const handleSexChange = (item) => {
    setSex(item);
    setModalVisible(false);
  };

  useEffect(() => {
    if (
      name.trim() !== "" &&
      age.trim() !== "" &&
      sex !== "" &&
      sex !== "Select"
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, age, sex]);

  const handleSubmit = () => {
    setButtonClicked(true);
    if (isFormValid) {
      // Clear form fields
      setName("");
      setAge("");
      setSex("");
      router.push("/InformationTab");
    } else {
      Alert.alert("Invalid input", "Please fill in all fields correctly.");
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image source={Image3} />
        <Image source={Image1} />
      </View>
      <View style={{ padding: 10, marginVertical: 10, gap: 10 }}>
        <View>
          <Text
            style={{ fontWeight: "500", fontSize: 17, marginHorizontal: 10 }}
          >
            Name
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontWeight: "400",
            }}
            value={name}
            onChangeText={handleNameChange}
            placeholder="Johnny Deep"
            placeholderTextColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity here
          />
        </View>
        <View>
          <Text
            style={{ fontWeight: "500", fontSize: 17, marginHorizontal: 10 }}
          >
            Age
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#888888",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              fontWeight: "400",
              marginTop: 5,
            }}
            value={age}
            onChangeText={handleAgeChange}
            keyboardType="numeric"
            placeholder="18"
            placeholderTextColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity here
          />
        </View>
        <View>
          <Text
            style={{ fontWeight: "500", fontSize: 17, marginHorizontal: 10 }}
          >
            Sex
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              borderColor: "#888888",
              borderWidth: 1,
              borderRadius: 10,
              justifyContent: "center",
              paddingLeft: 10,
              marginTop: 5,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              {" "}
              {/* Adjust the opacity here */}
              {sex || "Select"}
            </Text>
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View
                style={{
                  width: 300,
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <FlatList
                  data={listing}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                      }}
                      onPress={() => handleSexChange(item)}
                    >
                      <Text style={{ fontSize: 16 }}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#888888",
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 10,
                  }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
        }}
      >
        <TouchableOpacity>
          <Link
            href="../authtication/InformationTab"
            style={{
              width: 218,
              backgroundColor: "#4D7883",
              borderRadius: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: "12px",
              paddingHorizontal: "12px",
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "#FEFEFF" }}>Next</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            gap: "4px",
            // alignItems: "center",
            justifyContent: "center",
            // marginTop: "10px",
          }}
        >
          <Text style={{ color: "#686868", fontSize: "14px" }}>
            Already have an account?
          </Text>
          <Link href="../authtication/Email">
            <TouchableOpacity>
              <Text style={{ color: "#4D7883" }}>Login In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
