import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ActivityIndicator, Card, IconButton, MD2Colors, Text } from 'react-native-paper'


export default function ListaProdutosScreen({ navigation, route }) {

  const { categoria } = route.params
  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    console.log('Categoria recebida:', categoria);

    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(resposta => {
        console.log('Produtos recebidos:', resposta.data.products);
        setProdutos(resposta.data.products)
      })
      .catch(erro => alert('Ocorreu um erro ao buscar '))

  }, [])



  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={{ margin: 5 }}
            onPress={() => navigation.navigate('ProdutoScreen', { produto: item })}
          >
            <Card.Title
              title={item.title}
              subtitle={item.price}
              right={(props) => <IconButton icon="chevron-right" size={30} />}

            />


          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={80} />
            <Text variant='titleLarge'>Aguarde...</Text>
          </View>
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50
  },
  loadingContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
  }
})