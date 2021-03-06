import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FooterMenuDropdown from "../components/FooterMenuDropdown";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MaterialBasicFooter1(props) {

  return (
    <View style={[styles.container, props.style]}>

      {/*dropdown menu for account */}
      {/* <View>
        {
          props.showFooterMenu &&
          <FooterMenuDropdown
            handleFooterMenu={(menuItem) => { props.handleFooterMenu("Account") }}
            style={styles.materialBasicFooter1} />
        }
      </View> */}
      <TouchableOpacity
        onPress={() => { props.handleFooterBar("favorites"); }}
        style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home-heart"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.handleFooterBar("trips")}
        style={styles.activebtnWrapper}>
        <MaterialCommunityIconsIcon
          name="airplane-landing"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activeText}>My Trips</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.handleFooterBar("messages")}
        style={styles.btnWrapper2}>
        {props.hasMessages &&
          <MaterialCommunityIconsIcon
            name={`numeric-${props.ammountOfMessages}-box`}
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        }
        <MaterialCommunityIconsIcon
          onPress={() => props.handleFooterBar("messages")}
          style={styles.activebtnWrapper}
          name="message-processing"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn2Text}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // onPress={() => {
        //   props.setShowFooterMenu(!props.showFooterMenu);
        // }}
        onPress={() => props.handleFooterBar("account")}

        style={styles.btnWrapper3}>
        {
          props.needToFinishProfile &&
          <FontAwesomeIcon
            name="exclamation"
            style={styles.icon5}
          ></FontAwesomeIcon>
        }
        <MaterialCommunityIconsIcon
          name="account"
          // onPress={() => props.handleFooterBar("account")}
          style={styles.activebtnWrapper}
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Text}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: "rgba(0,88,155,1)",
    flexDirection: "row",
    width: "100%",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  materialBasicFooterStock: {
    left: 210,
    height: 700,
    right: 0,
    bottom: 0,
    zIndex: 20
  },
  materialBasicFooter1: {
    left: 210,
    height: 700,
    right: 10,
    bottom: 342,
    zIndex: 20
  },
  btnWrapper1: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  activebtnWrapper: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    paddingTop: 6,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    paddingTop: 0,
    opacity: 0.8,
    marginTop: 0
  },
  activeText: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  btnWrapper2: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12,
    zIndex: 20
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8,
    zIndex: 5
  },
  btn2Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  btnWrapper3: {
    width: 104,
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(230,230,230,1)",
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "rgba(230,230,230,1)",
    opacity: 0.8,
    fontFamily: "roboto-regular",
    textAlign: "center"
  }
});

export default MaterialBasicFooter1;
