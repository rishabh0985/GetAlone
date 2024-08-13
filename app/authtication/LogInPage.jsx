import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LogInPage = () => {
  const [Name, setName] = useState("");
  const verify = () => {
    setName("Hello");
  };
  return (
    <View>
      <Text style={styles.textint}>{Name}</Text>
    </View>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  textint: {
    color: "red",
    fontSize: 20,
  },
});
