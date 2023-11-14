import { styled } from 'nativewind';
import React from 'react'
import {Text ,Image, View, StyleSheet, TouchableOpacity} from "react-native";

function Product({name,price,image,onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image style={styles.image} source={{ uri: image}}/>
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card:{
      backgroundColor: "#f4f4f4",
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '4%',
  },
  image:{
    width: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer:{
    padding: 16
  },
  name:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  price:{
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  }

});

export default Product