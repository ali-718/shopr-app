import React, { Component } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./screens/Login";

const Stack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    Login: {
      screen: Login
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const MainNav = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return <MainNav />;
  }
}
