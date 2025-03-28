import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import Atleta from './Componentes/Atleta';

export default function App() {

  const listaAtletas = [
    {
      nome: "Neymar Jr",
      idade: 33,
      numero: 10,
      imagem: "https://i.pinimg.com/236x/1a/7c/c8/1a7cc88fb771c80c58a16245cd1fed6c.jpg"
    },
    {
      nome: "Lebron James",
      idade: 38,
      numero: 23,
      imagem: 'https://i.pinimg.com/236x/7c/48/19/7c481977061c7f68bb5970dae91f1787.jpg'
    },
    {
      nome: "Usain Bolt",
      idade: 40,
      numero: 1,
      imagem: 'https://i.pinimg.com/236x/45/b5/d1/45b5d16bf2a2d67cf519ca206fc8d28d.jpg'
    },
  ]


  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {
          listaAtletas.map(
            atleta => {
              return (
                <Atleta
                  nome={atleta.nome}
                  idade={atleta.idade}
                  numero={atleta.numero}
                  imagem={atleta.imagem}
                />
              )
            }
          )
        }



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});