import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from 'firebase'
import { firebaseConfig } from "../config";
firebase.initializeApp(firebaseConfig)

export default function Register() {
    return (
        <View style={styles.container}>
            <Text>Register bitte</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
