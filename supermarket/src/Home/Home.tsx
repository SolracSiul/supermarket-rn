import React, { useState } from "react";
import {
  StyleSheet,
  Text,
   View,
  TextInput,
  TouchableOpacity,
} from "react-native";


const Home = () => {
  
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Home de produtos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold'
  }
 
});
export default Home;
