import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Image3 from "../../assets/images/Image3.png";
import Image1 from "../../assets/images/Image1.png";
import { Link } from "expo-router";

const InformationTab = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Image source={Image3} />
        <Image source={Image1} />
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              color: "black",
              padding: 10,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Institute Name
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
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              padding: 10,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Course
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
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              padding: 10,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Department
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
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              padding: 10,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Semester
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
          />
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
                // width: "50%",
                backgroundColor: "#888888",
                padding: 10,
                borderRadius: 10,
                alignItems: "center",
                width: 120,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 18,
                  // backgroundColor: "red",
                  overflow: "hidden",
                  //   width: "50%",
                  // flexDirection: "column",
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default InformationTab;
