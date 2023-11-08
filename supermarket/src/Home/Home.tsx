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
     <Text>Home de produtos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FD3DA",
    alignItems: "center",
    justifyContent: "center",
  },
 
});
export default Home;
