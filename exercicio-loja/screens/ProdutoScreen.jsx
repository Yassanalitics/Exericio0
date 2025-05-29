import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Avatar, Card, IconButton, MD2Colors, Text } from 'react-native-paper'

export default function ProdutoScreen({navigation, route}){
    const Produto = route.params
    const [roduto, setProduto] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/{idProduto}')
        .then(resposta =>{
            console.log(resposta.data.products)
            setProduto(resposta.data.products)
        })
        
    }, [Produto])

    return
<View>
    <Card>
        <Card.Title
        title={Produtoroduto.title}
        />
        <Card.Content>
            <text>{Produto.description}</text>
        </Card.Content>
    </Card>
</View>

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
