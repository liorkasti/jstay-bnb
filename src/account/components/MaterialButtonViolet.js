import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      <Text style={styles.caption}>Continue with Facebook</Text>
      <Text style={styles.loremIpsum}></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(2,172,235,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(2,172,235,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  loremIpsum: {
    top: 17,
    left: 62,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet;
