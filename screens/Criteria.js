import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";

function Criteria(props) {
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Talking Politics</Text>
      <Text style={styles.smallerText}>Criteria</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("GameStart")}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>Start</Text>
      </TouchableOpacity>
      <Text>{gameContext.gameText}</Text>
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
export default Criteria;
