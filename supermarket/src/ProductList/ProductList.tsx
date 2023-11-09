import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { getProducts } from '../services/Products'
import Product from '../Components/Product'

function ProductList({navigation}) {
    function renderProduct({item: product}){
        return(
            <Product {...product} onPress={() =>{
                navigation.navigate('ProductDetails', {productId: product.id})
            }}/>
        )
    }
    const [products, setProducts] = useState([])

    useEffect(() =>{
        setProducts(getProducts())
    }, [])
  return (
    <FlatList style={styles.productList} contentContainerStyle={styles.productListContainer} data={products} renderItem={renderProduct} keyExtractor={(item) =>item.id.toString()} />
  )
}
const styles = StyleSheet.create({
    productList:{
        backgroundColor: "#E6D1D8"
    },
    productListContainer: {
      paddingVertical: 8,
      marginHorizontal:8
    }
  });
export default ProductList