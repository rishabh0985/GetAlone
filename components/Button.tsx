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
    >
      {href ? (
        <Link href={href}>
          <View style={[styles.buttonContainer, ButtonStyle]}>
            <Text style={[styles.buttonText, ButtonTextStyle]}>{text}</Text>
          </View>
        </Link>
      ) : (
        <View style={[styles.buttonContainer, ButtonStyle]}>
          <Text style={[styles.buttonText, ButtonTextStyle]}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#4d7883",
    height: 45,
    width: 218,
    overflow: "hidden",
    justifyContent: "center",
    marginHorizontal: "35%",
    borderRadius: 7,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },
});

export default Button;
