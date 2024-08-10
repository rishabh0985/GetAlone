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
import ImageOtp from "../../../assets/svgtopng/ImageOtp.png";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Verified = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [borderColors, setBorderColors] = useState(Array(6).fill("#ccc"));
  const refs = Array(6)
    .fill(0)
    .map(() => useRef(null));

  const handleOtpChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Update border color
      const newBorderColors = [...borderColors];
      newBorderColors[index] = value ? "#85B5BF" : "#ccc";
      setBorderColors(newBorderColors);

      // Automatically focus on next input field if value is not empty
      if (value && index < otp.length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={{ flex: 1, alignItems: "center", overflow: "hidden" }}>
          <Image source={Image3} />
          <Image source={ImageOtp} />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              alignItems: "center",
              lineHeight: 22.44,
            }}
          >
            E-mail Verification
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              width: 259,
              textAlign: "center",
              color: "#909090",
            }}
          >
            Enter Your Email ID to receive One Time Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {otp.map((value, index) => (
            <View key={index} style={{ marginHorizontal: 5 }}>
              <TextInput
                ref={refs[index]}
                style={{
                  width: 40,
                  height: 40,
                  borderWidth: 1,
                  borderColor: borderColors[index],
                  textAlign: "center",
                  fontSize: 18,
                  borderRadius: 20, // Makes the input box circular
                }}
                maxLength={1}
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            </View>
          ))}
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <TouchableOpacity>
            <Link
              href="../InvalidOtp"
              style={{
                width: 218,
                backgroundColor: "white",
                borderRadius: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 12,
                borderWidth: 2,
                borderColor: "#85B5BF",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "22px",
                    height: "22px",
                    backgroundColor: "#85B5BF",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 4,
                    marginRight: 8,
                  }}
                >
                  <Icon name="check" size={13} color="#FEFEFF" />
                </View>
                <Text style={{ fontSize: "19px", color: "#85B5BF" }}>
                  Verified
                </Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
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
            Haven't received yet?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#4D7883" }}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Verified;
