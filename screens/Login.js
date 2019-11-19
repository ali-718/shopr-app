import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/Logo.png";

export default class Login extends Component {
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
        <Text
          style={{
            fontSize: 28,
            marginTop: 40,
            letterSpacing: 2,
            fontWeight: "300"
          }}
        >
          Welcome, Let's Shop!
        </Text>
        <TextInput
          style={{
            width: "80%",
            padding: 15,
            marginTop: 40,
            backgroundColor: "white",
            paddingLeft: 50,
            borderRadius: 50,
            fontSize: 17
          }}
          placeholder="EMAIL"
          placeholderTextColor="black"
        />
        <TextInput
          style={{
            width: "80%",
            padding: 15,
            marginTop: 30,
            backgroundColor: "white",
            paddingLeft: 50,
            borderRadius: 50,
            fontSize: 17
          }}
          placeholder="PASSWORD"
          placeholderTextColor="black"
        />
        <TouchableOpacity
          style={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            borderRadius: 50,
            backgroundColor: "#818181",
            height: 50
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>LOGIN</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text>Dont have an account? </Text>
          <Text style={{ textDecorationLine: "underline" }}>Sign up?</Text>
        </View>
        <Text style={{ alignSelf: "center", margin: 30 }}>or</Text>
      </View>
    );
  }
}
