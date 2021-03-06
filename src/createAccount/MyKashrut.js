import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import KosherSelect from "./components/KosherSelect";
import HeaderBarDark from "../components/HeaderBarDark";
import NextButton from "../components/NextButton";
import { Center } from "@builderx/utils";

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function MyKashrut(props) {
  return (
    <View style={styles.container}>
      <View style={styles.myLevelOfKashrutStackColumn}>
        <View style={styles.myLevelOfKashrutStack}>
          <Center horizontal>
            <Text style={styles.myLevelOfKashrut}>My level of kashrut is</Text>
            <Image
              source={require("../assets/images/JStay-Logo-blue-shin7.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </Center>
        </View>
        
        <KosherSelect onUserPress={props.onUserPress} style={styles.kosherSelect}></KosherSelect>
        
        <View style={styles.group1}>
          <View style={styles.headerBarDark1Stack}>
            <HeaderBarDark
              onBack={props.onBack}
              text1=""
              style={styles.headerBarDark1}
            ></HeaderBarDark>
            <Text style={styles.bsD1}>BS&quot;D</Text>
          </View>
        </View>
      </View>
      <View style={styles.myLevelOfKashrutStackColumnFiller}></View>
      <NextButton onPress={props.onNext} style={styles.nextButton1}></NextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,88,155,1)",
    zIndex: 1
  },
  myLevelOfKashrut: {
    top: 147,
    color: "rgba(2,172,235,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  image1: {
    top: 0,
    height: 150,
    position: "absolute",
  },
  myLevelOfKashrutStack: {
    height: 171,
    marginTop: 137
  },
  kosherSelect: {
    zIndex: 20,
    width: 394,
    height: 343,
    marginTop: 22,
    marginLeft: 20
  },
  group1: {
    height: 90,
    marginTop: -673
  },
  headerBarDark1: {
    top: 0,
    left: 0,
    height: 90,
    position: "absolute",
    right: 0,
    borderColor: "rgba(2,172,235,1)",
    borderWidth: 0,
    borderBottomWidth: .7
  },
  bsD1: {
    top: 13,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  headerBarDark1Stack: {
    height: 90
  },
  myLevelOfKashrutStackColumn: {
    zIndex: 1,
  },
  myLevelOfKashrutStackColumnFiller: {
    flex: 1
  },
  nextButton1: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
    marginBottom: 40,
    marginRight: 8
  }
});

export default MyKashrut;