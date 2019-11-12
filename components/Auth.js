import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Google from 'expo-google-app-auth';


export default class Auth extends React.Component {
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.id_token,
            googleUser.accessToken
            );
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(() => {
          console.log("the user has signed in")
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '353993328565-stdu06g46sji65o8i2ovu5npcga8aj8k.apps.googleusercontent.com',
            iosClientId: "353993328565-cfouoqpnlrkdiefvlig301vglbl523kf.apps.googleusercontent.com",
            scopes: ['profile', 'email'],
          });
          console.warn("omg", result)

          if (result.type === 'success') {
            console.warn("accessToken", result.accessToken)

            return result.accessToken;
          } else {
            console.warn("failed")

            return { cancelled: true };
          }
        } catch (e) {
console.log(e)
          return { error: true };
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <Text>Whale App</Text>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                        uri: "./assets/splash.png"
                    }}
                />
                <Button
                    onPress={() => this.signInWithGoogleAsync()}
                    title="Sign Up"></Button>
                <Button
                    title="Sign In"
                    onPress={() =>
                        this.props.navigation.navigate("Login")
                    }></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
