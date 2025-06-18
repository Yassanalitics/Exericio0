import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { TMDB_API_KEY } from "@env";
import { Card, Button, IconButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function FilmesScreen() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [favoritosIds, setFavoritosIds] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    buscarFilmesPopulares();
    carregarFavoritos();
  }, []);

  async function buscarFilmesPopulares() {
    setCarregando(true);
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
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
      <View style={estilos.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (!item.poster_path) return null;

          const isFavorito = favoritosIds.includes(item.id);

          return (
            <Card style={estilos.cartao} elevation={3}>
              <View style={estilos.filmeCard}>
                <View style={estilos.posterContainer}>
                  <Image
                    style={estilos.poster}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={estilos.titulo}>{item.title}</Text>
                  <Text style={estilos.subtitulo}>{item.release_date || ""}</Text>
                  <Text style={estilos.tipoMidia}>Filme</Text>
                </View>
                <IconButton
                  icon={isFavorito ? "heart" : "heart-outline"}
                  color={isFavorito ? "red" : "gray"}
                  size={28}
                  onPress={() => toggleFavorito(item)}
                  style={{ marginRight: 8 }}
                />
              </View>
              <Card.Actions style={{ justifyContent: "flex-end" }}>
                <Button
                  mode="contained"
                  onPress={() =>
                    navigation.navigate("DescricaoFilme", { id: item.id, tipo: "movie" })
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

const estilos = StyleSheet.create({
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
  filmeCard: {
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
    color: "#ccc",
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
