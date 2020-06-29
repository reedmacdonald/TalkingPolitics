import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";
import { getPrompts, getPrompts2 } from "../helperFunctions";

function Positions(props) {
  const gameContext = React.useContext(GameContext);
  const [question, setQuestion] = React.useState("Loading Prompt");
  let getThings = async () => {
    let results = await getPrompts2();
    let tired = [];
    results.forEach((doc) => {
      tired.push(doc.data());
    });

    let randNum = Math.floor(Math.random() * tired.length);
    setQuestion(tired[randNum].Prompt); // returns a random integer from 0 to 10
  };
  React.useEffect(() => {
    getThings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Positions</Text>
      <Text style={styles.smallerText}>Politics-Themed Drinking Game</Text>
      <Text style={styles.smallerText}>{question}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Timer")}
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
export default Positions;
