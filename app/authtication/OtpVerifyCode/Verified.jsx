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
// import Button from "../../../components/Button";
// import Link from "expo-router";

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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
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
            {/* </Link> */}
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
            <Link href="../Email">
              <Text style={{ color: "#85B5BF", fontWeight: "600" }}>
                Log In
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button text="click me" ButtonStyle={{ backgroundColor: "pink" }} /> */}
    </ScrollView>
  );
};

export default Verified;
