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
      <Text style={styles.bigText}>{question}</Text>

      <RedButton
        onPress={async () => {
          props.navigation.navigate("Positions");
          await gameContext.getNewCard();
        }}
        text={"Continue"}
      />

      <BlueButton
        onPress={() => {
          gameContext.setTopicThing([]);
          props.navigation.navigate("Home");
        }}
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
    fontSize: 36,
    textAlign: "center",
    paddingHorizontal: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "American Typewriter",
    marginBottom: 80,
  },
});
export default Criteria;
