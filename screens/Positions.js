import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";
import { getPrompts, getPrompts2, getCertainPrompts } from "../helperFunctions";

function Positions(props) {
  const gameContext = React.useContext(GameContext);
  const [additional, setAdditional] = React.useState("Loading Additional");
  const [playerOne, setPlayerOne] = React.useState("LoadingPlayerOne");
  const [playerTwo, setPlayerTwo] = React.useState("LoadingPlayerTwo");
  const [premise, setPremise] = React.useState("LoadingPremise");
  React.useEffect(() => {
    console.log(gameContext.gameTopic, "<---gameContext.gameTopic");
    getThings();
  }, []);
  let getThings = async () => {
    let results;
    if (gameContext.gameTopic == "All") {
      results = await getPrompts2();
    } else {
      results = await getCertainPrompts(gameContext.gameTopic);
    }
    let tired = [];
    results.forEach((doc) => {
      tired.push(doc.data());
    });

    let randNum = Math.floor(Math.random() * tired.length);
    gameContext.setTheDeckLength(tired.length);
    //setQuestion(tired[randNum].Prompt); // returns a random integer from 0 to 10
    setAdditional(tired[randNum].Additional);
    setPlayerOne(tired[randNum].PlayerOne);
    setPlayerTwo(tired[randNum].PlayerTwo);
    setPremise(tired[randNum].Premise);
    gameContext.setTheCard(tired[randNum]);
    gameContext.addACard(tired[randNum]);
  };
  React.useEffect(() => {
    getThings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Positions</Text>
      <Text style={styles.smallerText}>Premise: {premise}</Text>
      <Text style={styles.smallerText}>Player One: {playerOne}</Text>
      <Text style={styles.smallerText}>Player Two: {playerTwo}</Text>
      <Text style={styles.smallerText}>Additional: {additional}</Text>
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
