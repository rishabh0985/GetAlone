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
              width: "313px",
              textAlign: "center",
              color: "#909090",
            }}
          >
            Enter Your Email ID we will send you 4 digit verification code on
            your E-mail
          </Text>
        </View>

        {/* <View style={{ alignItems: "center" , }}> */}
        <Button text="Submit" color="#171717" ButtonStyle={{}} />
        {/* </View> */}
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
          {/* <Link href="../authtication/Email"> */}
          <TouchableOpacity>
            <Text style={{ color: "#4D7883" }}>Login In</Text>
          </TouchableOpacity>
          {/* </Link> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpForgotPass;
