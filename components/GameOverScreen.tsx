import React from "react";
import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "./MainButton";

export default function GameOverScreen(props: any) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.resultText}>The game is over!</TitleText>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    borderRadius: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  highlight: {
    color: Colors.primary,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
