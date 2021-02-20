import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function GameOverScreen(props: any) {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>The number was the ellusive: {props.userNumber} </Text>
      <Button title="New Game" onPress={props.gameOver} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
