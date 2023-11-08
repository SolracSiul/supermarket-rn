import React, { useState } from "react";
import { View } from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Login/Login";
import Forgot from "./src/ForgotPass/Forgot";
import CreateAcc from "./src/CreateAccount/CreateAcc";
import Home from "./src/Home/Home";

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={Login}></Stack.Screen>
      <Stack.Screen name="ForgotPassword" component={Forgot}></Stack.Screen>
      <Stack.Screen name="CreateAccount" component={CreateAcc}></Stack.Screen>
      <Stack.Screen name="Home" options={{headerShown: false}}  component={Home}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
