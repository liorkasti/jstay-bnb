import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from "./src/Login";
import DynamicQuestionnaireController from './src/createAccount/index';
import MainHome from "./src/MainHome";
import Orientation from 'react-native-orientation-locker';
import Geocoder from 'react-native-geocoding';

export default function App() {
  const [createAccount, setCreateAccount] = useState(false);
  const [showMainHome, setShowMainHome] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const beginCreateAccount = () => {
    userWantsToCreateAccount(true)
  }
  useEffect(() => {
    Orientation.lockToPortrait();
    // Geocoder.init("AIzaSyC9nF7BS9tSvtJaHDtTvfEYuHD6cwSBhws");
    console.disableYellowBox = true;
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {createAccount &&
        <View>
          <DynamicQuestionnaireController backToLogin={() => { setCreateAccount(false); setShowLogin(true); }} />
        </View >}
      {
        showLogin &&
        <Login createAccount={() => { setCreateAccount(true); }} loggedIn={() => { setShowLogin(false); setShowMainHome(true) }} />
      }{
        showMainHome &&
        <MainHome />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});