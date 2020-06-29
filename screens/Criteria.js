import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";
import { getPrompts, getPrompts2, getCriteria } from "../helperFunctions";

function Criteria(props) {
  const gameContext = React.useContext(GameContext);
  const [question, setQuestion] = React.useState("Loading Prompt");
  let getThings = async () => {
    let newCard = gameContext.card.WhoDrinks;

    let randNum = Math.floor(Math.random() * newCard.length);
    setQuestion(newCard[randNum]); // returns a random integer from 0 to 10
  };
  React.useEffect(() => {
    getThings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Criteria</Text>
      <Text style={styles.smallerText}>Politics-Themed Drinking Game</Text>
      <Text style={styles.smallerText}>{question}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Timer")}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>End</Text>
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
export default Criteria;
