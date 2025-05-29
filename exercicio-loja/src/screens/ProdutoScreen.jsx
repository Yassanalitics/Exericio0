import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function ProdutoScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={produto.title}  />
        <Card.Content>
          <Text style={styles.text}>Preço: R$ {produto.price}</Text>
          <Text style={styles.text}>Descrição: {produto.description}</Text>
          <Text style={styles.text}>Avaliação: {produto.rating}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 8,
  },
});
