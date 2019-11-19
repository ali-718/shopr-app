import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Logo from "../assets/Logo.png";

export default class SplashScreen extends Component {
  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ECECEC"
        }}
      >
        <Image source={Logo} style={{ width: 200, height: 70 }} />
      </View>
    );
  }
}
