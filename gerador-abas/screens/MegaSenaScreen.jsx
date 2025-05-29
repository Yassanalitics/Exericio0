

import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button, Title } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    let numeros = [];
    while (numeros.length < 6) {
      let n = Math.floor(Math.random() * 60) + 1;
      if (numeros.indexOf(n) === -1) {
        numeros.push(n);
      }
    }
    numeros.sort();
    setJogoGerado(numeros);
    setJogosMegaSena([...jogosMegaSena, numeros]);
  };

  const resetarJogos = () => {
    setJogoGerado([]);
    setJogosMegaSena([]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Title style={{ marginTop: 30, marginBottom: 20 }}>Gerador Mega-Sena</Title>

      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Jogo Atual: {jogoGerado.join(' - ')}
      </Text>

      <FlatList
        style={{ marginBottom: 80 }}
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={{ marginBottom: 10 }}>
            Jogo {index + 1}: {item.join(' - ')}
          </Text>
        )}
      />

      <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button mode="contained" onPress={gerarJogo} style={{ marginBottom: 10 }}>
          Gerar Jogo
        </Button>
        <Button mode="outlined" onPress={resetarJogos}>
          Resetar Jogos
        </Button>
      </View>
    </View>
  );
};

export default MegaSenaScreen;
