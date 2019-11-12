import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Auth from "./components/Auth.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Loading from "./components/Loading.js";
import Main from "./components/Main.js";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Auth: Auth,
        Login: Login,
        Register: Register,
        Loading: Loading,
        Main:Main
    },
    {
        initialRouteName: "Loading"
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




