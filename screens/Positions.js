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
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";

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
            <Text style={[styles.bigText, {}]}>Positions</Text>
            <View style={styles.margins}>
              <Text style={[styles.smallerText, {}]}>Premise: </Text>
              <Text style={[styles.lastText, {}]}>{premise}</Text>
            </View>
            <View style={styles.margins}>
              <Text style={styles.smallerText}>Player One: </Text>
              <Text style={[styles.lastText, {}]}>{playerOne}</Text>
            </View>
            <View style={styles.margins}>
              <Text style={styles.smallerText}>Player Two: </Text>
              <Text style={[styles.lastText, {}]}>{playerTwo}</Text>
            </View>
            <View style={styles.margins}>
              <Text style={styles.smallerText}>Additional: </Text>
              <Text style={[styles.lastText, {}]}>{additional}</Text>
            </View>
          </Animated.View>

          <RedButton
            onPress={() => props.navigation.navigate("Timer")}
            text={"Start"}
          />
        </>
      )}
      <BlueButton
        onPress={async () => {
          fadeOut();

          setTimeout(async () => {
            await getThings();
            fadeIn();
          }, 2000);
        }}
        text="New Topic"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#FAEBD7",
    justifyContent: "center",
  },
  animatedContainer: { backgroundColor: "red" },
  margins: {
    marginTop: 8,
    marginBottom: 8,
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
  lastText: {
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
export default Positions;
