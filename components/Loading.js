import React from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from "react-native";
import firebase from 'firebase'

export default class Loading extends React.Component {
componentDidMount() {
    this.checkIfLoggedIn()
}

checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.props.navigation.navigate('Main')
        } else {
            this.props.navigation.navigate('Auth')

        }
    })
}

    render() {
        return (
            <View style={styles.container}>
                <Text>Please wait</Text>
            <ActivityIndicator size='large' />
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
