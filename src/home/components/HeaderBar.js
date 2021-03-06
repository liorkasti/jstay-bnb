import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoSegmentWithFourTabs1 from "./CupertinoSegmentWithFourTabs1";

function HeaderBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CupertinoSegmentWithFourTabs1
        onUserPress={(page) => props.onUserPress(page)}
        text1="Language"
        text2="My Stays"
        text3="New Request"
        text4="Bookings"
        style={styles.cupertinoSegmentWithFourTabs1}
      ></CupertinoSegmentWithFourTabs1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cupertinoSegmentWithFourTabs1: {
    backgroundColor: "rgba(2,172,235,1)",
  }
});

export default HeaderBar;
