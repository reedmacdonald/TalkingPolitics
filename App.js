import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GameStart from "./screens/GameStart";
import Instructions from "./screens/Instructions";
import Positions from "./screens/Positions";
import Timer from "./screens/Timer";
import Criteria from "./screens/Criteria";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();
export const GameContext = React.createContext();

export default function App() {
  const [gameText, setGameText] = React.useState("Hello World");
  return (
    <GameContext.Provider value={{ gameText }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GameStart" component={GameStart} />
          <Stack.Screen name="Instructions" component={Instructions} />
          <Stack.Screen name="Positions" component={Positions} />
          <Stack.Screen name="Timer" component={Timer} />
          <Stack.Screen name="Criteria" component={Criteria} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  );
}
