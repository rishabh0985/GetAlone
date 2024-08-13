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

const OtpForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [borderColors, setBorderColors] = useState(Array(4).fill("#B0B0B0"));
  const [error, setError] = useState(false);
  const refs = Array(4)
    .fill(0)
    .map(() => useRef(null));

  const handleOtpChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const newBorderColors = [...borderColors];
      newBorderColors[index] = value ? "#85B5BF" : "#ccc";
      setBorderColors(newBorderColors);

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

  const handleVerify = () => {
    const isOtpComplete = otp.every((digit) => digit !== "");
    if (isOtpComplete) {
      setError(false);
      setBorderColors(Array(6).fill("green"));

      navigation.navigate("../OtpVerifyCode/Verified");
    } else {
      setError(true);
      setBorderColors(otp.map((digit) => (digit === "" ? "red" : "#85B5BF")));
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, gap: "5px" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            overflow: "hidden",
            height: "260px",
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
            gap: "5px",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "700",
              //   alignItems: "center",
              lineHeight: "22.44px",
              //   width: "151px",
              //   height: "22px",
              textAlign: "center",
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "400",
              width: "232px",
              textAlign: "center",
              color: "#909090",
            }}
          >
            Enter 4 digit code that you received on your mail.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            // borderRadius: "16px",
          }}
        >
          {otp.map((value, index) => (
            <View key={index} style={{ marginHorizontal: 5 }}>
              <TextInput
                ref={refs[index]}
                style={{
                  width: "40px",
                  height: "45px",
                  borderWidth: 1.5,
                  borderColor: borderColors[index],
                  textAlign: "center",
                  fontSize: 18,
                  borderRadius: "16px",
                  marginBottom: "10px",
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
        {error && (
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ color: "red" }}>
              Invalid OTP. Please enter all digits.
            </Text>
          </View>
        )}
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
            href={"../ForgotPasswordPages/OtpVerifyied"}
            ButtonStyle={{ borderRadius: "16px" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: "4px",
            // alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Text style={{ color: "#686868", fontSize: "14px" }}>
            Already have an account?
          </Text>
          {/* <Link href="../authtication/Email"> */}
          <TouchableOpacity>
            <Text
              style={{ color: "#4D7883" }}
              onPress={() => {
                alert("OTP SEND SUCCESSED ");
              }}
            >
              Resend Otp
            </Text>
          </TouchableOpacity>
          {/* </Link> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpForgotPass;
