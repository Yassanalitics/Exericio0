import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet, Alert, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Text, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function FavoritosScreen() {
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      carregarFavoritos();
    });
    return unsubscribe;
  }, [navigation]);

  async function carregarFavoritos() {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      setFavoritos(favs ? JSON.parse(favs) : []);
    } catch (error) {
      console.error("Erro ao carregar favoritos", error);
    }
  }

  async function excluirFavorito(id) {
    try {
      const novaLista = favoritos.filter((item) => item.id !== id);
      await AsyncStorage.setItem("@favoritos", JSON.stringify(novaLista));
      setFavoritos(novaLista);
    } catch (erro) {
      console.error("Erro ao excluir favorito:", erro);
    }
  }

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title || item.name}</Text>
          <Text style={styles.subtitle}>
            {item.release_date || item.first_air_date || ""}
          </Text>
        </View>
      </View>
      <Card.Actions style={styles.actions}>
        <Button
          mode="contained"
          style={styles.detalhes}
          onPress={() =>
            navigation.navigate("DescricaoFilme", {
              id: item.id,
              tipo: item.media_type === "tv" ? "tv" : "movie",
            })
          }
        >
          Detalhes
        </Button>
        <IconButton
          icon="trash-can-outline"
          iconColor="red"
          size={24}
          style={styles.iconTrash}
          onPress={() =>
            Alert.alert("Excluir", "Remover este favorito?", [
              { text: "Cancelar", style: "cancel" },
              { text: "Remover", onPress: () => excluirFavorito(item.id) },
            ])
          }
        />
      </Card.Actions>
    </Card>
  );

  if (favoritos.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text style={{ color: "#fff" }}>Nenhum favorito salvo.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1c245c" }}>
<View style={styles.container}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
  containerVazio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c245c",
  },
  card: {
    backgroundColor: "#2b336b",
    marginBottom: 16,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    padding: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#ccc",
  },
  actions: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  detalhes: {
    backgroundColor: "#D76C82",
  },
  voltar: {
    marginTop: 24,
    backgroundColor: "#D76C82",
    alignSelf: "center",
    width: "50%",
  },
});
