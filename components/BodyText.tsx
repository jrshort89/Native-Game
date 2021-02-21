import React from "react";
import { StyleSheet, Text } from "react-native";

export default function BodyText(props: any) {
  return <Text style={styles.font}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "open-sans",
  },
});
