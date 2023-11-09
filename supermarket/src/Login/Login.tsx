import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Login = ({navigation}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onPressLogin = () => {
    navigation.navigate("ProductList")
    console.log(form)
  };
  const onPressProductList = () =>{
    navigation.navigate("ProductList")
  }
  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword")
  };
  const onPressSignUp = () => {
    navigation.navigate("CreateAccount")
  };
  const handleEmailChange = (text) => {
    setForm({ ...form, email: text });
  };

  const handlePasswordChange = (text) => {
    setForm({ ...form, password: text });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={handleEmailChange}
          value={form.email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={handlePasswordChange}
          value={form.password}
        />
      </View>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.inputText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6D1D8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#391E22",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#D0B0B1",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#391E22",
  },
  forgotAndSignUpText: {
    color: "#391E22",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#9F807D",
    borderRadius: 25,
    paddingVertical: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
export default Login;
