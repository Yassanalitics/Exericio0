import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Card, PaperProvider } from "react-native-paper";

const animais = [
  {
    numero: 1,
    nome: "Avestruz",
    imagem:
      "https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg",
  },
  {
    numero: 2,
    nome: "Águia",
    imagem:
      "https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg",
  },
  {
    numero: 3,
    nome: "Burro",
    imagem:
      "https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg",
  },
  {
    numero: 4,
    nome: "Borboleta",
    imagem:
      "https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg",
  },
  {
    numero: 5,
    nome: "Cachorro",
    imagem:
      "https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg",
  },
  {
    numero: 6,
    nome: "Cabra",
    imagem:
      "https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg",
  },
  {
    numero: 7,
    nome: "Carneiro",
    imagem:
      "https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg",
  },
  {
    numero: 8,
    nome: "Camelo",
    imagem:
      "https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg",
  },
  {
    numero: 9,
    nome: "Cobra",
    imagem:
      "https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg",
  },
  {
    numero: 10,
    nome: "Coelho",
    imagem:
      "https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg",
  },
];

const JogoDoBichoScreen = () => {
  const [animalGerado, setAnimalGerado] = useState([]);

  function gerarAnimal() {
    const i = Math.floor(Math.random() * animais.length);
    setAnimalGerado(animais[i]);
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <PaperProvider>
        <View>
          <Card>
            <Card.Cover style={{height: 300}} source={{ uri: animalGerado.imagem }} />
            <Card.Content>
              <Text variant="titlelarge">Nome: {animalGerado.nome}</Text>
              <Text variant="bodyMedium">Numero: {animalGerado.numero}</Text>
            </Card.Content>
          </Card>
        </View>
      </PaperProvider>

      <View style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
        <Button mode="contained" onPress={gerarAnimal}>
          Gerar Animal
        </Button>
      </View>
    </View>
  );
};

export default JogoDoBichoScreen;
