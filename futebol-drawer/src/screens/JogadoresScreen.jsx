import { StyleSheet, Text, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Card, PaperProvider, Avatar } from "react-native-paper";
import React from "react";

export default function JogadoresScreen() {
  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      posicao: "Atacante",
      idade: 27,
      imagem:
        "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg",
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      posicao: "Meia",
      idade: 29,
      imagem:
        "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      posicao: "Meia",
      idade: 33,
      imagem:
        "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg",
    },
    {
      nome: "David Luiz",
      numero: 23,
      posicao: "Zagueiro",
      idade: 35,
      imagem:
        "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg",
    },
    {
      nome: "Pedro",
      numero: 21,
      posicao: "Atacante",
      idade: 26,
      imagem:
        "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",
    },
  ];

  return (
    <View>
      <FlatList
        data={jogadores}
        renderItem={({ item }) => (
          <Card.Title
            title={item.nome}
            subtitle={item.numero}
            left={(props) => (
              <Avatar.Image {...props} source={{ uri: item.imagem }} />
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
