import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";

function Instructions(props) {
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Instructions</Text>
      <Text style={styles.smallerText}>
        Doggo ipsum many pats smol. Long bois very hand that feed shibe boof
        aqua doggo you are doin me a concern the neighborhood pupper, long water
        shoob wrinkler shooberino. Blop you are doing me a frighten lotsa pats
        yapper many pats big ol thicc most angery pupper I have ever seen very
        jealous pupper bork, heckin good boys big ol pupper bork floofs doggo
        woofer bork. Pupper mlem very jealous pupper yapper, length boy most
        angery pupper I have ever seen. Bork super chub such treat yapper
        puggorino wow such tempt,
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Positions")}
        style={styles.button}
      >
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
export default Instructions;
