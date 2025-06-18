import React, { useEffect, useState } from "react";
import { Alert,  View, StyleSheet, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Text, Title, Button, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function DiarioScreen() {

  const [diarios, setDiarios] = useState([]);
  const navigation = useNavigation();

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
  async function excluirAnotacao(id) {
    try {
      const novaLista = diarios.filter((item) => item.id !== id);
      await AsyncStorage.setItem("@diario", JSON.stringify(novaLista));
      setDiarios(novaLista);
    } catch (erro) {
      console.error("Erro ao excluir anotação:", erro);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1c245c" }}>
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
              <View style={{ flex: 1, marginLeft: 10, }}>
                <Title style={{ color: "red" }}>{item.titulo}</Title>
                <Text style={{ color: "#fff" }} >{item.anotacoes}</Text>
              </View>
            </View>
            <IconButton
          icon="trash-can-outline"
          iconColor="red"
          size={24}
          style={styles.iconTrash}
          onPress={() =>
            Alert.alert("Excluir", "Remover Anotação?", [
              { text: "Cancelar", style: "cancel" },
              { text: "Remover", onPress: () => excluirAnotacao(item.id) },
            ])
          }
        />
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
      <Button mode="contained" style={styles.voltar} onPress={() => navigation.goBack()}>
                    Voltar
                  </Button>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c245c",
    padding: 10,
  },
  card: {
    backgroundColor: "#2b336b",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },
  voltar: {
    marginTop: 24,
    backgroundColor: "#D76C82",
    alignSelf: "center",
    width: "50%",
  },
});