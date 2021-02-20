import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onfinish={() => setDataLoaded(true)}
  //     />
  //   );
  // }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber: any) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numRounds: number) => {
    setGuessRounds(numRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        gameOver={gameOverHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Number Guesser 5000" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
