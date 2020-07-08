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
        1. Choose two players and a moderator. If this is a two person game, one
        player can also be the moderator
      </Text>
      <Text style={styles.smallerText}>
        2. Players will be given the question, their positions, and additional
        criteria
      </Text>
      <Text style={styles.smallerText}>
        3. Players have 90 seconds to debate. Moderator can moderate. Players
        will be prompted to drink randomly
      </Text>
      <Text style={styles.smallerText}>
        4. At the end of the debate, the another player(s) will be prompted to
        drink based on the results of the debate. Moderator can settle disputes
        here.
      </Text>
      <Text style={styles.smallerText}>
        5. Moderator chooses the winner of the debate, who becomes the next
        moderator.
      </Text>
      <Text style={styles.smallerText}>6. Have fun!</Text>

      <RedButton
        onPress={() => props.navigation.navigate("GameStart")}
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
    paddingVertical: 3,
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
