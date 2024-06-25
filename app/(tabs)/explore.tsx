import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Picker,
  TouchableOpacity,
} from "react-native";
import Image3 from "../../assets/images/Image3.png";
import Image1 from "../../assets/images/Image1.png";
import { Link } from "expo-router";

const Explore = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const handleNameChange = (text) => {
    if (/^[a-zA-Z\s]*$/.test(text)) {
      setName(text);
    } else {
      alert("Please enter only alphabetic characters and spaces.");
    }
  };

  const handleAgeChange = (text) => {
    if (/^\d*$/.test(text)) {
      setAge(text);
    } else {
      alert("Please enter only numeric characters for age.");
    }
  };

  const handleSexChange = (itemValue) => {
    setSex(itemValue);
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("Please enter a valid name.");
      return;
    }
    if (age.trim() === "") {
      alert("Please enter age.");
      return;
    }
    if (sex === "") {
      alert("Please select sex.");
      return;
    }

    // console.log("Name:", name);
    // console.log("Age:", age);
    // console.log("Sex:", sex);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image source={Image3} />
        <Image source={Image1} />
      </View>
      <View style={{ padding: 10, marginVertical: 10 }}>
        <Text style={{ fontWeight: "500", fontSize: 17 }}>Name</Text>
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
        />
        <Text style={{ fontWeight: "500", fontSize: 17, marginTop: 15 }}>
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
        />
        <Text style={{ fontWeight: "500", fontSize: 17, marginTop: 15 }}>
          Sex
        </Text>
        <Picker
          selectedValue={sex}
          onValueChange={handleSexChange}
          style={{
            height: 40,
            borderColor: "#888888",
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 5,
          }}
          itemStyle={{ fontWeight: "300" }}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <View
        style={{
          alignItems: "center",
          marginVertical: 10,
          // overflow: "hidden",
        }}
      >
        <Link href="/InformationTab">
          <TouchableOpacity
            style={{
              width: 120,
              backgroundColor: "#888888",
              padding: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                // backgroundColor: "red",
                overflow: "hidden",
                // width: "50%",
                // flexDirection: "column",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Explore;
