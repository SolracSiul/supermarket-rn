import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import * as Animatable from 'react-native-animatable'
import tw from "twrnc";

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
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email..."
          style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
          placeholder="Sua senha."
          style={styles.input}
        />
      <View style={tw`w-[100%] flex items-center justify-center`}>
        <TouchableOpacity style={styles.customBtn} onPress={() => onPressLogin()} >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
        <View style={tw`flex flex-col w-[100%] h-[200px] justify-center items-center`}>
        <TouchableOpacity style={styles.buttonForgot} onPress={() =>onPressForgotPassword() }>
        <Text style={styles.registerText}>forgot  <Text style={tw`font-bold`}>Password</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() =>onPressSignUp() }>
          <Text style={styles.registerText}>Don't have an account ? <Text style={tw`font-bold`}>Sign up</Text></Text>
        </TouchableOpacity>

        </View>

      

      </Animatable.View>


    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#38a69d'
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    backgroundColor: '#38a69d'

},
message:{
  fontSize: 28,
  fontWeight: 'bold',
  color: '#FFF',
},
  containerForm:{
    backgroundColor: '#fff',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
 },
 title:{
  fontSize: 20,
  marginTop: 28,
 },
input:{
  borderBottomWidth: 1,
  height: 40,
  marginBottom: 12,
  fontSize: 16,
  
},
customBtn:{
  backgroundColor: '#38a69d',
  borderRadius: 10,
  paddingVertical: 8,
  width: '70%',
  alignself: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20
},
buttonText:{
  color: '#FFF',
  fontSize: 18,
  fontWeight: 'bold'
},
buttonForgot:{

},
buttonRegister: {
  marginTop: 14,
  alignSelf: 'center',
  
},
registerText:{
  color: '#33363F'
}


})
export default Login;
