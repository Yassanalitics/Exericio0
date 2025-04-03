
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, PaperProvider, Paragraph, Title } from 'react-native-paper';

export default function App() {

  const listaCards = [
    {
      titulo: "Card 1",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card 2",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card 3",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    },
    {
      titulo: "Card 4",
      descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      imagem: 'https://picsum.photos/700'
    }
  ]

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <FlatList
          horizontal
          data={listaCards}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10, height: 500 }}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />

        <FlatList
          data={listaCards}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10 }}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
