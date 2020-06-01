import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText27(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Log Out</Text>
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
    color: "rgba(212,101,114,1)",
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 20,
    textAlign: "left"
  }
});

export default MaterialButtonWithVioletText27;