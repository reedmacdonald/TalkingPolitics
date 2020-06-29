import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GameContext } from "../App";

function Timer(props) {
  const gameContext = React.useContext(GameContext);
  const [time, setTime] = React.useState(90);
  const [otherNumber, setOtherNumber] = React.useState(10);
  const [isPaused, setIsPaused] = React.useState(false);
  React.useEffect(() => {
    startTime();
  }, []);
  const startTime = () => {
    const timeNumber = setInterval(() => {
      setTime(time--);
    }, 1000);
    setOtherNumber(timeNumber);
  };
  const stopTime = () => {
    clearInterval(otherNumber);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={setTime(time + 15)} style={styles.button}>
        <Text style={styles.buttonFont}>Add Time</Text>
      </TouchableOpacity>

      <Text style={styles.smallerText}>{time}</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("GameStart")}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>Pause</Text>
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
