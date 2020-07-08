import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";
import { GameContext } from "../App";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";
import { getPrompts2, getCertainPrompts } from "../helperFunctions";

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
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="International" value="International" />
          <Picker.Item label="Political Theory" value="Political Theory" />
          <Picker.Item label="Small Ball" value="Small Ball" />
        </Picker>
      </View>

      <BlueButton
        onPress={async () => {
          props.navigation.navigate("Positions");
          if (gameContext.gameTopic == "All") {
            results = await getPrompts2();
          } else {
            results = await getCertainPrompts(gameContext.gameTopic);
          }
          gameContext.setTopicThing(results);
        }}
        text={"Start"}
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
  relative: { position: "relative" },
  bigText: {
    fontSize: 45,
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: "American Typewriter",
  },
  smallerText: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "American Typewriter",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    marginTop: 10,
    position: "relative",
    borderRadius: 20,
  },
  buttonFont: {
    fontWeight: "bold",
  },
});
export default GameStart;
