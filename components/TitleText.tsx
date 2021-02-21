import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TitleText(props: any) {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
