import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
type props = {
  text?: string;
  onClick?: () => void;
  color?: string;
  href?: any;
  textcolor?: string;
  ButtonStyle: React.CSSProperties;
  ButtonTextStyle: React.CSSProperties;
};
const Button = ({
  text,
  onClick,
  color,
  href,
  textcolor,
  ButtonStyle,
  ButtonTextStyle,
}: props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        /* Add your href navigation logic here */
      }}
      style={[styles.buttonContainer, ButtonStyle]}
    >
      {href ? (
        <Link href={href}>
          <Text style={[styles.buttonText, ButtonTextStyle]}>{text}</Text>
        </Link>
      ) : (
        <Text style={[styles.buttonText, ButtonTextStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    backgroundColor: "#4D7883",
    borderRadius: 7,
    overflow: "hidden",
    // height: "100%",
    padding: 11,
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 15,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: "100%",
    display: "flex",
  },
});

export default Button;
