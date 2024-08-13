import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../../components/Button";

const OtpVerifyied = () => {
  return (
    <View style={styles.viewtxt}>
      <Text style={styles.textcol}>
        YOUR PASSWORD IS SENDED IN YOUR REGISTERED E-MAIL ID{" "}
      </Text>
      <Text style={styles.texttnx}>Thanks for visiting </Text>
      <Button
        text="HOME-PAGE"
        ButtonStyle={{ width: "200px" }}
        href={"../Email"}
      />
    </View>
  );
};

export default OtpVerifyied;

const styles = StyleSheet.create({
  textcol: {
    color: "green",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "16px",
    // justifyContent: "center",
  },
  viewtxt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "45%",
    gap: "10px",
  },
  texttnx: {
    color: "#4D7883",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "16px",
  },
});
