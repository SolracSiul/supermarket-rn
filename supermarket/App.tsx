import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Login/Login";
import Forgot from "./src/ForgotPass/Forgot";
import CreateAcc from "./src/CreateAccount/CreateAcc";
import Home from "./src/Home/Home";
import ProductList from "./src/ProductList/ProductList";
import ProductDetails from "./src/ProductDetails/ProductDetails";
import Cart from "./src/Components/Cart";
import { CartProvider } from "./src/Context/CartContext";
import CartIcon from "./src/Components/CartIcon";
import { AuthProvider, useAuth } from "./src/Context/AuthContext";

export const Layout = () =>{
  const {authState, onLogout} = useAuth();
  const Stack = createNativeStackNavigator()

  return(
  <NavigationContainer>
          <Stack.Navigator>
            {authState?.authenticated ?(
            <>
              <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={({ navigation }) => ({
                title: 'Products',
                headerRight: () => <CartIcon navigation={navigation} />,
                headerLeft: () => (
                  <Button onPress={() => {onLogout()}} title="Sign out"></Button>
                ),
              })}
            />
              <Stack.Screen name="ProductDetails" component={ProductDetails}></Stack.Screen>
              <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
              </>
            ):(
              <>
              <Stack.Screen name="Home" options={{headerShown: false}}  component={Home}></Stack.Screen>
              <Stack.Screen name="Login" options={{headerShown: false}} component={Login}></Stack.Screen>
              <Stack.Screen name="ForgotPassword" component={Forgot}></Stack.Screen>              
              <Stack.Screen name="CreateAccount" component={CreateAcc}></Stack.Screen>
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>

  )
}
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <AuthProvider>
      <CartProvider>
        <Layout/>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;