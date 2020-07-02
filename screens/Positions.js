import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Animated,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
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
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {additional == "Loading Additional" ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Animated.View
            style={[
              {
                opacity: fadeAnim,
                alignItems: "center",
                justifyContent: "center", // Bind opacity to animated value
              },
            ]}
          >
            <Text
              style={[
                styles.bigText,
                { backgroundColor: "blue", marginTop: 300 },
              ]}
            >
              Positions
            </Text>
            <Text style={[styles.smallerText, { backgroundColor: "red" }]}>
              Premise:{" "}
            </Text>
            <Text>{premise}</Text>
            <Text style={styles.smallerText}>Player One: </Text>
            <Text>{playerOne}</Text>
            <Text style={styles.smallerText}>Player Two: </Text>
            <Text>{playerTwo}</Text>
            <Text style={styles.smallerText}>Additional: </Text>
            <Text>{additional}</Text>
          </Animated.View>
          <Button
            onPress={() => props.navigation.navigate("Timer")}
            style={styles.button}
            title="Start"
          />
        </>
      )}
      <Button
        onPress={async () => {
          fadeOut();

          setTimeout(() => {
            getThings();
            fadeIn();
          }, 2000);
        }}
        style={styles.button}
        title="New Topic"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  animatedContainer: { backgroundColor: "red" },

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
