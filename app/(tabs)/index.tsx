import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Email from "@/components/Email";
import Image2 from "../../assets/images/Image2.png";
import Image3 from "../../assets/images/Image3.png";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <ScrollView>
      <StatusBar />
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
        <Email />
      </View>
    </ScrollView>
  );
};

export default Index;
