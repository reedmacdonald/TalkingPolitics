import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import { GameContext } from "../App";

function GameStart(props) {
  const [selectPlayers, setSelectPlayers] = React.useState(2);
  const [selectCategory, setSelectCategory] = React.useState("All");
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Players</Text>
      <View style={styles.relative}>
        <Picker
          selectedValue={selectPlayers}
          style={{ width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            gameContext.setThePlayers(itemValue);
            setSelectPlayers(itemValue);
          }}
        >
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
        </Picker>
      </View>
      <Text style={styles.bigText}>Category</Text>
      <View style={styles.relative}>
        <Picker
          selectedValue={selectCategory}
          style={{ width: 150 }}
          onValueChange={(itemValue, itemIndex) => {
            gameContext.setTheTopic(itemValue);
            setSelectCategory(itemValue);
          }}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="International" value="International" />
          <Picker.Item label="Philosophy" value="Philosophy" />
          <Picker.Item label="Small Ball" value="Small Ball" />
        </Picker>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Instructions")}
        style={styles.button}
      >
        <Text style={styles.buttonFont}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonFont}>Topic:{gameContext.gameTopic}</Text>
        <Text style={styles.buttonFont}>Players:{gameContext.gamePlayers}</Text>
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
  relative: { position: "relative" },
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
    position: "relative",
  },
  buttonFont: {
    fontWeight: "bold",
  },
});
export default GameStart;
