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
  const [gameTopic, setGameTopic] = React.useState("All");
  const [gamePlayers, setGamePlayers] = React.useState(2);
  const [card, setCard] = React.useState({ WhoDrinks: ["hmm", "idk"] });
  const [deckLength, setDeckLength] = React.useState(10);
  const [cardStack, setCardStack] = React.useState([]);
  const [triggerNewCard, setTriggerNewCard] = React.useState(1);

  const getNewCard = () => {
    setTriggerNewCard(triggerNewCard + 1);
  };
  const setTheTopic = (data) => {
    setGameTopic(data);
  };
  const setThePlayers = (data) => {
    setGamePlayers(data);
  };
  const setTheCard = (data) => {
    setCard(data);
  };
  const setTheDeckLength = (data) => {
    setDeckLength(data);
  };
  const addACard = (data) => {
    //let newStack = cardStack.push(data);
    let newStack = [];
    setCardStack(newStack);
  };
  React.useState(() => {
    console.log(cardStack, "<---cardStack");
  }, [cardStack]);
  return (
    <GameContext.Provider
      value={{
        gameText,
        gameTopic,
        gamePlayers,
        setThePlayers,
        setTheTopic,
        card,
        setTheCard,
        deckLength,
        setTheDeckLength,
        cardStack,
        addACard,
        triggerNewCard,
        getNewCard,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GameStart" component={GameStart} />
          <Stack.Screen name="Instructions" component={Instructions} />
          <Stack.Screen name="Positions" component={Positions} />
          <Stack.Screen
            name="Timer"
            component={Timer}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Criteria"
            component={Criteria}
            options={{
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  );
}
