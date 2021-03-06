import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialButtonWithVioletText11 from "../components/MaterialButtonWithVioletText11";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function HostBankInfo({ props }) {
  const [userAnswers, setUserAnswers] = useState({});
  useEffect(() => {
    if (props.savedValuesState) {
      setUserAnswers(props.savedValuesState)
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="First name" style={styles.textInput1}></TextInput>
      <TextInput placeholder="Last name" style={styles.textInput2}></TextInput>
      <TextInput placeholder="Bank" style={styles.textInput3}></TextInput>
      <TextInput
        placeholder="Account number"
        style={styles.textInput4}
      ></TextInput>
      <TextInput
        placeholder="Branch number"
        style={styles.textInput5}
      ></TextInput>
      <TextInput placeholder="I.D" style={styles.textInput6}></TextInput>
      <Text style={styles.addBillingInfo1}>
        Add banking details to receive payments
      </Text>

      <View style={styles.icon2Row}>
        <FontAwesomeIcon
          name="cc-paypal"
          style={styles.icon2}
        ></FontAwesomeIcon>
        <FontAwesomeIcon name="cc-visa" style={styles.icon3}></FontAwesomeIcon>
      </View>
      <View style={styles.materialButtonWithVioletText2Row}>
        <MaterialButtonWithVioletText11
          style={styles.materialButtonWithVioletText2}
        ></MaterialButtonWithVioletText11>
        <View style={styles.materialButtonWithVioletText2Filler}></View>
        <MaterialButtonViolet6 onPress={props.onNext}
          style={styles.materialButtonViolet1}
        ></MaterialButtonViolet6>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    backgroundColor: "rgba(2,172,235,1)"
  },
  textInput1: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 80,
    marginLeft: 30
  },
  textInput2: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 30
  },
  textInput3: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  textInput4: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  textInput5: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  textInput6: {
    width: 250,
    height: 30,
    color: "#121212",
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    marginTop: 10,
    marginLeft: 31
  },
  addBillingInfo1: {
    width: 312,
    height: 34,
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: -284,
    marginLeft: 30
  },
  group1: {
    height: 91,
    marginTop: -150
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
  payments: {
    color: "rgba(0,88,155,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 121,
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
  icon2: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  icon3: {
    color: "rgba(0,88,155,1)",
    fontSize: 40,
    marginLeft: 14
  },
  icon2Row: {
    height: 41,
    flexDirection: "row",
    marginTop: 350,
    marginLeft: 33,
    marginRight: 263
  },
  materialButtonWithVioletText2: {
    width: 88,
    height: 35,
    opacity: 0.46,
    alignSelf: "flex-end"
  },
  materialButtonWithVioletText2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonViolet1: {
    width: 112,
    height: 35,
    shadowOpacity: 0.01
  },
  materialButtonWithVioletText2Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 251,
    marginLeft: 168,
    marginRight: 16
  }
});

export default HostBankInfo;
