import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function GameStart() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Intro Screen</Text>
      <Text style={styles.smallerText}>This is the intro Screen</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonFont}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 45,
  },
  smallerText: {
    fontSize: 25,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    marginTop: 10,
  },
  buttonFont: {
    fontWeight: "bold",
  },
});
export default GameStart;
