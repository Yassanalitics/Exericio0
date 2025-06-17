import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import { TMDB_API_KEY } from "@env";
import { Card, TextInput, Button, IconButton, List, Avatar, Text,} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [consulta, setConsulta] = useState("");
  const [carregandoPesquisa, setCarregandoPesquisa] = useState(false);
  const [favoritosIds, setFavoritosIds] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    buscarFilmesEmCartaz();
    carregarFavoritos();
  }, []);

  async function buscarFilmesEmCartaz() {
    setCarregando(true);
    try {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregando(false);
  }

  async function buscarFilmes() {
    if (!consulta.trim()) return;
    setCarregandoPesquisa(true);
    try {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&query=${encodeURIComponent(
        consulta
      )}`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregandoPesquisa(false);
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
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          label="Pesquisar filmes, séries..."
          mode="outlined"
          value={consulta}
          onChangeText={setConsulta}
          onSubmitEditing={buscarFilmes}
          returnKeyType="search"
          left={<TextInput.Icon icon="magnify" />}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={buscarFilmes}
          loading={carregandoPesquisa}
          disabled={carregandoPesquisa}
          style={styles.botaoBuscar}
        >
          Buscar
        </Button>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (
            !item.poster_path ||
            (item.media_type &&
              item.media_type !== "movie" &&
              item.media_type !== "tv")
          ) {
            return null;
          }

          const isFavorito = favoritosIds.includes(item.id);
          const tipo = item.media_type === "movie" ? "Filme" : "Série";

          return (
            <Card style={styles.card}>
              <List.Item
                title={item.title || item.name}
                description={`${item.release_date || item.first_air_date || ""} • ${tipo}`}
                left={() => (
                  <Avatar.Image
                    size={56}
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                  />
                )}
                right={() => (
                  <IconButton
                    icon={isFavorito ? "heart" : "heart-outline"}
                    color={isFavorito ? "red" : "gray"}
                    onPress={() => toggleFavorito(item)}
                  />
                )}
                onPress={() =>
                  navigation.navigate("DescricaoFilme", {
                    id: item.id,
                    tipo: item.media_type === "tv" ? "tv" : "movie",
                  })
                }
              />
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 10,
  },
  titulo: {
    fontSize: 16,
    flexShrink: 1,
    color: "#000000",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#000000",
  },
  tipoMidia: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#aaa",
  },
  cartao: {
    paddingTop: 15,
    marginBottom: 15,
  },
  containerPesquisa: {
    flexDirection: "row",
    marginBottom: 15,
    gap: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
  },
});
