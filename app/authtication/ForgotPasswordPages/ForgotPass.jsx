import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Image3 from "../../../assets/images/Image3.png";
import ForgotPassword from "../../../assets/svgtopng/ForgotPassword.png";
import Button from "../../../components/Button";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  return (
    <ScrollView>
      <View style={{ flex: 1, gap: "10px" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            overflow: "hidden",
            height: "268px",
          }}
        >
          <Image source={Image3} />
          <Image
            source={ForgotPassword}
            style={{
              display: "flex",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "22.44px",
              textAlign: "center",
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "400",
              width: "313px",
              textAlign: "center",
              color: "#909090",
            }}
          >
            Enter Your Email ID we will send you 4 digit verification code on
            your E-mail
          </Text>
        </View>
        <View style={{ display: "flex", gap: "5px", margin: "10px" }}>
          <Text
            style={{
              fontWeight: "500",
              paddingHorizontal: 15,
              fontSize: "14px",
            }}
          >
            E-mail ID
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "#85B5BF",
              borderWidth: 1,
              marginBottom: 12,
              paddingHorizontal: 10,
              borderRadius: "16px",
              //   margin: "10px",
            }}
            placeholder="abc@xyz.edu"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            // borderColor="#85B5BF"
          />
        </View>
        <View
          style={{
            width: "218px",
            display: "flex",
            margin: "auto",
            borderRadius: "16px",
            height: "50px",
          }}
        >
          <Button
            text="Submit"
            color="#4D7883"
            href={"../ForgotPasswordPages/OtpForgotPass"}
            ButtonStyle={{ borderRadius: "16px" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPass;
