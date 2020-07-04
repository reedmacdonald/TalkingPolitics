import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";

function Instructions(props) {
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Instructions</Text>
      <Text style={styles.smallerText}>
        Choose a topic and a number of players and let one person begin as a
        moderator. The moderator will read the debate premise, the positions
        each player will have to take, and any extra criteria for the debate.
        When he clicks start, debate participants will have 90 seconds to
        debate, but the moderator can pause the debate or add more time. When
        the time runs out, the moderator will read who has to drink. If this is
        arbitrary (e.g. "Person who won the debate") it is then up the moderator
        to decide. You can then end the game or switch moderators and continue
        with a new topic.
      </Text>

      <RedButton
        onPress={() => props.navigation.navigate("Positions")}
        text={"Start"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 45,
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: "American Typewriter",
  },
  smallerText: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: "American Typewriter",
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    marginTop: 10,
    borderRadius: 20,
  },
  buttonFont: {
    fontWeight: "bold",
  },
});
export default Instructions;
