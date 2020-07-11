import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Animated,
} from "react-native";
import { GameContext } from "../App";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";
import Close from "./Vectors/Close";

function Timer(props) {
  const [timeOne, setTimeOne] = React.useState(90);
  const [otherNumber, setOtherNumber] = React.useState(10);
  const [isPaused, setIsPaused] = React.useState(false);
  const [started, setStarted] = React.useState(false);
  const [bouncer, setBouncer] = React.useState(0);
  const [whoDrinks, setWhoDrinks] = React.useState("");
  React.useEffect(() => {});

  const startTime = (x) => {
    const timeNumber = setTimeout(() => {
      setTimeOne(x);
    }, 1000);
    setOtherNumber(timeNumber);
  };
  const stopTime = () => {
    clearTimeout(otherNumber);
  };

  React.useEffect(() => {
    if (timeOne == 0) {
      clearTimeout(otherNumber);
      props.navigation.navigate("Criteria");
    } else {
      let sumthin = timeOne - 1;
      let personDrinks = [
        "Player One Drinks",
        "Player Two Drinks",
        "Everyone Drinks",
      ];
      let happyFourth = Math.floor(Math.random() * 21);
      if (happyFourth == 3) {
        if (!whoDrinks) {
          let anotherOne = Math.floor(Math.random() * 3);
          setWhoDrinks(personDrinks[anotherOne]);
          setTimeout(() => {
            if (2 > 1) {
              setWhoDrinks("");
            }
          }, 5000);
        }
      }

      if (2 > 1) {
        startTime(sumthin);
      }
    }
  }, [timeOne]);

  return (
    <View style={styles.container}>
      <Close
        text="End"
        onPress={() => {
          setTimeOne(0);
        }}
      />
      <BlueButton
        onPress={() => {
          clearTimeout(otherNumber);
          setIsPaused(false);
          setTimeOne(timeOne + 15);
        }}
        text={"Add Time"}
        styles={styles.marginBotton}
      />
      <Text style={styles.timerText}>{timeOne}</Text>
      <Animated.Text
        style={[
          {
            color: "#834143",
            top: 200,
            position: "absolute",
            fontFamily: "AmericanTypewriter-Bold",
            fontSize: 30,
          },
        ]}
      >
        {whoDrinks}
      </Animated.Text>

      <RedButton
        onPress={
          isPaused
            ? () => {
                setTimeOne(timeOne - 1);
                setIsPaused(false);
              }
            : () => {
                stopTime();
                setIsPaused(!isPaused);
              }
        }
        text={isPaused ? "Start" : "Pause"}
        styles={styles.marginTop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 30,
  },
  marginBotton: {
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    fontSize: 45,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
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
export default Timer;
