import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

function BlueButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.styles && props.styles]}
    >
      <Text style={styles.buttonFont}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#AD6464",
    padding: 15,
    marginTop: 10,
    width: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  buttonFont: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default BlueButton;
