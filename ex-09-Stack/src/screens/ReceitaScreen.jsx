
import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const ReceitaScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text variant="titleLarge" style={styles.title}>{receita.nome}</Text>
      <Text style={styles.text}>Tempo de preparo: {receita.tempoPreparo}</Text>
      <Text style={styles.text}>Porções: {receita.porcoes}</Text>

      <Text variant="titleMedium" style={styles.sectionTitle}>Ingredientes:</Text>
      {receita.ingredientes.map((item, index) => (
        <Text key={index} style={styles.text}>- {item}</Text>
      ))}

      <Text variant="titleMedium" style={styles.sectionTitle}>Modo de Preparo:</Text>
      {receita.modoPreparo.map((item, index) => (
        <Text key={index} style={styles.text}>{item}</Text>
      ))}

      <Button mode="contained" style={styles.button} onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#EBE8DB',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    marginVertical: 8,
    color: '#CF0F47',
  },
  sectionTitle: {
    marginTop: 16,
    color: '#CF0F47',
  },
  text: {
    color: '#000000',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#D76C82',
  },
});

export default ReceitaScreen;
