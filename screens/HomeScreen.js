import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { GameContext } from "../App";
import { getPrompts } from "../helperFunctions";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";

function HomeScreen(props) {
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Talking Politics</Text>
      <Text style={styles.smallerText}>
        The Drinking Game of Wayward Political Debate
      </Text>

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
export default HomeScreen;
