import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";

function Timer(props) {
  const [timeOne, setTimeOne] = React.useState(90);
  const [otherNumber, setOtherNumber] = React.useState(10);
  const [isPaused, setIsPaused] = React.useState(false);
  const [started, setStarted] = React.useState(false);
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
      if (2 > 1) {
        startTime(sumthin);
      }
    }
  }, [timeOne]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          clearTimeout(otherNumber);
          setIsPaused(false);
          setTimeOne(timeOne + 15);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>Add Time</Text>
      </TouchableOpacity>

      <Text style={styles.smallerText}>{timeOne}</Text>
      <TouchableOpacity
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
        style={styles.button}
      >
        <Text style={styles.buttonFont}>{isPaused ? "Start" : "Pause"}</Text>
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
export default Timer;
