import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { GameContext } from "../App";
import { getPrompts, getPrompts2, getCriteria } from "../helperFunctions";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";

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
      <Text style={styles.smallerText}>{question}</Text>

      <RedButton
        onPress={() => {
          props.navigation.navigate("Positions");
          gameContext.getNewCard();
        }}
        text={"Continue"}
      />

      <BlueButton
        onPress={() => props.navigation.navigate("Home")}
        text={"End Game"}
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
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "American Typewriter",
  },
  smallerText: {
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "American Typewriter",
  },
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
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Criteria;
