import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { GameContext } from "../App";
import { getPrompts } from "../helperFunctions";
import BlueButton from "./buttons/BlueButton";
import RedButton from "./buttons/RedButton";
import Icon from "react-native-vector-icons/AntDesign";
import Close from "./Vectors/Close";

function HomeScreen(props) {
  const gameContext = React.useContext(GameContext);
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 300, width: 300 }}
        source={require("../assets/splash.png")}
      ></Image>
      <Text style={styles.bigText}>Talking Politics</Text>
      <Text style={styles.smallerText}>
        The Drinking Game of Wayward Political Debate
      </Text>
      <RedButton
        onPress={() => props.navigation.navigate("Instructions")}
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
export default HomeScreen;
