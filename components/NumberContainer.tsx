import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NumberContainer(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});