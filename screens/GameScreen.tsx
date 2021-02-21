import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import defaultStyles from "../constants/default-styles";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (value: string, numRound: number) => (
  <View key={value} style={styles.list}>
    <BodyText>#{numRound}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

export default function GameScreen(props: any) {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
  let currentLow = useRef(1);
  let currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Do Not lie!", "You know this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((oldRounds) => oldRounds + 1);
    setPastGuesses((pastGuessList) => [nextNumber, ...pastGuessList]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons size={24} name="md-remove" />
        </MainButton>
        <MainButton
          title="HIGHER"
          onPress={nextGuessHandler.bind(this, "higher")}
        >
          <Ionicons size={24} name="md-add" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.scrollList}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess.toString(), pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  list: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  listContainer: {
    width: "80%",
    flex: 1,
  },
  scrollList: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
});
