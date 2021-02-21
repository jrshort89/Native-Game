import React from "react";
import { View, Image, StyleSheet, Button, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "./MainButton";

export default function GameOverScreen(props: any) {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageWrapper}>
        <Image
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://static.wikia.nocookie.net/starcraft/images/f/f1/Zergling_SC2_Game4.jpg/revision/latest/scale-to-width-down/539?cb=20140512025416",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Number of rounds:{" "}
        <TitleText style={styles.highlight}>{props.roundsNumber}</TitleText>
      </BodyText>
      <BodyText>
        The number was the ellusive:{" "}
        <TitleText style={styles.highlight}>{props.userNumber}</TitleText>
      </BodyText>
      <View style={styles.buttonContainer}>
        <MainButton onPress={props.gameOver}>New Game</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  imageWrapper: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  highlight: {
    color: Colors.primary,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
