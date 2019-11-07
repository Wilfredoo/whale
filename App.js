import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Intro from "./components/Intro.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Intro: Intro,
        Login: Login,
        Register: Register
    },
    {
        initialRouteName: "Intro"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
    return <AppContainer />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
