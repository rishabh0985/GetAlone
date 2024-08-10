import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Image3 from "../../assets/images/Image3.png";
import Image1 from "../../assets/images/Image1.png";

function profilePicture() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image source={Image3} />
      </View>
      <View style={{ gap: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "500", marginTop: 40 }}>
          Complete Your Profile
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "500", opacity: 0.5 }}>
          Upload a profile picture
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 60,
          gap: 30,
        }}
      >
        <Image
          style={{
            height: 200,
            width: 200,
            justifyContent: "center",
            borderRadius: 100, // half of height/width to make it circular
          }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_1280.jpg",
          }}
        />
      </View>
      <Pressable onPress={() => {}}>
        <View
          style={{
            marginTop: 40,
            overflow: "hidden",
            alignItems: "center",
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              backgroundColor: "#2DB086",
              height: "100%",
              width: "24%",
              color: "white",
              margin: 5,
              padding: 8,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            📤 Upload Photo
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Link
          href="../authtication/OtpVerifyCode/VerifyEmail"
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "#1F1F1F",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            opacity: 0.4,
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Verify E-mail
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
}

export default profilePicture;
