import React, { useEffect, useState } from "react";
import {View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";
import { Card, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../api";

export default function SeriesScreen() {
  const [series, setSeries] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [favoritosIds, setFavoritosIds] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    buscarSeriesNoAr();
    carregarFavoritos();
  }, []);

  async function buscarSeriesNoAr() {
    setCarregando(true);
    try {
      const resposta = await api.get("/tv/on_the_air", {
        params: { language: "pt-BR", page: 1 },
      });
      if (!dados.overview || dados.overview.trim() === "") {
        const respostaIngles = await api.get(`/${tipo}/${id}`, {
          params: { language: "en-US" },
        });
        dados = respostaIngles.data;
      }
      setSeries(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregando(false);
  }

  async function carregarFavoritos() {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      if (favs) {
        setFavoritosIds(JSON.parse(favs).map((f) => f.id));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos", error);
    }
  }

  async function toggleFavorito(item) {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      let favoritos = favs ? JSON.parse(favs) : [];

      const existe = favoritos.find((fav) => fav.id === item.id);

      if (existe) {
        favoritos = favoritos.filter((fav) => fav.id !== item.id);
      } else {
        favoritos.push(item);
      }

      await AsyncStorage.setItem("@favoritos", JSON.stringify(favoritos));
      setFavoritosIds(favoritos.map((f) => f.id));
    } catch (error) {
      console.error("Erro ao alterar favoritos", error);
    }
  }

  if (carregando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={series}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (!item.poster_path) return null;

          const isFavorito = favoritosIds.includes(item.id);

          return (
            <Card style={styles.cartao} elevation={3}>
              <View style={styles.serieCard}>
                <View style={styles.posterContainer}>
                  <Image
                    style={styles.poster}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.titulo}>{item.name}</Text>
                  <Text style={styles.subtitulo}>
                    {item.first_air_date || ""}
                  </Text>
                  <Text style={styles.tipoMidia}>Série</Text>
                </View>
                <IconButton
                  icon={isFavorito ? "heart" : "heart-outline"}
                  iconColor={isFavorito ? "red" : "white"}
                  onPress={() => toggleFavorito(item)}
                />
              </View>
              <Card.Actions style={{ justifyContent: "flex-end" }}>
                <Button
                  mode="contained"
                  onPress={() =>
                    navigation.navigate("DescricaoFilme", {
                      id: item.id,
                      tipo: "tv",
                    })
                  }
                >
                  Ver detalhes
                </Button>
              </Card.Actions>
            </Card>
          );
        }}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  serieCard: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  posterContainer: {
    width: 80,
    height: 120,
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 12,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  titulo: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitulo: {
    color: "#fff",
    marginBottom: 2,
  },
  tipoMidia: {
    fontStyle: "italic",
    color: "#aaa",
  },
  cartao: {
    marginBottom: 15,
    backgroundColor: "#2b336b",
  },
});
