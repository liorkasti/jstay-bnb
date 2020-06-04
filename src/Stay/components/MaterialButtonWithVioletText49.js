import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText49(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Submit</Text>
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
  caption: {
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  }
});

export default MaterialButtonWithVioletText49;