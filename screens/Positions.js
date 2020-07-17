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
import {
  getPrompts,
  getPrompts2,
  getCertainPrompts,
  shuffle,
} from "../helperFunctions";
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
    results = gameContext.actualTopic;
    let firstGo = false;
    if (results.length < 1) {
      firstGo = true;
      if (gameContext.gameTopic == "All") {
        results = await getPrompts2();
      } else {
        results = await getCertainPrompts(gameContext.gameTopic);
      }
    }
    //results = gameContext.actualTopic;

    let tired = [];

    results.forEach((doc) => {
      tired.push(doc.data());
    });

    if (firstGo) {
      shuffle(tired);
      firstGo = false;
    }

    let randNum = Math.floor(Math.random() * tired.length);
    gameContext.setTheDeckLength(tired.length);
    gameContext.index;

    if (Array.isArray(tired[gameContext.index].Additional)) {
      let anotherNum = Math.floor(
        Math.random() * tired[gameContext.index].Additional.length
      );
      setAdditional(tired[gameContext.index].Additional[anotherNum]);
    } else {
      setAdditional(tired[gameContext.index].Additional);
    }
    setPlayerOne(tired[gameContext.index].PlayerOne);
    setPlayerTwo(tired[gameContext.index].PlayerTwo);
    setPremise(tired[gameContext.index].Premise);
    gameContext.setTheCard(tired[gameContext.index]);
    gameContext.addACard(tired[gameContext.index]);
    if (gameContext.index != tired.length - 1) {
      gameContext.setIndex(gameContext.index + 1);
    } else {
      gameContext.setIndex(0);
    }
  };

  React.useEffect(() => {
    setAdditional("Loading Additional");

    if (gameContext.triggerNewCard !== 1) {
      getThings();
    }
  }, [gameContext.triggerNewCard]);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {additional == "Loading Additional" ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={[styles.bigText, {}]}>Positions</Text>
          <Animated.View
            style={[
              {
                opacity: fadeAnim,
                alignItems: "center",
                justifyContent: "center", // Bind opacity to animated value
              },
            ]}
          >
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
    fontSize: 32,
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
