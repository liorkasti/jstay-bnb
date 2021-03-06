import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText30(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>See reviews</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88
  },
  button: {
    width: 103,
    height: 28,
    color: "rgba(0,88,155,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonWithVioletText30;
