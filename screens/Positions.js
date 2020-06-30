import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { GameContext } from "../App";
import { getPrompts, getPrompts2, getCertainPrompts } from "../helperFunctions";

function Positions(props) {
  const gameContext = React.useContext(GameContext);
  const [additional, setAdditional] = React.useState("Loading Additional");
  const [playerOne, setPlayerOne] = React.useState("LoadingPlayerOne");
  const [playerTwo, setPlayerTwo] = React.useState("LoadingPlayerTwo");
  const [premise, setPremise] = React.useState("LoadingPremise");
  React.useEffect(() => {
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
    setAdditional(tired[randNum].Additional);
    setPlayerOne(tired[randNum].PlayerOne);
    setPlayerTwo(tired[randNum].PlayerTwo);
    setPremise(tired[randNum].Premise);
    gameContext.setTheCard(tired[randNum]);
    gameContext.addACard(tired[randNum]);
  };
  React.useEffect(() => {
    console.log("getting things");
    getThings();
  }, []);
  React.useEffect(() => {
    console.log(gameContext.triggerNewCard, "<---triggerNewCard");
    if (gameContext.triggerNewCard !== 1) {
      console.log("triggering");
      getThings();
    }
  }, [gameContext.triggerNewCard]);

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Positions</Text>
      <Text style={styles.smallerText}>Premise: {premise}</Text>
      <Text style={styles.smallerText}>Player One: {playerOne}</Text>
      <Text style={styles.smallerText}>Player Two: {playerTwo}</Text>
      <Text style={styles.smallerText}>Additional: {additional}</Text>
      <Button
        onPress={() => props.navigation.navigate("Timer")}
        style={styles.button}
        title="Start"
      />
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
