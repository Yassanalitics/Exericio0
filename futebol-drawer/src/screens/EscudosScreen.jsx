import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card, PaperProvider } from 'react-native-paper';
import React from 'react'

export default function EscudosScreen() {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Maracanã",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"]
    };
    return (
      <PaperProvider> 
     <View style={styles.container}>
        <StatusBar style="auto" />
        <Card>
        <Card.Cover source={{ uri: time.escudo }} />
    <Card.Content>
      <Text variant="titlelarge">Nome: {time.nome}</Text>
      <Text variant="bodyMedium">Mascpte: {time.mascote}</Text>
      <Text variant="bodyMedium">Fundação: {time.fundacao}</Text>
      <Text variant="bodyMedium">Cores: {time.cores}</Text>
    
    </Card.Content>
  </Card>
      </View>
      </PaperProvider>
      
    );
  }
const styles = StyleSheet.create({})