import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MaterialCardWithRightButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/IMG_3025.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.leftBtn}>
          <MaterialCommunityIconsIcon
            name="home-heart"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="calendar-range"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <MaterialCommunityIconsIcon
        name="home-heart"
        style={styles.icon4}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="home-heart"
        style={styles.icon5}
      ></MaterialCommunityIconsIcon>
      <Text style={styles.shollisPlace}>Sholli&#39;s Place</Text>
      <View style={styles.group}>
        <FontAwesomeIcon name="star" style={styles.icon6}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon7}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon8}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon9}></FontAwesomeIcon>
        <FontAwesomeIcon name="star" style={styles.icon10}></FontAwesomeIcon>
      </View>
      <MaterialCommunityIconsIcon
        name="certificate"
        style={styles.icon11}
      ></MaterialCommunityIconsIcon>
      <MaterialCommunityIconsIcon
        name="magnify"
        style={styles.icon12}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,88,155,1)",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 8
  },
  leftBtn: {
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  centerBtn: {
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  icon4: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  icon5: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  shollisPlace: {
    top: 217,
    left: 9,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  group: {
    top: 238,
    left: 10,
    width: 97,
    height: 18,
    position: "absolute"
  },
  icon6: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 18
  },
  icon7: {
    top: 0,
    left: 20,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 18
  },
  icon8: {
    top: 0,
    left: 40,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 18
  },
  icon9: {
    top: 0,
    left: 60,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 18
  },
  icon10: {
    top: 0,
    left: 80,
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 18
  },
  icon11: {
    top: 214,
    left: "41.78%",
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 24
  },
  icon12: {
    top: 214,
    left: "52.37%",
    position: "absolute",
    color: "rgba(2,172,235,1)",
    fontSize: 24
  }
});

export default MaterialCardWithRightButtons;
