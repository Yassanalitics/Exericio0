import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Text, Title } from "react-native-paper";

export default function DiarioScreen() {
  const [diarios, setDiarios] = useState([]);

  useEffect(() => {
    carregarDiarios();
  }, []);

  async function carregarDiarios() {
    try {
      const salvos = await AsyncStorage.getItem("@diario");
      if (salvos) {
        setDiarios(JSON.parse(salvos));
      }
    } catch (e) {
      console.error("Erro ao carregar diários:", e);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={diarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${item.poster}`,
                }}
                style={styles.poster}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Title>{item.titulo}</Title>
                <Text>{item.anotacoes}</Text>
              </View>
            </View>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c245c",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },
});