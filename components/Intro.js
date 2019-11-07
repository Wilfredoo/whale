import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class Intro extends React.Component {
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
                    onPress={() => this.props.navigation.navigate("Register")}
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
