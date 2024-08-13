import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const LogInPage = () => {
  const [Name, setName] = useState("Friend !");
  //   const verify = () => {
  //     setName("Hello");
  //   };
  return (
    <ScrollView>
      <View>
        <Text style={styles.textint}> Welcome {Name}</Text>
        <Text style={styles.page}>coming soon for next pages.....!!</Text>
        <Text style={styles.hell}>Thanks for Visiting this App !! </Text>
      </View>
    </ScrollView>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  textint: {
    color: "red",
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 200,
  },
  page: {
    color: "#4D7883",
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
  },
  hell: {
    color: "#4D7883",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
});
