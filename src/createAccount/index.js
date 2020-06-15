import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Platform } from "react-native"
import { useHistory } from "react-router-dom";

import HeaderBarDark from "../components/HeaderBarDark"

//import all builder x files related to this directory
import AccountDetails from "./AccountDetails";
import MyDetails from "./MyDetails";
import ProfilePicture from "./ProfilePicture";
import MyKashrut from "./MyKashrut";

import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const imagePickerOptionsoptions = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,
        waitUntilSaved: true
    },
};

export default function CreateAccountIndex(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [profilePictureUri, setProfilePictureUri] = useState("");
    //this send user to route if they want to create a stay
    let history = useHistory();

    useEffect(() => {
        if (props.location.state) {
            console.warn("props for create account index", props.location.state)
        };
    }, []);

    const addProfilePicture = () => {
        ImagePicker.showImagePicker(imagePickerOptionsoptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: (Platform.OS==='android') ? response.uri : response.uri.replace('file://', '')};
                uploadToFireBase().then((res) => {
                    console.log("upload file to firebase response", res)
                })
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };


                setProfilePictureUri(source.uri);
            }
        });
    }
    const uploadToFireBase = async (uri) => {
        const reference = storage().ref('black-t-shirt-sm.png');
        // path to existing file on filesystem
        const pathToFile = uri;
        // uploads file
        const response = await reference.putFile(pathToFile);
        return response;
    }
    useEffect(() => {
        console.warn(componentKeys[componentIndex])
        //this is if they press next on the last screen in the list
        if (componentIndex > componentKeys.length - 1) {
            history.push("/home");
        };
        if (componentIndex < 0) {
            history.push("/");
        };
    }, [componentIndex])

    //add the import as a string to this array 
    //the array should be in the order that the screens show up
    const componentKeys = ["AccountDetails", "MyDetails", "MyKashrut", "ProfilePicture"];


    return (

        <View style={styles.container}>
            <HeaderBarDark screenWidth={windowWidth} style={styles.header} header="Create Account" onHome={() => { onHome() }} onBack={() => setComponentIndex(componentIndex - 1)} />
            {/* <ScrollView style={styles.scrollView}> */}

            {/* copy paste below component*/}
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "AccountDetails"
                &&
                //change component name to the new import 
                <AccountDetails

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "MyDetails"
                &&
                //change component name to the new import 
                <MyDetails

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "MyKashrut"
                &&
                //change component name to the new import 
                <MyKashrut

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {
                //replace this string with the string 
                //in componentKeys related to this import

                componentKeys[componentIndex] === "ProfilePicture"
                &&
                //change component name to the new import 
                <ProfilePicture

                    //if builder x component has next button
                    //it's button should have onPress={()=>{props.onNext}}
                    onNext={() => {
                        setComponentIndex(componentIndex + 1)
                    }}

                    onHome={() => { goToHome() }}

                    profilePictureUri={profilePictureUri}

                    //if builder x component has back button
                    //it's button should have onPress={()=>{props.onNext}}
                    onBack={() => {
                        setComponentIndex(componentIndex - 1)
                    }}

                    addProfilePicture={() => { 
                        addProfilePicture();
                     }}
                    //if builder x component has skip button
                    //it's button should have onPress={()=>{props.onNext}}
                    onSkip={() => {
                        setComponentIndex(componentIndex + 1)
                    }}
                />
            }
            {/* </ScrollView> */}
        </View>);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,88,155,1)",
        flex: 1,
        flexDirection: "column",
        width: windowWidth,
    },
    header: {
        zIndex: 20,
    },
    scrollView: {
        zIndex: 1,
        marginTop: 70
    },
});