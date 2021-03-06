import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import WalkingDistanceOf from "../components/WalkingDistanceOf";
import Eruv from "../components/Eruv";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function Nearby(props) {
  return (
    <View style={styles.container}>
      <View style={styles.walkingDistanceOfColumn}>
        <WalkingDistanceOf style={styles.walkingDistanceOf}></WalkingDistanceOf>
        <Eruv style={styles.eruv}></Eruv>
        <View style={styles.group1}>
          <View style={styles.rect}>
            <Text style={styles.bsD1}>BS&quot;D</Text>
            <View style={styles.button4RowRow}>
              <View style={styles.button4Row}>
                <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button4}>
                  <TouchableOpacity onPress={()=>{props.onBack()}} style={styles.button5}>
                    <Icon name="chevron-left" style={styles.icon1}></Icon>
                  </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.text}>Nearby</Text>
              </View>
              <View style={styles.button4RowFiller}></View>
              <TouchableOpacity style={styles.button3}>
                <View style={styles.image1Filler}></View>
                <Image
                  source={require("../assets/images/jstay-icon-inverted8.png")}
                  resizeMode="contain"
                  style={styles.image1}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.walkingDistanceOfColumnFiller}></View>
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet6>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)"
  },
  walkingDistanceOf: {
    height: 304,
    marginTop: 110,
    marginLeft: 30
  },
  eruv: {
    width: 344,
    height: 161,
    marginTop: 25,
    marginLeft: 30
  },
  group1: {
    height: 91,
    marginTop: -600
  },
  rect: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7
  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 13,
    marginRight: 38
  },
  button4: {
    width: 29,
    height: 40
  },
  button5: {
    width: 29,
    height: 40
  },
  icon1: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  text: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 132,
    marginTop: 8
  },
  button4Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 10
  },
  button4RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 62,
    height: 62,
    flexDirection: "row"
  },
  image1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  image1: {
    height: 62,
    width: 62
  },
  button4RowRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 6,
    marginRight: 4
  },
  walkingDistanceOfColumn: {},
  walkingDistanceOfColumnFiller: {
    flex: 1
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 36,
    opacity: 0.46,
    alignSelf: "flex-end",
    marginBottom: 3
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet4: {
    width: 112,
    height: 45,
    shadowOpacity: 0.01,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText2Row: {
    height: 45,
    flexDirection: "row",
    marginBottom: 28,
    marginLeft: 159,
    marginRight: 20
  }
});

export default Nearby;
